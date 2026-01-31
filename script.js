const data = {
    prefixes: [
        {t: "A-, An-", m: "Without / Lacking", e: "Anemia (فقر الدم)", ar: "بدون / يفتقر لـ"},
        {t: "Andr/o-", m: "Male", e: "Androgen (هرمون الذكورة)", ar: "ذكر"},
        {t: "Anti-", m: "Against", e: "Anticholinergic drugs (مضاد للأستيل كولين)", ar: "ضد / مضاد"},
        {t: "Auto-", m: "Self", e: "Autocrine (إفراز ذاتي التأثير)", ar: "ذاتي"},
        {t: "Bio-", m: "Life", e: "Biology (علم الأحياء)", ar: "حياة"},
        {t: "Chem/o-", m: "Chemistry", e: "Chemotherapy (علاج كيميائي)", ar: "كيمياء"},
        {t: "Contra-", m: "Against", e: "Contraception (منع الحمل)", ar: "ضد"},
        {t: "Cyt/o-", m: "Cell", e: "Cytokine (بروتين تفرزه الخلايا)", ar: "خلية"},
        {t: "Dis-", m: "Separation / Taking apart", e: "Dissection (تشريح)", ar: "انفصال / تفكيك"},
        {t: "Dys-", m: "Difficult / Abnormal", e: "Dyspnea (صعوبة التنفس)", ar: "صعب / غير طبيعي"},
        {t: "Eu-", m: "Good / Well", e: "Eupnea (تنفس طبيعي)", ar: "جيد / طبيعي"},
        {t: "Fibr/o-", m: "Fiber", e: "Fibrosis (تليف)", ar: "ليف"},
        {t: "Gyn/o-, Gynec-", m: "Female", e: "Gynecology (طب النساء)", ar: "أنثى"},
        {t: "Hydr/o-", m: "Water", e: "Hydrocephalus (استسقاء الرأس)", ar: "ماء"},
        {t: "Idio-", m: "Self / One's own", e: "Idiopathic (مرض مجهول السبب)", ar: "مجهول السبب"},
        {t: "Lyso-, Lys-", m: "Breakdown / Destruction", e: "Lysosome (جسيم محلل)", ar: "انحلال / تدمير"},
        {t: "Mal-", m: "Abnormal / Bad", e: "Malignant (خبيث)", ar: "غير طبيعي / سيء"},
        {t: "Myc/o-", m: "Fungus", e: "Mycetoma (ورم فطري)", ar: "فطريات"},
        {t: "Necr/o-", m: "Death", e: "Necrosis (موت الخلايا)", ar: "موت"},
        {t: "Neo-", m: "New", e: "Neonate (مولود جديد)", ar: "جديد"},
        {t: "Oxy-", m: "Sharp / Acute / Oxygen", e: "Oxytocin (مسرع للولادة)", ar: "حاد / أكسجين"},
        {t: "Pan-, Pant/o-", m: "All or everywhere", e: "Pancytopenia (نقص الخلايا)", ar: "الكل / شامل"},
        {t: "Pharmaco-", m: "Drug / Medicine", e: "Pharmacist (صيدلي)", ar: "دواء"},
        {t: "Re-", m: "Again / Backward", e: "Rejuvenation (تجديد)", ar: "مرة أخرى / خلف"},
        {t: "Somat/o-", m: "Body / Bodily", e: "Somatic cell (خلايا جسدية)", ar: "جسم"},
        {t: "Cry/o-", m: "Cold", e: "Cryotherapy (علاج بالتبريد)", ar: "برد"},
        {t: "Elect-", m: "Electrical activity", e: "Electrocardiogram (تخطيط القلب)", ar: "كهربائي"},
        {t: "Kin/o-, Kine-", m: "Movement", e: "Kinetic energy (طاقة حركية)", ar: "حركة"},
        {t: "Kyph/o-", m: "Humped", e: "Kyphosis (تحدب الظهر)", ar: "تقوس / حدب"},
        {t: "Rhabd/o-", m: "Rod-shaped / Striated", e: "Rhabdomyosarcoma", ar: "مخطط"},
        {t: "Phot/o-", m: "Light", e: "Photoreceptor", ar: "ضوء"},
        {t: "Reticul/o-", m: "Net", e: "Reticulocytes", ar: "شبكي"},
        {t: "Scoli/o-", m: "Twisted", e: "Scoliosis (جنف)", ar: "ملتوي"},
        {t: "Therm/o-", m: "Heat", e: "Thermotherapy", ar: "حرارة"}
    ],
    suffixes: [
        {t: "-ac", m: "Pertaining to", e: "Cardiac (قلبي)", ar: "يُنسب إلى"},
        {t: "-blast", m: "Bud / Germ", e: "Myeloblast (أرومة النخاع)", ar: "برعم"},
        {t: "-cyte", m: "Cell", e: "Thrombocyte (صفيحة دموية)", ar: "خلية"},
        {t: "-dynia", m: "Pain / Swelling", e: "Thoracodynia (ألم صدر)", ar: "ألم"},
        {t: "-eal, -ial", m: "Pertaining to", e: "Esophageal (مريئي)", ar: "متعلق بـ"},
        {t: "-ectasis", m: "Expansion / Dilation", e: "Atelectasis (انخماص)", ar: "توسع"},
        {t: "-emia", m: "Blood condition", e: "Anemia (فقر الدم)", ar: "حالة دموية"},
        {t: "-ia", m: "Condition", e: "Hemophilia (الناعور)", ar: "حالة"},
        {t: "-iasis", m: "Condition / Formation", e: "Psoriasis (الصداف)", ar: "حالة / تكون"},
        {t: "-ism", m: "Condition", e: "Hypothyroidism (قصور درق)", ar: "حالة"},
        {t: "-itis", m: "Inflammation", e: "Arthritis (التهاب مفاصل)", ar: "التهاب"},
        {t: "-ity", m: "Pertaining to", e: "Immunity (مناعة)", ar: "خاصية / يُنسب لـ"},
        {t: "-ium", m: "Structure or tissue", e: "Epithelium", ar: "نسيج / تركيب"},
        {t: "-lysis", m: "Breakdown / Destruction", e: "Osteolytic", ar: "تحلل"},
        {t: "-malacia", m: "Softening", e: "Osteomalacia (تلين العظام)", ar: "تلين"},
        {t: "-megaly", m: "Enlargement", e: "Acromegaly (ضخامة أطراف)", ar: "ضخامة"},
        {t: "-oid", m: "Resembling", e: "Arachnoid (عنكبوتي)", ar: "شبه"},
        {t: "-oma", m: "Tumor", e: "Angiosarcoma", ar: "ورم"},
        {t: "-osis", m: "Condition (usually abnormal)", e: "Endometriosis", ar: "حالة مرضية"},
        {t: "-pathy", m: "Disease", e: "Lymphadenopathy", ar: "مرض / اعتلال"},
        {t: "-penia", m: "Deficiency / Lack of", e: "Thrombocytopenia", ar: "نقص"},
        {t: "-phagia", m: "Eating / Swallowing", e: "Dysphagia", ar: "أكل / بلع"},
        {t: "-phasia", m: "Speech", e: "Aphasia (حبسة)", ar: "نطق / كلام"},
        {t: "-plasia", m: "Growth", e: "Hyperplasia", ar: "نمو"},
        {t: "-poiesis", m: "Production", e: "Hemopoiesis", ar: "تكوين / إنتاج"},
        {t: "-ptosis", m: "Falling / Drooping", e: "Apoptosis", ar: "هبوط / تدلي"},
        {t: "-rrhage", m: "Bleeding", e: "Hemorrhage (نزيف)", ar: "نزيف"},
        {t: "-rrhea", m: "Flow / Discharge", e: "Diarrhea (إسهال)", ar: "سيلان"},
        {t: "-sclerosis", m: "Hardening", e: "Arteriosclerosis", ar: "تصلب"},
        {t: "-stasis", m: "Level / Unchanging", e: "Homeostasis", ar: "ثبات / توازن"},
        {t: "-trophy", m: "Growth", e: "Hypertrophy (تضخم)", ar: "نمو / تغذية"},
        {t: "-uria", m: "In the urine", e: "Anuria", ar: "في البول"},
        {t: "-centesis", m: "Surgical puncture", e: "Thoracentesis", ar: "بزل جراحي"},
        {t: "-ectomy", m: "Cut out / Removal", e: "Mastectomy", ar: "استئصال"},
        {t: "-gram", m: "Record / Picture", e: "Electrocardiogram", ar: "سجل / صورة"},
        {t: "-graphy", m: "To record or take picture", e: "Echocardiography", ar: "تصوير / تسجيل"},
        {t: "-meter", m: "Measuring device", e: "Sphygmomanometer", ar: "جهاز قياس"},
        {t: "-opsy", m: "Visual examination", e: "Biopsy (خزعة)", ar: "فحص بصري"},
        {t: "-otomy", m: "Incision / Cut", e: "Laparotomy", ar: "شق جراحي"},
        {t: "-plasty", m: "Surgical reconstruction", e: "Vertebroplasty", ar: "ترميم"},
        {t: "-scope", m: "For examining", e: "Endoscope", ar: "منظار"}
    ]
};

let currentType = ''; 
let currentMode = ''; 
let currentIndex = 0;
let activeList = [];

function goToScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showSubMenu(type) {
    currentType = type;
    document.getElementById('mode-title').innerText = (type === 'prefixes' ? 'Prefixes' : 'Suffixes') + " Modes";
    goToScreen('screen-sub');
}

function startStudy(mode) {
    currentMode = mode;
    activeList = [...data[currentType]].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    
    const lbl2 = document.getElementById('label-secondary');
    if(mode === 'trans') {
        lbl2.innerHTML = '<i class="fas fa-language"></i> Arabic Translation';
        document.getElementById('btn-reveal-2').innerText = "Show Translation";
    } else {
        lbl2.innerHTML = '<i class="fas fa-vials"></i> Medical Example';
        document.getElementById('btn-reveal-2').innerText = "Show Example";
    }
    
    loadCard();
    goToScreen('screen-card');
}

function loadCard() {
    const item = activeList[currentIndex];
    document.getElementById('card-term').innerText = item.t;
    document.getElementById('text-meaning').innerText = item.m;
    document.getElementById('card-counter').innerText = `${currentIndex + 1} / ${activeList.length}`;
    
    if(currentMode === 'trans') {
        document.getElementById('text-secondary').innerText = item.ar;
    } else {
        document.getElementById('text-secondary').innerText = item.e;
    }

    document.querySelectorAll('.info-row').forEach(r => r.classList.remove('visible'));
    document.querySelectorAll('.reveal-btn').forEach(b => b.style.display = 'block');
}

function reveal(id) {
    document.getElementById(id).classList.add('visible');
    document.querySelector(`#btn-reveal-${id.split('-')[1]}`).style.display = 'none';
}

function nextCard() {
    currentIndex = (currentIndex + 1) % activeList.length;
    loadCard();
}