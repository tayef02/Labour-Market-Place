create table profiles (
  id uuid primary key references auth.users on delete cascade,
  name text,
  phone text,
  role text,
  division text,
  district text,
  upazila text,
  union_name text,
  exact_location text,
  skill text,
  daily_rate int,
  about text,
  is_active boolean default true,
  created_at timestamptz default now()
);

alter table profiles enable row level security;

create policy "sobai dekhte pare"
  on profiles for select
  using (true);

create policy "nijer ta banate pare"
  on profiles for insert
  with check (auth.uid() = id);

create policy "nijer ta bodlate pare"
  on profiles for update
  using (auth.uid() = id);


create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, name, phone, role)
  values (
    new.id,
    new.raw_user_meta_data ->> 'name',
    new.raw_user_meta_data ->> 'phone',
    new.raw_user_meta_data ->> 'role'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();


create table jobs (
  id bigint generated always as identity primary key,
  title text not null,
  job_type text,
  wage int,
  workers_needed int default 1,
  duration text,
  start_date date,
  division text,
  district text,
  upazila text,
  union_name text,
  address text,
  details text,
  contact_phone text,
  status text default 'open',
  client_id uuid references profiles(id) on delete cascade,
  client_name text,
  created_at timestamptz default now()
);

alter table jobs enable row level security;

create policy "sobai kaj dekhte pare"
  on jobs for select
  using (true);

create policy "nijer kaj post korte pare"
  on jobs for insert
  with check (auth.uid() = client_id);

create policy "nijer kaj bodlate pare"
  on jobs for update
  using (auth.uid() = client_id);


create table applications (
  id bigint generated always as identity primary key,
  job_id bigint references jobs(id) on delete cascade,
  worker_id uuid references profiles(id) on delete cascade,
  worker_name text,
  worker_phone text,
  status text default 'pending',
  created_at timestamptz default now(),
  unique (job_id, worker_id)
);

alter table applications enable row level security;

create policy "nijer abedon dekha"
  on applications for select
  using (auth.uid() = worker_id);

create policy "nijer kajer abedon dekha"
  on applications for select
  using (
    exists (
      select 1 from jobs
      where jobs.id = applications.job_id
        and jobs.client_id = auth.uid()
    )
  );

create policy "nije abedon kora"
  on applications for insert
  with check (auth.uid() = worker_id);

create policy "kajer malik status bodlay"
  on applications for update
  using (
    exists (
      select 1 from jobs
      where jobs.id = applications.job_id
        and jobs.client_id = auth.uid()
    )
  );


insert into jobs (title, job_type, wage, workers_needed, duration, start_date,
                  division, district, upazila, union_name, address, details,
                  contact_phone, status, client_name)
values
('সীমানা দেয়ালের জন্য দুজন রাজমিস্ত্রি', 'Mason', 950, 2, '৬ দিন', current_date + 1,
 'Sylhet','Sylhet','Sylhet Sadar','শাহপরান','শাহপরান গেট, মেইন রোড থেকে ২০০ গজ',
 'ইট-বালু সাইটে আছে। সকাল ৮টায় কাজ শুরু।', '01811000001', 'open', 'আমিনুল ইসলাম'),

('ছাদ ঢালাইয়ের জন্য হেলপার', 'Helper', 650, 4, '২ দিন', current_date + 2,
 'Sylhet','Sylhet','Sylhet Sadar','শাহপরান','শাহপরান গেট, নতুন বিল্ডিং সাইট',
 'ঢালাইয়ের দিন সকাল ৬টা থেকে।', '01811000001', 'open', 'আমিনুল ইসলাম'),

('নতুন বাড়ির ইলেকট্রিক ওয়্যারিং', 'Electrician', 1200, 1, '১০ দিন', current_date + 3,
 'Sylhet','Sylhet','Balaganj','পূর্ব গৌরীপুর','বাজার সংলগ্ন তিনতলা বাড়ি',
 'তিনতলা বাড়ি। অভিজ্ঞ লোক দরকার।', '01811000002', 'open', 'সালাম মিয়া'),

('চা বাগানের কোয়ার্টারে রঙের কাজ', 'Painter', 880, 3, '৭ দিন', current_date + 4,
 'Sylhet','Moulvibazar','Sreemangal','ভুনবীর','ভুনবীর চা বাগান, ৪ নম্বর লাইন',
 'আটটা কোয়ার্টার। রং দেওয়া হবে।', '01811000003', 'open', 'ফারুক আহমেদ'),

('সিমেন্টের বস্তা লোড-আনলোড', 'Loader', 720, 6, '১ দিন', current_date,
 'Sylhet','Sunamganj','Chhatak','কালারুকা','কালারুকা নতুন রাস্তার মোড়',
 'দুই ট্রাক সিমেন্ট। সকাল ৭টা থেকে।', '01811000004', 'open', 'নাসরিন বেগম');
