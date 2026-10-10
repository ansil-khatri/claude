import Link from "next/link";
import { SiteInBrowser, AppInPhone } from "@/components/mock/BrandMocks";
import { FCard } from "@/components/mock/Viz";
import { Faq } from "@/components/ui/Faq";
import { Booking } from "@/components/ui/Booking";
import { waLink } from "@/config/site";

const FACTS: [string, string][] = [["من", "2,900 درهم"], ["المدة", "2–12 أسبوعاً"], ["اللغات", "عربي + إنجليزي"], ["المقر", "دبي"]];
const START = [
  ["لديّ فكرة", "من رسمة على ورقة إلى تطبيق في أيدي عملائك.", "/services/mobile-app-development"],
  ["لديّ موقع وأحتاج أكثر", "موقعك يعمل. لكنه لا يستقبل المدفوعات بعد.", "/services/payment-integration"],
  ["بنيتُه بالذكاء الاصطناعي وتعطّل", "نجعله آمناً وسريعاً وجاهزاً للعملاء الحقيقيين.", "/services/vibe-code-rescue"],
  ["عملي يعتمد على إكسل", "نجعل عملك يدير نفسه بنفسه.", "/services/business-automation"],
  ["نحن وكالة", "أنتم تبيعون ونحن نبني، باسمكم.", "/agencies"],
];
const PRICES = [["إضافة", "2,900 درهم", "مدفوعات أو مساعد واتساب أو إصلاح تطبيق. جاهز خلال أيام."], ["إطلاق", "7,900 درهم", "موقع أو متجر بالعربية والإنجليزية. من 2 إلى 4 أسابيع."], ["بناء", "49,000 درهم", "موقع مع تطبيق آيفون وأندرويد. نحو 12 أسبوعاً."], ["رعاية", "790 درهماً شهرياً", "استضافة وتحديثات ونسخ احتياطية وتعديلات."]];
const FAQ = [
  { q: "هل الأسعار بالدرهم وهل تشمل الضريبة؟", a: "نعم، جميع الأسعار ثابتة بالدرهم الإماراتي وتُحتسب قبل ضريبة القيمة المضافة 5%، وتظهر الضريبة في الفاتورة." },
  { q: "من يملك الكود والتصاميم؟", a: "أنتم تملكون كل شيء بنسبة 100%: الكود والتصاميم والنطاق وحسابات المتاجر والبيانات." },
  { q: "هل يمكن أن يكون الموقع والتطبيق بالعربية؟", a: "نعم، كل موقع وتطبيق نبنيه يعمل بالعربية والإنجليزية مع تخطيط من اليمين إلى اليسار." },
  { q: "كم تستغرق المدة حتى الإطلاق؟", a: "الإضافات خلال أيام، والموقع من 2 إلى 4 أسابيع، والموقع مع التطبيق نحو 12 أسبوعاً من أول مكالمة." },
];

export default function Page() {
  return (
    <>
      <div className="ar-banner">مسودة للمراجعة: النص العربي يحتاج مراجعة كاتب عربي مختص قبل النشر. هذه الصفحة غير مفهرسة.</div>
      <section className="panel hero-panel" style={{ marginTop: 14 }}>
        <div className="hero-glow" style={{ right: "auto", left: -240 }} />
        <div className="w hero-grid">
          <div className="hero-copy">
            <h1 className="hero-h1"><span className="h1-kicker">تطبيقات ومواقع وبرمجيات للشركات في دبي والإمارات</span>أنتم تديرون العمل. <em>ونحن نبني البرنامج الذي يديره.</em></h1>
            <p className="hero-sub">تطبيقات الحجز والمتاجر والمدفوعات والذكاء الاصطناعي ولوحات المتابعة، مصمَّمة في Figma. توافقون على كل شاشة قبل أن نكتب سطر برمجة واحداً.</p>
            <div className="hero-ctas">
              <a className="btn btn-lime" href="#book">احجز مكالمة مجانية</a>
              <a className="btn btn-wa" href={waLink("مرحباً، أريد حجز مكالمة")} target="_blank" rel="noopener">تواصل عبر واتساب</a>
              <Link className="btn btn-line" href="/process">كيف نعمل</Link>
            </div>
          </div>
          <div className="stage" dir="ltr" data-nosnippet aria-hidden>
            <div className="stage-main"><SiteInBrowser k="maisonrose" /></div>
            <div className="stage-side is-phone" style={{ right: "auto", left: "-2%" }}><AppInPhone k="maisonrose" kind="checkout" /></div>
            <FCard icon="💬" title="رد المساعد الذكي" sub="11:42 م · بالعربية" style={{ right: "-1%", top: "-3%" }} />
          </div>
        </div>
      </section>
      <section className="plx"><div className="w plx-in">
        <div className="plx-l">بكلمات بسيطة</div>
        <div className="plx-r"><p>نحن استوديو برمجيات في دبي. نبني المواقع ومتاجر شوبيفاي وتطبيقات الجوال ومساعدي واتساب والأنظمة التي تقف خلفها لشركات الإمارات: مطاعم وصالونات وورش سيارات ومغاسل وشركات تكييف ومتاجر. الأسعار ثابتة بالدرهم قبل أن نبدأ: المواقع من 7,900 درهم، والموقع مع التطبيق من 49,000 درهم. كل شيء بالعربية والإنجليزية، والكود ملكٌ لكم.</p>
          <div className="plx-f">{FACTS.map(([k, v]) => <span key={k}><b>{k}</b>{v}</span>)}</div></div>
      </div></section>
      <section className="sec"><div className="w">
        <div className="sec-head"><span className="eyebrow"><i />من أين تبدأ؟</span><h2 className="h2">أينما كنتَ اليوم، نكمل من هناك.</h2></div>
        <div className="card-grid">{START.map(([t, d, h]) => <Link key={t} href={h} className="g-card"><span className="cat">ابدأ من هنا</span><h3>{t}</h3><p>{d}</p><span style={{ fontWeight: 700 }}>← اعرف المزيد</span></Link>)}</div>
      </div></section>
      <section className="sec-tight"><div className="panel"><div className="w sec">
        <div className="sec-head on-dark"><span className="eyebrow"><i />الأسعار</span><h2 className="h2">أسعار واضحة. ثابتة قبل أن نبدأ.</h2><p className="lead">الأسعار بالدرهم وقبل ضريبة القيمة المضافة 5%.</p></div>
        <div className="pgrid four">{PRICES.map(([n, a, d], i) => <div key={n} className={`pr ${i === 2 ? "hot" : ""}`}><span className="k">{n}</span><h4>{n}</h4><p>{d}</p><div className="amt"><small>من</small>{a}</div></div>)}</div>
      </div></div></section>
      <section className="sec"><div className="w faq-grid"><div><span className="eyebrow"><i />أسئلة</span><h2 className="h2">ما يسأل عنه الناس قبل أن يبدؤوا.</h2></div><Faq items={FAQ} schema={false} /></div></section>
      <section className="sec-tight" id="book"><div className="panel"><div className="w cta-panel">
        <div><h2 className="cta-h">30 دقيقة. ثم تعرف <em>بالضبط</em> كم تكلّف ومتى تنطلق.</h2><p className="lead">بلا عروض مطوّلة وبلا ضغط.</p></div>
        <div dir="rtl"><Booking /></div>
      </div></div></section>
    </>
  );
}
