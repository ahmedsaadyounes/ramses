const siteDefaults = {
  siteName: "رمسيس",
  siteTag: "مجلة رقمية للتاريخ والسياسة والتكنولوجيا",
  primaryColor: "#b08a47",
  darkColor: "#0b1020",
  surfaceColor: "#f4efe7"
};

const articleData = [
  {
    id: "empire-narratives",
    category: "history",
    featured: true,
    cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1600&q=80",
    author: "هيئة التحرير",
    date: "2026-03-12",
    readTime: 8,
    ar: {
      categoryLabel: "تاريخ",
      title: "حين تصنع الإمبراطوريات سرديتها: كيف يفسر التاريخ تحولات القوة الحديثة؟",
      excerpt: "قراءة تربط بين بناء الهيبة في العالم القديم وآليات النفوذ السياسي والإعلامي في القرن الحادي والعشرين.",
      content: [
        "التاريخ لا يتحرك فقط عبر الجيوش والخرائط، بل عبر القصص التي تبرر السلطة وتمنحها معنى. من النقوش الملكية في مصر القديمة إلى الخطابات الحديثة، بقي السرد السياسي أداة مركزية في تشكيل الشرعية.",
        "الإمبراطوريات الكبرى فهمت مبكرًا أن القوة الصلبة لا تكفي وحدها. كان لا بد من بناء صورة ذهنية عن النظام، والرسالة، والرسوخ الحضاري. لهذا نجد أن كل قوة صاعدة تنتج لغتها الخاصة لتفسير التوسع والردع والتحالفات.",
        "في عصر التكنولوجيا، تغيرت الأدوات لكن المنطق لم يتغير كثيرًا. المنصات الرقمية، والبيانات، والوسائط القصيرة أصبحت امتدادًا معاصرًا لفكرة النقش على الحجر: رسالة مصممة لتدوم وتؤثر وتعيد تعريف الواقع العام.",
        "لهذا فإن قراءة السياسة المعاصرة من دون عمق تاريخي تجعل كثيرًا من القرارات تبدو مفاجئة، بينما هي في الحقيقة امتداد لأنماط قديمة جدًا في إدارة النفوذ وصناعة الصورة." 
      ]
    },
    en: {
      categoryLabel: "History",
      title: "When Empires Write Their Narrative: How History Explains Modern Power Shifts",
      excerpt: "A reading that connects ancient prestige-building with modern mechanisms of political and media influence.",
      content: [
        "History moves not only through armies and borders, but through stories that justify authority and give it meaning. From royal inscriptions in ancient Egypt to contemporary speeches, narrative has remained central to political legitimacy.",
        "Great empires understood early that hard power was never enough. They needed a mental image of order, mission, and civilizational permanence. Every rising power therefore develops its own language to explain expansion, deterrence, and alliances.",
        "In the technological age, the tools changed but the logic largely did not. Digital platforms, data, and short-form media now function as a modern extension of carving on stone: a message designed to endure, persuade, and redefine reality.",
        "That is why reading present-day politics without historical depth makes many decisions look sudden, when they are often continuations of very old patterns in managing influence and perception."
      ]
    }
  },
  {
    id: "mediterranean-influence",
    category: "history",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    author: "قسم التاريخ",
    date: "2026-03-11",
    readTime: 6,
    ar: {
      categoryLabel: "تاريخ",
      title: "خرائط النفوذ في البحر المتوسط عبر العصور",
      excerpt: "لماذا ظل المتوسط نقطة صراع دائمة بين التجارة والبحرية والرمزية الجيوسياسية؟",
      content: [
        "البحر المتوسط لم يكن مجرد مساحة مائية، بل مسرحًا دائمًا لإعادة توزيع القوة. من الفينيقيين إلى الرومان ثم القوى الحديثة، ظل التحكم في الممرات البحرية شرطًا أساسيًا لبناء النفوذ الاقتصادي.",
        "كل ميناء كان يمثل عقدة في شبكة أكبر من المال والمعلومة والجنود. لهذا فإن تاريخ المتوسط هو في جوهره تاريخ للبنية التحتية الاستراتيجية قبل أن يصبح تاريخًا للحروب." 
      ]
    },
    en: {
      categoryLabel: "History",
      title: "Maps of Influence in the Mediterranean Across the Ages",
      excerpt: "Why has the Mediterranean remained a permanent arena of trade, naval power, and geopolitical symbolism?",
      content: [
        "The Mediterranean was never just water; it was a stage for recurring redistributions of power. From Phoenicians to Romans to modern states, controlling maritime passages was essential for economic influence.",
        "Every port was a node in a wider network of money, information, and military movement. The history of the Mediterranean is therefore also a history of strategic infrastructure."
      ]
    }
  },
  {
    id: "media-narratives",
    category: "politics",
    cover: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?auto=format&fit=crop&w=1600&q=80",
    author: "قسم السياسة",
    date: "2026-03-10",
    readTime: 7,
    ar: {
      categoryLabel: "سياسة",
      title: "كيف تؤثر السرديات الإعلامية في القرار السياسي؟",
      excerpt: "القرار لا يُصنع داخل المؤسسات فقط، بل يتأثر أيضًا بالإطار اللغوي الذي يُقدَّم به للجمهور.",
      content: [
        "في السياسة الحديثة، اللغة ليست مجرد وسيط محايد بل جزء من الفعل السياسي نفسه. الكلمات التي تُستخدم لوصف أزمة ما قد تحدد حدود الاستجابة الممكنة لها.",
        "حين تُصاغ القضايا العامة باعتبارها تهديدًا وجوديًا، تميل النخب إلى خيارات أكثر حدة. وحين تُعرض باعتبارها ملفًا تقنيًا، تتغير الأولويات وتتبدل الوتيرة."
      ]
    },
    en: {
      categoryLabel: "Politics",
      title: "How Media Narratives Shape Political Decision-Making",
      excerpt: "Decisions are not made only inside institutions; they are also shaped by the language used to present them to the public.",
      content: [
        "In modern politics, language is not a neutral medium but part of political action itself. The words used to describe a crisis can define the range of acceptable responses.",
        "When public issues are framed as existential threats, elites tend toward harsher choices. When they are framed as technical files, priorities and timing shift."
      ]
    }
  },
  {
    id: "ai-geopolitics",
    category: "technology",
    cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    author: "قسم التكنولوجيا",
    date: "2026-03-09",
    readTime: 9,
    ar: {
      categoryLabel: "تكنولوجيا",
      title: "الذكاء الاصطناعي بين السباق الجيوسياسي والابتكار",
      excerpt: "لم تعد التقنية قطاعًا منفصلًا، بل أصبحت عنصرًا مركزيًا في ميزان القوة العالمية.",
      content: [
        "أصبح الذكاء الاصطناعي اليوم مجالًا تتقاطع فيه الشركات العملاقة مع الحكومات والجامعات والجيوش. لذلك فإن النقاش حوله لا يجب أن يقتصر على الأدوات، بل يمتد إلى من يملك البنية التحتية والمعايير والبيانات.",
        "الدول التي تقود هذا المجال لا تكتفي ببناء منتجات قوية، بل تعمل على تشكيل النظم البيئية التي تجعل الآخرين تابعين لها تقنيًا وتشريعيًا واقتصاديًا."
      ]
    },
    en: {
      categoryLabel: "Technology",
      title: "AI Between Geopolitical Competition and Innovation",
      excerpt: "Technology is no longer a separate sector; it is now a central variable in the global balance of power.",
      content: [
        "Artificial intelligence now sits at the intersection of major companies, governments, universities, and militaries. The debate should therefore extend beyond tools to who controls infrastructure, standards, and data.",
        "The states leading this field are not only building strong products, they are shaping ecosystems that make others technologically, legally, and economically dependent."
      ]
    }
  },
  {
    id: "digital-sovereignty",
    category: "technology",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    author: "قسم التكنولوجيا",
    date: "2026-03-08",
    readTime: 5,
    ar: {
      categoryLabel: "تكنولوجيا",
      title: "السيادة الرقمية: لماذا أصبحت البنية السحابية قضية دولة؟",
      excerpt: "حين تعتمد الخدمات العامة والاقتصاد على منصات خارجية، تصبح الاستضافة قرارًا سياديًا بقدر ما هي قرار تقني.",
      content: [
        "السيادة الرقمية لا تعني الانغلاق، بل تعني القدرة على التفاوض من موقع قوة. وهي تبدأ من مراكز البيانات، وتمتد إلى لوائح الخصوصية والمعايير المحلية والاعتمادية الطويلة الأجل."
      ]
    },
    en: {
      categoryLabel: "Technology",
      title: "Digital Sovereignty: Why Cloud Infrastructure Became a State Matter",
      excerpt: "When public services and the economy rely on external platforms, hosting becomes as strategic as it is technical.",
      content: [
        "Digital sovereignty does not mean isolation. It means negotiating from a position of strength, beginning with data centers and extending to privacy frameworks, local standards, and long-term resilience."
      ]
    }
  },
  {
    id: "state-memory",
    category: "politics",
    cover: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=1600&q=80",
    author: "قسم السياسة",
    date: "2026-03-07",
    readTime: 6,
    ar: {
      categoryLabel: "سياسة",
      title: "ذاكرة الدولة: كيف تعود الملفات القديمة في اللحظات الحرجة؟",
      excerpt: "بعض الملفات لا تختفي، بل تنتظر اللحظة المناسبة لتعود إلى قلب المشهد السياسي.",
      content: [
        "الدولة الحديثة تعمل أيضًا عبر الذاكرة المؤسسية. الوثائق، والسوابق، والشبكات البيروقراطية كلها عناصر تسمح لملفات قديمة بالعودة عندما تتغير البيئة السياسية."
      ]
    },
    en: {
      categoryLabel: "Politics",
      title: "State Memory: How Old Files Return in Critical Moments",
      excerpt: "Some files never disappear; they simply wait for the right moment to return to the center of politics.",
      content: [
        "The modern state also operates through institutional memory. Records, precedents, and bureaucratic networks allow old issues to return when the surrounding political environment changes."
      ]
    }
  }
];

const uiText = {
  ar: {
    home: "الرئيسية",
    latest: "أحدث المقالات",
    history: "التاريخ",
    politics: "السياسة",
    technology: "التكنولوجيا",
    search: "بحث",
    searchPlaceholder: "ابحث عن مقال أو كلمة مفتاحية...",
    featured: "ملف اليوم",
    readMore: "اقرأ المقال",
    backHome: "العودة للرئيسية",
    article: "مقال",
    related: "مقالات ذات صلة",
    minute: "دقائق قراءة",
    news: "أقسام الأخبار",
    editorial: "افتتاحية رمسيس",
    footer: "رمسيس — منصة عربية حديثة للتاريخ والسياسة والتكنولوجيا"
  },
  en: {
    home: "Home",
    latest: "Latest Articles",
    history: "History",
    politics: "Politics",
    technology: "Technology",
    search: "Search",
    searchPlaceholder: "Search for an article or keyword...",
    featured: "Feature of the Day",
    readMore: "Read article",
    backHome: "Back to home",
    article: "Article",
    related: "Related Articles",
    minute: "min read",
    news: "News Sections",
    editorial: "Ramses Editorial",
    footer: "Ramses — a modern magazine for history, politics, and technology"
  }
};
