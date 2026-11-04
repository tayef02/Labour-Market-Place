var lang = localStorage.getItem("lmp_lang");

if (lang == null) {
    lang = "bn";
}


var bnText = {

    "Labour Market Place": "লেবার মার্কেট প্লেস",
    "Labour Market Place — a fair day's work at a fair day's rate.": "লেবার মার্কেট প্লেস, ন্যায্য দিনের কাজে ন্যায্য দিনের মজুরি।",
    "Home": "হোম",
    "Jobs": "কাজ",
    "Find Workers": "শ্রমিক খুঁজুন",
    "Wage Rates": "মজুরির হার",
    "Blog": "ব্লগ",
    "Help": "সহায়তা",
    "About": "পরিচিতি",
    "Log in": "লগইন",
    "Register": "নিবন্ধন",
    "My page": "আমার পাতা",
    "Log out": "লগআউট",

    "Loading...": "আসছে...",
    "Save": "সংরক্ষণ",
    "Search": "খুঁজুন",
    "Send": "পাঠান",
    "Apply": "আবেদন",
    "Close": "বন্ধ",
    "Approve": "অনুমোদন",
    "Reject": "বাতিল",
    "Hire": "নিয়োগ",
    "No": "না",
    "Name": "নাম",
    "Phone": "ফোন",
    "Phone number": "ফোন নম্বর",
    "Password": "পাসওয়ার্ড",
    "Email": "ইমেইল",
    "Division": "বিভাগ",
    "District": "জেলা",
    "Upazila": "উপজেলা",
    "Union or Ward": "ইউনিয়ন বা ওয়ার্ড",
    "Union or ward": "ইউনিয়ন বা ওয়ার্ড",
    "Exact location": "সুনির্দিষ্ট ঠিকানা",
    "Trade": "কাজের ধরন",
    "Area": "এলাকা",
    "Wage": "মজুরি",
    "State": "অবস্থা",
    "Job": "কাজ",
    "Worker": "শ্রমিক",
    "Workers": "শ্রমিক",
    "Employer": "নিয়োগদাতা",
    "Employers": "নিয়োগদাতা",
    "Admin": "অ্যাডমিন",
    "Level": "স্তর",
    "Kind": "ধরন",
    "Reply": "উত্তর",
    "Subject": "বিষয়",
    "From": "কার কাছ থেকে",
    "Where": "কোথায়",
    "Stars": "তারা",
    "Rating": "রেটিং",
    "Answer": "উত্তর",
    "Sent on": "পাঠানো হয়েছে",
    "Their words": "তাদের মন্তব্য",
    "per day": "দৈনিক",
    "waiting": "অপেক্ষমাণ",
    "you": "আপনি",
    "log in": "লগইন",
    "log in to see": "দেখতে লগইন করুন",
    "Please": "অনুগ্রহ করে",
    "first.": "করুন।",
    "Choose": "বেছে নিন",
    "Choose one": "একটি বেছে নিন",
    "Choose division": "বিভাগ বেছে নিন",
    "Choose district": "জেলা বেছে নিন",
    "Choose upazila": "উপজেলা বেছে নিন",
    "All districts": "সব জেলা",
    "All trades": "সব কাজ",
    "Turn off": "বন্ধ করুন",
    "Turn on": "চালু করুন",
    "Block": "ব্লক",
    "Unblock": "আনব্লক",
    "active": "সক্রিয়",
    "blocked": "ব্লক করা",
    "off": "বন্ধ",
    "pending": "অপেক্ষমাণ",
    "open": "খোলা",
    "closed": "শেষ",
    "accepted": "গৃহীত",
    "rejected": "বাতিল",
    "done": "সম্পন্ন",
    "worker": "শ্রমিক",
    "client": "নিয়োগদাতা",
    "super": "সুপার",
    "moderator": "মডারেটর",
    "support": "সাপোর্ট",
    "super admin": "সুপার অ্যাডমিন",
    "moderator admin": "মডারেটর অ্যাডমিন",
    "support admin": "সাপোর্ট অ্যাডমিন",

    "Mason": "রাজমিস্ত্রি",
    "Helper": "হেলপার",
    "Electrician": "ইলেকট্রিশিয়ান",
    "Plumber": "প্লাম্বার",
    "Carpenter": "কাঠমিস্ত্রি",
    "Painter": "রং মিস্ত্রি",
    "Cleaner": "পরিচ্ছন্নতাকর্মী",
    "Cook": "বাবুর্চি",
    "Loader": "মালবাহক",
    "Driver": "ড্রাইভার",

    "Day labour · Bangladesh": "দিনমজুর · বাংলাদেশ",
    "Work today, at a rate you both agreed.": "আজই কাজ, দুজনে মিলে ঠিক করা মজুরিতে।",
    "Employers post the job and the daily wage. Workers see it, apply, and talk directly. No middle man taking a cut from the wage.": "নিয়োগদাতা কাজ আর দৈনিক মজুরি পোস্ট করেন। শ্রমিক দেখে আবেদন করেন, তারপর সরাসরি কথা বলেন। মাঝখানে কেউ মজুরি থেকে ভাগ নেয় না।",
    "See today's work": "আজকের কাজ দেখুন",
    "Find a worker": "শ্রমিক খুঁজুন",
    "Posted recently": "সাম্প্রতিক কাজ",
    "No open work right now.": "এখন কোনো খোলা কাজ নেই।",
    "Could not load the list.": "তালিকাটি আনা যায়নি।",
    "Workers registered": "নিবন্ধিত শ্রমিক",
    "Jobs open now": "এখন খোলা কাজ",
    "Jobs finished": "শেষ হওয়া কাজ",
    "How it works": "কীভাবে কাজ করে",
    "Make an account": "অ্যাকাউন্ট খুলুন",
    "Sign up as a worker looking for work, or as an employer who needs hands.": "কাজ খুঁজছেন এমন শ্রমিক হিসেবে, বা লোক দরকার এমন নিয়োগদাতা হিসেবে নিবন্ধন করুন।",
    "Post or apply": "পোস্ট বা আবেদন",
    "An employer posts the job and the wage. Workers apply to the ones that fit.": "নিয়োগদাতা কাজ আর মজুরি পোস্ট করেন। যাদের মানায় তারা আবেদন করেন।",
    "Agree and start": "রাজি হয়ে শুরু",
    "The employer picks a worker, they talk by phone, and the work begins.": "নিয়োগদাতা একজনকে বাছেন, ফোনে কথা হয়, কাজ শুরু হয়।",
    "Rate each other": "একে অন্যের রেটিং",
    "When the job is closed the employer rates the worker, so good hands stand out.": "কাজ শেষ হলে নিয়োগদাতা রেটিং দেন, তাই ভালো কারিগর আলাদা করে চেনা যায়।",

    "Open work": "খোলা কাজ",
    "Every job here was checked by an admin before it went up.": "এখানকার প্রতিটি কাজ ওঠার আগে অ্যাডমিন দেখে নিয়েছেন।",
    "See the details": "বিস্তারিত দেখুন",
    "Posted by": "পোস্ট করেছেন",
    "Hands needed": "কতজন লাগবে",
    "Starts": "শুরু",
    "Back to all jobs": "সব কাজে ফিরুন",
    "Apply for this job": "এই কাজে আবেদন করুন",
    "This job is not open, so you cannot apply.": "কাজটি খোলা নেই, তাই আবেদন করা যাবে না।",
    "This job was not found.": "কাজটি পাওয়া যায়নি।",
    "Exact spot": "ঠিক জায়গা",
    "How long": "কতদিন",

    "Find workers": "শ্রমিক খুঁজুন",
    "Pick a district and a trade, then call the worker yourself.": "জেলা আর কাজের ধরন বেছে নিন, তারপর নিজেই ফোন করুন।",
    "trade not set": "কাজ ঠিক করা নেই",
    "no rating yet": "এখনো রেটিং নেই",

    "Wage rates": "মজুরির হার",
    "What employers are really paying, worked out from the jobs posted on this site.": "নিয়োগদাতারা আসলে কত দিচ্ছেন, এই সাইটের পোস্ট করা কাজ থেকে হিসাব করা।",
    "Show rates": "হার দেখুন",
    "Jobs posted": "পোস্ট করা কাজ",
    "Lowest": "সর্বনিম্ন",
    "Average": "গড়",
    "Highest": "সর্বোচ্চ",
    "A daily wage, in taka. Treat it as a guide, not a fixed price.": "দৈনিক মজুরি, টাকায়। এটি ধারণা দেওয়ার জন্য, নির্ধারিত দাম নয়।",
    "No job posted here yet.": "এখানে এখনো কোনো কাজ পোস্ট হয়নি।",

    "Fill this once. After that you only need your phone number to log in.": "একবার পূরণ করুন। এরপর শুধু ফোন নম্বর দিয়েই লগইন করতে পারবেন।",
    "I am here to": "আমি এসেছি",
    "Work. I am looking for jobs.": "কাজ করতে। আমি কাজ খুঁজছি।",
    "Hire. I need workers.": "লোক নিতে। আমার শ্রমিক দরকার।",
    "Admin accounts are made inside the admin panel only.": "অ্যাডমিন অ্যাকাউন্ট শুধু অ্যাডমিন প্যানেল থেকেই তৈরি হয়।",
    "Full name": "পুরো নাম",
    "Type it again": "আবার লিখুন",
    "I agree to the terms and conditions": "আমি শর্তাবলীতে সম্মত",
    "Create account": "অ্যাকাউন্ট খুলুন",
    "Already have one?": "আগে থেকেই আছে?",
    "New here?": "নতুন এসেছেন?",
    "Worker / Employer": "শ্রমিক / নিয়োগদাতা",
    "Workers and employers log in here.": "শ্রমিক আর নিয়োগদাতারা এখানে লগইন করেন।",
    "Admin accounts are made inside the admin panel, not here.": "অ্যাডমিন অ্যাকাউন্ট অ্যাডমিন প্যানেলে তৈরি হয়, এখানে নয়।",

    "Work for you": "আপনার জন্য কাজ",
    "My applications": "আমার আবেদন",
    "What employers said": "নিয়োগদাতারা যা বলেছেন",
    "My trade": "আমার কাজ",
    "All jobs": "সব কাজ",
    "Applications sent": "পাঠানো আবেদন",
    "Times hired": "কতবার নিয়োগ",
    "My rating": "আমার রেটিং",
    "Employers find you by your trade and your daily rate.": "নিয়োগদাতারা আপনার কাজ আর দৈনিক মজুরি দেখে খুঁজে পান।",
    "My daily rate (Tk)": "আমার দৈনিক মজুরি (টাকা)",
    "About my work": "আমার কাজ সম্পর্কে",
    "Jobs that need your trade.": "আপনার কাজের ধরনের কাজগুলো।",
    "Pick your trade below first.": "আগে নিচে আপনার কাজ বেছে নিন।",
    "No open job for your trade right now.": "এখন আপনার কাজের ধরনে কোনো খোলা কাজ নেই।",
    "You have not applied anywhere yet.": "আপনি এখনো কোথাও আবেদন করেননি।",
    "No employer has rated you yet.": "কোনো নিয়োগদাতা এখনো আপনাকে রেটিং দেননি।",
    "Saved. Employers can see this now.": "সংরক্ষিত। নিয়োগদাতারা এখন দেখতে পাবেন।",

    "Post a job": "কাজ পোস্ট করুন",
    "My job posts": "আমার পোস্ট করা কাজ",
    "Who applied": "কারা আবেদন করেছে",
    "Rate the workers": "শ্রমিকদের রেটিং দিন",
    "Find workers": "শ্রমিক খুঁজুন",
    "Live now": "এখন চালু",
    "Waiting for admin": "অ্যাডমিনের অপেক্ষায়",
    "Posted in total": "মোট পোস্ট",
    "The job goes live right away.": "কাজটি সাথে সাথেই সবার সামনে যাবে।",
    "An admin checks it first. After that every worker can see it.": "অ্যাডমিন আগে দেখবেন। এরপর সব শ্রমিক দেখতে পাবেন।",
    "What is the work": "কী কাজ",
    "Trade needed": "কোন কাজের লোক",
    "Daily wage (Tk)": "দৈনিক মজুরি (টাকা)",
    "How many hands": "কতজন লাগবে",
    "Start date": "শুরুর তারিখ",
    "Anything else they should know": "আর যা জানা দরকার",
    "Phone number for this job": "এই কাজের ফোন নম্বর",
    "Post the job": "কাজটি পোস্ট করুন",
    "Press Close once the work is finished. Then you can rate the worker.": "কাজ শেষ হলে বন্ধ চাপুন। তারপর শ্রমিককে রেটিং দিতে পারবেন।",
    "Call them, agree the rate, then press Hire.": "ফোন করুন, মজুরি ঠিক করুন, তারপর নিয়োগ চাপুন।",
    "For the job": "যে কাজের জন্য",
    "A word about them": "তাদের সম্পর্কে দুই কথা",
    "Workers you hired on a job you have closed.": "বন্ধ করা কাজে যাদের নিয়োগ দিয়েছিলেন।",
    "You have not posted anything yet.": "আপনি এখনো কিছু পোস্ট করেননি।",
    "Nobody has applied yet.": "এখনো কেউ আবেদন করেনি।",
    "Nothing to rate right now.": "এখন রেটিং দেওয়ার কিছু নেই।",
    "Rating saved.": "রেটিং সংরক্ষিত।",
    "Job closed. You can rate the worker now.": "কাজ বন্ধ হলো। এখন শ্রমিককে রেটিং দিতে পারেন।",
    "Posted. It is live on the Jobs page now.": "পোস্ট হয়েছে। এখন কাজ পাতায় দেখা যাচ্ছে।",
    "Posted. An admin will check it shortly.": "পোস্ট হয়েছে। অ্যাডমিন শীঘ্রই দেখবেন।",
    "Could not post the job. Try again.": "কাজটি পোস্ট করা যায়নি। আবার চেষ্টা করুন।",

    "Job approval": "কাজ অনুমোদন",
    "Complaints": "অভিযোগ",
    "Users": "ব্যবহারকারী",
    "Admin accounts": "অ্যাডমিন অ্যাকাউন্ট",
    "Jobs waiting": "অপেক্ষমাণ কাজ",
    "Open complaints": "খোলা অভিযোগ",
    "Nothing goes live until it is approved here.": "এখানে অনুমোদন না হলে কিছুই সবার সামনে যায় না।",
    "Nothing is waiting.": "কিছু অপেক্ষায় নেই।",
    "Write a reply and it closes the complaint.": "উত্তর লিখলেই অভিযোগটি বন্ধ হয়ে যাবে।",
    "No complaints.": "কোনো অভিযোগ নেই।",
    "Block anyone who breaks the rules.": "নিয়ম ভাঙলে ব্লক করুন।",
    "A Support Admin can look but cannot block.": "সাপোর্ট অ্যাডমিন দেখতে পারেন, ব্লক করতে পারেন না।",
    "No users yet.": "এখনো কোনো ব্যবহারকারী নেই।",
    "Only a Super Admin sees this box.": "শুধু সুপার অ্যাডমিন এই বাক্সটি দেখেন।",
    "Super Admin": "সুপার অ্যাডমিন",
    "Moderator Admin": "মডারেটর অ্যাডমিন",
    "Support Admin": "সাপোর্ট অ্যাডমিন",
    "Add admin": "অ্যাডমিন যোগ করুন",
    "No admins found.": "কোনো অ্যাডমিন পাওয়া যায়নি।",
    "Admin added.": "অ্যাডমিন যোগ হয়েছে।",
    "Admin updated.": "অ্যাডমিন হালনাগাদ হয়েছে।",
    "User updated.": "ব্যবহারকারী হালনাগাদ হয়েছে।",
    "Reply sent.": "উত্তর পাঠানো হয়েছে।",
    "Write a reply first.": "আগে উত্তর লিখুন।",
    "This number is already an admin.": "এই নম্বরটি আগে থেকেই অ্যাডমিন।",

    "Help and complaints": "সহায়তা ও অভিযোগ",
    "Tell us what went wrong. A Support Admin reads every one of these.": "কী সমস্যা হয়েছে জানান। সাপোর্ট অ্যাডমিন প্রতিটি পড়েন।",
    "Send a complaint": "অভিযোগ পাঠান",
    "My complaints": "আমার অভিযোগ",
    "What is it about": "কী নিয়ে",
    "Tell us more": "বিস্তারিত বলুন",
    "Sent. Support will look at it soon.": "পাঠানো হয়েছে। সাপোর্ট শীঘ্রই দেখবে।",
    "Could not send it. Try again.": "পাঠানো যায়নি। আবার চেষ্টা করুন।",
    "You have not sent anything yet.": "আপনি এখনো কিছু পাঠাননি।",
    "Log in to see your complaints.": "আপনার অভিযোগ দেখতে লগইন করুন।",

    "Phone number must be 11 digits.": "ফোন নম্বর ১১ সংখ্যার হতে হবে।",
    "Password must be 6 letters or more.": "পাসওয়ার্ড ৬ অক্ষর বা তার বেশি হতে হবে।",
    "The two passwords are not the same.": "দুটি পাসওয়ার্ড এক নয়।",
    "This number already has an account. Log in instead.": "এই নম্বরে আগেই অ্যাকাউন্ট আছে। লগইন করুন।",
    "Could not create the account. Try again.": "অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।",
    "Account made. Taking you to the login page.": "অ্যাকাউন্ট তৈরি হয়েছে। লগইন পাতায় নিয়ে যাচ্ছি।",
    "Phone number or password is wrong.": "ফোন নম্বর বা পাসওয়ার্ড ভুল।",
    "This account is turned off. Contact support.": "এই অ্যাকাউন্টটি বন্ধ। সাপোর্টে যোগাযোগ করুন।",
    "Only a worker can apply to a job.": "শুধু শ্রমিকই কাজে আবেদন করতে পারেন।",
    "You have already applied to this job.": "আপনি এই কাজে আগেই আবেদন করেছেন।",
    "Applied. The employer can see you now.": "আবেদন হয়েছে। নিয়োগদাতা এখন আপনাকে দেখতে পাবেন।",
    "Nothing found. Try a wider search.": "কিছু পাওয়া যায়নি। আরো বড় পরিসরে খুঁজুন।",
    "No worker found. Try a wider search.": "কোনো শ্রমিক পাওয়া যায়নি। আরো বড় পরিসরে খুঁজুন।",
    "jobs open": "টি কাজ খোলা",
    "workers found": "জন শ্রমিক পাওয়া গেছে",
    "Worked out from": "হিসাব করা হয়েছে",
    "job posts.": "টি কাজের পোস্ট থেকে।",
    "Job approved.": "কাজ অনুমোদিত।",
    "Job rejected.": "কাজ বাতিল।",
    "Worker hired.": "শ্রমিক নিয়োগ হয়েছে।",
    "Worker turned down.": "শ্রমিককে বাতিল করা হয়েছে।",

    "Your full name": "আপনার পুরো নাম",
    "Your password": "আপনার পাসওয়ার্ড",
    "Not required": "দিতে হবে না",
    "6 or more": "৬ বা তার বেশি",
    "Same password": "একই পাসওয়ার্ড",
    "Name of your union or ward": "আপনার ইউনিয়ন বা ওয়ার্ডের নাম",
    "Name of the union or ward": "ইউনিয়ন বা ওয়ার্ডের নাম",
    "Village, road, house number or a landmark": "গ্রাম, রাস্তা, বাড়ির নম্বর বা চেনা কোনো জায়গা",
    "Two masons for a boundary wall": "সীমানা দেয়ালের জন্য দুজন রাজমিস্ত্রি",
    "6 days": "৬ দিন",
    "Tools provided, food given, start time": "যন্ত্রপাতি দেওয়া হবে, খাবার দেওয়া হবে, শুরুর সময়",
    "Years of experience, what you have built": "কত বছরের অভিজ্ঞতা, কী কী কাজ করেছেন",
    "Worked well, came on time": "ভালো কাজ করেছেন, সময়মতো এসেছেন",
    "Employer did not pay the agreed wage": "নিয়োগদাতা কথামতো মজুরি দেননি",
    "Date, place, name of the other person": "তারিখ, জায়গা, অন্য পক্ষের নাম",
    "Write a reply": "উত্তর লিখুন",

    "About this project": "প্রকল্প পরিচিতি",
    "Why it exists, who it is for, and how it was built.": "কেন বানানো, কাদের জন্য, আর কী দিয়ে বানানো।",
    "The problem": "সমস্যাটি",
    "What this site does": "সাইটটি যা করে",
    "Who uses it": "কারা ব্যবহার করেন",
    "How it was built": "কী দিয়ে বানানো",
    "What is still to come": "যা এখনো বাকি",
    "Front end": "সামনের দিক",
    "Database": "ডাটাবেজ",
    "Tables": "টেবিল",
    "Session": "সেশন",
    "Framework": "ফ্রেমওয়ার্ক",
    "Plain HTML, CSS and JavaScript": "সাধারণ HTML, CSS আর JavaScript",
    "Supabase (PostgreSQL)": "Supabase (PostgreSQL)",
    "Browser localStorage": "ব্রাউজারের localStorage",
    "None, and no build step": "নেই, কোনো build step-ও নেই",
    "Finds work, applies, builds a rating": "কাজ খোঁজেন, আবেদন করেন, রেটিং গড়েন",
    "Posts jobs, picks workers, rates them": "কাজ পোস্ট করেন, শ্রমিক বাছেন, রেটিং দেন",
    "Everything, including making other admins": "সবকিছু, নতুন অ্যাডমিন বানানো সহ",
    "Approves or rejects job posts, blocks users": "কাজ অনুমোদন বা বাতিল করেন, ব্যবহারকারী ব্লক করেন",
    "Answers complaints, can see users but not block": "অভিযোগের উত্তর দেন, ব্যবহারকারী দেখেন কিন্তু ব্লক করতে পারেন না",

    "Short notes for workers and employers. Written by hand, not from the database.": "শ্রমিক আর নিয়োগদাতাদের জন্য ছোট লেখা। হাতে লেখা, ডাটাবেজ থেকে নয়।",
    "For workers": "শ্রমিকদের জন্য",
    "For employers": "নিয়োগদাতাদের জন্য",
    "How this works": "এটি যেভাবে চলে",
    "Agree the wage before you start, not after": "কাজ শুরুর আগেই মজুরি ঠিক করুন, পরে নয়",
    "A good job post gets you better hands": "ভালো পোস্ট দিলে ভালো লোক পাবেন",
    "What your rating means": "আপনার রেটিং যা বোঝায়",
    "3 minutes to read": "৩ মিনিটের পড়া",
    "2 minutes to read": "২ মিনিটের পড়া",
    "More posts will be added here.": "এখানে আরো লেখা যোগ হবে।",

    "In most towns in Bangladesh a day labourer stands at a labour point every morning and waits for someone to come and hire him. He does not know what work is available that day, what the going rate is, or whether the person hiring him will pay what was agreed. An employer who needs four helpers at short notice has the same trouble in reverse: he must go to the labour point and hope the right trade is standing there.": "বাংলাদেশের বেশিরভাগ শহরে একজন দিনমজুর প্রতিদিন সকালে শ্রমের হাটে দাঁড়িয়ে থাকেন, কেউ এসে নিয়ে যাবে এই আশায়। সেদিন কী কাজ আছে, মজুরি কত চলছে, বা যিনি নিচ্ছেন তিনি কথামতো টাকা দেবেন কিনা কিছুই তিনি জানেন না। হঠাৎ চারজন হেলপার দরকার এমন নিয়োগদাতারও একই সমস্যা, উল্টো দিক থেকে: তাঁকে শ্রমের হাটে গিয়ে আশা করতে হয় যে সঠিক কাজের লোক সেদিন দাঁড়িয়ে আছেন।",

    "Between the two there is usually a middle man, and he takes a cut of a wage that is already small.": "দুজনের মাঝখানে সাধারণত একজন দালাল থাকেন, আর তিনি এমনিতেই কম মজুরি থেকে ভাগ নিয়ে নেন।",

    "An employer posts the work and the daily wage he is offering. A worker sees the posts that match his trade and his district, applies to the ones that suit him, and the two talk by phone and agree between themselves. The site does not touch the money and takes nothing from the wage.": "নিয়োগদাতা কাজ আর যে দৈনিক মজুরি দিচ্ছেন তা পোস্ট করেন। শ্রমিক তাঁর কাজের ধরন আর জেলার সাথে মেলে এমন পোস্ট দেখেন, যেগুলো মানায় সেগুলোতে আবেদন করেন, তারপর দুজনে ফোনে কথা বলে নিজেরাই রাজি হন। সাইটটি টাকায় হাত দেয় না, মজুরি থেকে কিছু নেয় না।",

    "After the work is finished the employer rates the worker, so a worker who turns up on time and does clean work builds something he can show.": "কাজ শেষ হলে নিয়োগদাতা শ্রমিককে রেটিং দেন, তাই যিনি সময়মতো আসেন আর পরিষ্কার কাজ করেন তিনি দেখানোর মতো কিছু গড়ে তোলেন।",

    "Passwords are stored as plain text and need to be hashed. The database access rules are open and need to be tightened per role. Phone numbers are not verified by OTP. Beyond security, the plan is SMS and WhatsApp alerts when a job is approved, a map view of where the work is, photographs on worker profiles, and a Bengali version of every page.": "পাসওয়ার্ড এখন সাধারণ লেখা হিসেবে রাখা, hash করা দরকার। ডাটাবেজে ঢোকার নিয়ম খোলা, role অনুযায়ী কড়া করতে হবে। ফোন নম্বর OTP দিয়ে যাচাই হয় না। নিরাপত্তার বাইরে পরিকল্পনা হলো কাজ অনুমোদন হলে SMS আর WhatsApp বার্তা, কাজ কোথায় তা ম্যাপে দেখানো, শ্রমিকের প্রোফাইলে ছবি।",

    "Written for a Computer Science and Engineering course project at Sylhet International University.": "সিলেট ইন্টারন্যাশনাল ইউনিভার্সিটির কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং কোর্স প্রজেক্টের জন্য তৈরি।",

    "The commonest complaint on this site is a wage that shrank by the end of the day. Almost every one of them starts the same way: the work began before anyone said a number out loud.": "এই সাইটে সবচেয়ে বেশি যে অভিযোগ আসে তা হলো দিন শেষে মজুরি কমে যাওয়া। প্রায় প্রতিটিরই শুরু একইভাবে: কেউ মুখে অঙ্কটা বলার আগেই কাজ শুরু হয়ে গেছে।",

    "Before you pick up a tool, say the figure back to the person hiring you and get a yes. Ask how many days the work will run and what happens if it rains. If food or tools were promised, say that out loud too. The job post on this site already carries the wage the employer offered, so open it on your phone and point at it.": "হাতিয়ার ধরার আগে যিনি নিচ্ছেন তাঁকে অঙ্কটা বলে হ্যাঁ শুনে নিন। কাজ কয়দিন চলবে আর বৃষ্টি হলে কী হবে জিজ্ঞেস করুন। খাবার বা যন্ত্রপাতির কথা থাকলে সেটাও মুখে বলুন। এই সাইটের পোস্টে নিয়োগদাতার দেওয়া মজুরি লেখাই আছে, তাই ফোনে খুলে দেখিয়ে দিন।",

    "Posts that say only \"need a mason\" sit unanswered. Posts that say the trade, the daily wage, how many people, how many days, and exactly where the site is get answered within hours.": "শুধু \"রাজমিস্ত্রি লাগবে\" লেখা পোস্টে কেউ সাড়া দেয় না। যে পোস্টে কাজের ধরন, দৈনিক মজুরি, কতজন, কতদিন আর ঠিক কোথায় কাজ লেখা থাকে, সেখানে কয়েক ঘণ্টার মধ্যেই সাড়া আসে।",

    "Be honest about the hard parts of the work. A worker who turns up and finds the job heavier than he was told will leave, and you will have lost a day. Write the landmark nearest the site, not just the union name, so people can find you without ringing you five times.": "কাজের কঠিন দিকগুলো নিয়ে সৎ থাকুন। এসে যদি কেউ দেখেন কাজ বলার চেয়ে ভারী, তিনি চলে যাবেন, আর আপনার একটা দিন নষ্ট হবে। শুধু ইউনিয়নের নাম নয়, কাজের সবচেয়ে কাছের চেনা জায়গাটার নাম লিখুন, যাতে পাঁচবার ফোন না করেই লোকে খুঁজে পায়।",

    "When an employer closes a job, he can give every worker he hired a rating out of five and write a line about them. That rating shows on your card on the Find Workers page, so an employer looking for a mason in your district sees it before he calls you.": "নিয়োগদাতা কাজ বন্ধ করলে তিনি নিয়োগ দেওয়া প্রত্যেক শ্রমিককে পাঁচের মধ্যে রেটিং আর এক লাইন মন্তব্য দিতে পারেন। সেই রেটিং শ্রমিক খুঁজুন পাতায় আপনার কার্ডে দেখায়, তাই আপনার জেলায় রাজমিস্ত্রি খুঁজছেন এমন নিয়োগদাতা ফোন করার আগেই সেটা দেখেন।",

    "Nobody can rate you unless they actually hired you on a job that has been closed, and each employer can rate you once per job. Turn up on time, finish what you started, and the rating takes care of itself.": "বন্ধ হওয়া কোনো কাজে সত্যিই আপনাকে নিয়োগ না দিলে কেউ আপনাকে রেটিং দিতে পারে না, আর প্রতিটি কাজে একজন নিয়োগদাতা একবারই দিতে পারেন। সময়মতো আসুন, শুরু করা কাজ শেষ করুন, রেটিং নিজেই ঠিক হয়ে যাবে।"
};


function t(text) {

    if (lang == "en" || text == null) {
        return text;
    }

    var word = bnText[text];

    if (word == null) {
        return text;
    }

    return word;
}


function translateInside(node) {

    for (var i = 0; i < node.childNodes.length; i++) {

        var child = node.childNodes[i];

        if (child.nodeType == 3) {

            var raw = child.nodeValue;
            var cut = raw.trim();
            var key = cut.replace(/\s+/g, " ");
            var word = bnText[key];

            if (key != "" && word != null) {
                child.nodeValue = raw.replace(cut, word);
            }

        } else {
            translateInside(child);
        }
    }
}


function applyLanguage() {

    if (lang == "en") {
        return;
    }

    translateInside(document.body);

    var boxes = document.querySelectorAll("[placeholder]");

    for (var i = 0; i < boxes.length; i++) {
        var word = bnText[boxes[i].placeholder];

        if (word != null) {
            boxes[i].placeholder = word;
        }
    }

    var title = bnText[document.title.split(" | ")[0]];

    if (title != null) {
        document.title = title + " | লেবার মার্কেট প্লেস";
    }
}


function langButton() {
    return '<li><button type="button" class="btn btn-line btn-lang" onclick="switchLang()">'
         + (lang == "bn" ? "EN" : "বাংলা") + '</button></li>';
}


function switchLang() {

    lang = (lang == "bn") ? "en" : "bn";

    localStorage.setItem("lmp_lang", lang);

    window.location.reload();
}
