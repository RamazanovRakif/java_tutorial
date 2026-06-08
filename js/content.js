/* ═══════════════════════════════════════════════════════════════════
   CONTENT.JS — Lesson HTML content keyed by topic ID
   Add new topics here as: "topic-id": `<div class='lesson-section'>...`
   ═══════════════════════════════════════════════════════════════════ */

// eslint-disable-next-line no-unused-vars
var CONTENT = {
  /* ─────────────────────────────────────────
     SECTION 01 — Getting Started
     ───────────────────────────────────────── */

  "gs-1": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Backend nədir?</h2>
  <p class='lesson-text'>Veb tətbiqləri iki əsas hissədən ibarətdir: istifadəçinin birbaşa gördüyü <strong>Frontend</strong> və pərdə arxasında işləyən <strong>Backend</strong>. Backend — server, verilənlər bazası, biznes məntiqi və API-lərdən ibarətdir.</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>🖥️ Frontend</div>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Vue, Angular</li>
        <li>İstifadəçi interfeysi</li>
        <li>Brauzerdə işləyir</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>⚙️ Backend</div>
      <ul>
        <li>Java, Python, Node.js...</li>
        <li>Spring Boot, Databases</li>
        <li>Biznes məntiqi &amp; API</li>
        <li>Serverdə işləyir</li>
      </ul>
    </div>
  </div>
  <div class='note note-info'>
    <span class='note-icon'>💡</span>
    <div class='note-body'><strong>Real nümunə:</strong> Instagram-da şəkil yükləyəndə — şəkli göstərmək frontend-in, şəkli saxlamaq, sıxmaq və başqalarının feed-inə göndərmək isə backend-in işidir.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Java-nın Üstünlükləri</h2>
  <p class='lesson-text'>Java 30 ildən çoxdur enterprise backend development-in liderindədir. Bunun bir neçə əsas səbəbi var:</p>
  <div class='feature-list'>
    <div class='feature-item'>
      <div class='feature-icon'>🌍</div>
      <div>
        <strong>Platform müstəqilliyi</strong>
        <p>Write Once, Run Anywhere — Java kodu JVM sayəsində istənilən OS-da (Windows, Linux, Mac) işləyir.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>⚡</div>
      <div>
        <strong>Yüksək performans</strong>
        <p>JIT (Just-In-Time) kompilyasiya sayəsində Java proqramları interpretasiya dillərindən qat-qat sürətli işləyir.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🏛️</div>
      <div>
        <strong>Güclü ekosistem</strong>
        <p>Spring Boot, Hibernate, Kafka, Maven — sənaye standartı framework-lər və kitabxanalar.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🔒</div>
      <div>
        <strong>Statik tipləmə</strong>
        <p>Xətaların böyük qismi compile-time-da aşkar olunur, runtime sürprizləri azdır.</p>
      </div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Böyük Şirkətlər Java-dan İstifadə Edir</h2>
  <div class='company-list'>
    <div class='company-item'>
      <span class='company-icon'>📺</span>
      <div><strong>Netflix</strong><span>API gateway, mikroservis arxitekturası</span></div>
    </div>
    <div class='company-item'>
      <span class='company-icon'>🛒</span>
      <div><strong>Amazon / AWS</strong><span>Backend servislər, Lambda funksiyaları</span></div>
    </div>
    <div class='company-item'>
      <span class='company-icon'>🔗</span>
      <div><strong>LinkedIn</strong><span>Backend platform, Kafka (Java ilə yazılıb)</span></div>
    </div>
    <div class='company-item'>
      <span class='company-icon'>🚗</span>
      <div><strong>Uber</strong><span>Trip dispatch, payment servislər</span></div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Karyera Yolları</h2>
  <ol class='lesson-list'>
    <li><strong>Junior Backend Developer</strong> — Spring Boot, REST API, SQL bilikləri ilə başlanğıc</li>
    <li><strong>Mid-level Developer</strong> — Microservices, Docker, Kafka, Test Coverage</li>
    <li><strong>Senior Developer</strong> — Sistem dizaynı, Performance tuning, Team lead</li>
    <li><strong>Software Architect</strong> — Enterprise arxitektura, texniki qərarlar</li>
  </ol>
  <div class='note note-tip'>
    <span class='note-icon'>🎯</span>
    <div class='note-body'><strong>Bu kurs nə əhatə edir?</strong> Sıfırdan başlayaraq Java əsasları → OOP → Advanced Java → JVM → Spring Boot → Microservices → Docker-ə qədər tam yol. 23 bölmə, 163 mövzu.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Backend — server tərəfli məntiq, verilənlər bazası və API-lər deməkdir</li>
    <li>Frontend istifadəçi ilə, Backend isə data və biznes məntiqi ilə işləyir</li>
    <li>Java 30+ ildir enterprise backend development-in liderindədir</li>
    <li>Netflix, Amazon, LinkedIn, Uber Java-dan geniş istifadə edir</li>
    <li>Bu kurs sıfırdan Senior Java Developer-ə qədər tam yolu əhatə edir</li>
  </ul>
</div>
`,

  "gs-2": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>JVM, JRE, JDK — Bir-birinə Nisbəti</h2>
  <p class='lesson-text'>Bu üç termin bir-birinin içindədir: <strong>JVM ⊂ JRE ⊂ JDK</strong>. Ən kiçikdən böyüyə:</p>
  <div class='arch-box'>
    <div style='border:2px solid #3b82f6;border-radius:10px;padding:16px;max-width:480px;margin:0 auto;text-align:left'>
      <div style='font-weight:700;color:#60a5fa;margin-bottom:12px'>☕ JDK — Java Development Kit</div>
      <div style='border:1px solid #22c55e;border-radius:8px;padding:14px;margin-bottom:10px'>
        <div style='font-weight:700;color:#4ade80;margin-bottom:10px'>🔧 JRE — Java Runtime Environment</div>
        <div style='border:1px solid var(--border);border-radius:6px;padding:10px'>
          <div style='font-weight:700;color:var(--accent)'>⚙️ JVM — Java Virtual Machine</div>
          <div style='font-size:12px;color:var(--text-3);margin-top:4px'>Bytecode-u oxuyub icra edir</div>
        </div>
        <div style='font-size:13px;color:var(--text-2);margin-top:8px'>+ Standart kitabxanalar (java.util, java.io...)</div>
      </div>
      <div style='font-size:13px;color:var(--text-2)'>+ javac, javadoc, jdb, jar, jshell...</div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>JVM — Java Virtual Machine</h2>
  <p class='lesson-text'>JVM Java proqramlarını icra edən virtual maşındır. Java kodu birbaşa prosessorunuzda işləmir — əvvəlcə <strong>bytecode</strong>-a çevrilir, sonra JVM onu icra edir. Bu, Java-nın platform müstəqilliyinin sirridir.</p>
  <h3 class='lesson-h3'>JVM-in əsas komponentləri</h3>
  <ul class='lesson-list'>
    <li><strong>Class Loader</strong> — .class fayllarını yükləyir</li>
    <li><strong>Bytecode Verifier</strong> — kodun təhlükəsiz olduğunu yoxlayır</li>
    <li><strong>JIT Compiler</strong> — tez-tez işlənən bytecode-u native machine code-a çevirir (performans!)</li>
    <li><strong>Garbage Collector</strong> — istifadə olunmayan obyektləri yaddaşdan silir</li>
    <li><strong>Runtime Memory</strong> — Heap, Stack, Method Area (Bölmə 06-da ətraflı)</li>
  </ul>
  <div class='note note-info'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>JVM bir <em>spesifikasiyadır</em>. Ən populyar implementasiya: <strong>HotSpot</strong> (Oracle/OpenJDK). Digərləri: OpenJ9 (IBM), GraalVM.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Bytecode — Write Once, Run Anywhere</h2>
  <p class='lesson-text'>Java-nın ən güclü xüsusiyyəti: bir dəfə yazıb istənilən platformada işlətmək.</p>
  <div class='arch-box'>
    <div class='arch-flow'>
      <div class='arch-node'>HelloWorld.java<br><small>Mənbə kodu</small></div>
      <div class='arch-arrow'>→<br><small>javac</small></div>
      <div class='arch-node accent'>HelloWorld.class<br><small>Bytecode</small></div>
      <div class='arch-arrow'>→<br><small>JVM</small></div>
      <div class='arch-node'>Native Code<br><small>OS-specific</small></div>
    </div>
  </div>
  <pre><code class='language-bash'># 1. Java kodunu compile et
javac HelloWorld.java
# HelloWorld.class faylı yaranır (bytecode)

# 2. İstənilən platformada işlət
java HelloWorld
# → Salam, Dünya!</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>✅</span>
    <div class='note-body'>Eyni <code>HelloWorld.class</code> faylı Windows-da da, Linux-da da, Mac-da da eyni cür işləyir. Hər platforma üçün JVM ayrıca mövcuddur.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>JRE vs JDK — Fərq nədir?</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>🔧 JRE — Runtime</div>
      <p style='font-size:13px;color:var(--text-2);margin:8px 0'>Java proqramlarını <strong>işlətmək</strong> üçün</p>
      <ul>
        <li>JVM</li>
        <li>Standart kitabxanalar</li>
        <li>Son istifadəçilər üçün</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>☕ JDK — Dev Kit</div>
      <p style='font-size:13px;color:var(--text-2);margin:8px 0'>Java proqramları <strong>yazmaq</strong> üçün</p>
      <ul>
        <li>JRE (JVM + kitabxanalar)</li>
        <li>javac (compiler)</li>
        <li>javadoc, jdb, jar, jshell</li>
        <li>Developer-lər üçün</li>
      </ul>
    </div>
  </div>
  <div class='note note-tip'>
    <span class='note-icon'>✅</span>
    <div class='note-body'><strong>Developer kimi JDK-nı yüklə.</strong> JDK içərisində JRE-da var. Tövsiyə: <strong>JDK 21 LTS</strong> — 2029-a qədər dəstəklənir.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><strong>JVM</strong> — bytecode-u icra edən virtual maşın; JIT compiler, GC və runtime memory buradadır</li>
    <li><strong>JRE</strong> = JVM + standart kitabxanalar (işlətmək üçün)</li>
    <li><strong>JDK</strong> = JRE + javac + dev tools (yazmaq üçün)</li>
    <li>Java kodu → javac → bytecode (.class) → JVM → native code</li>
    <li>Bu prinsip sayəsində Java "Write Once, Run Anywhere" şüarını həyata keçirir</li>
  </ul>
</div>
`,

  "gs-3": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>JDK 21 Quraşdırma</h2>
  <p class='lesson-text'>Hər şeydən əvvəl JDK 21 LTS (Long-Term Support) quraşdırmalıyıq. Pulsuz, açıq mənbəli <strong>Adoptium OpenJDK</strong> tövsiyə olunur.</p>
  <ol class='steps-list'>
    <li>
      <div>
        <strong>adoptium.net saytına get</strong><br>
        Temurin 21 LTS seç → öz OS üçün yüklə (Windows: .msi, Mac: .pkg, Linux: .tar.gz)
      </div>
    </li>
    <li>
      <div>
        <strong>Quraşdır</strong><br>
        Yüklədiyin faylı aç və təlimatları izlə. "Add to PATH" seçimi işarəli olsun.
      </div>
    </li>
    <li>
      <div>
        <strong>Yüklənməni yoxla</strong><br>
        Terminal aç və bu əmri icra et:
        <pre><code class='language-bash'>java -version
# Output: openjdk version "21.x.x" ...</code></pre>
      </div>
    </li>
  </ol>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><strong>Windows istifadəçiləri:</strong> Quraşdırmadan sonra yeni terminal pəncərəsi açın — köhnə terminal JAVA_HOME dəyişənini görməyə bilər.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>IntelliJ IDEA Quraşdırma</h2>
  <p class='lesson-text'>IntelliJ IDEA Java development üçün ən populyar IDE-dir. <strong>Community Edition</strong> tamamilə pulsuzdur.</p>
  <ol class='steps-list'>
    <li><div><strong>jetbrains.com/idea saytına get</strong><br>Download → Community seç (Ultimate ödənişlidir, lazım deyil)</div></li>
    <li><div><strong>Quraşdır</strong><br>Yüklədiyin faylı aç → Next/Continue → Create Desktop Shortcut işarəli olsun</div></li>
    <li><div><strong>İlk işə salma</strong><br>IDE açılanda: Theme seç (Dark tövsiyə olunur) → New Project klikləyə bilərsən</div></li>
  </ol>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>İlk Java Layihəsi Yaratmaq</h2>
  <ol class='steps-list'>
    <li><div><strong>File → New Project</strong> (və ya Welcome screen-dən)</div></li>
    <li><div><strong>Java</strong> seç → JDK: 21 seç (yoxdursa "Add JDK" ilə əlavə et)</div></li>
    <li><div><strong>Project Name:</strong> <code>java-learning</code> yaz → <strong>Finish</strong></div></li>
    <li><div><strong>src qovluğuna sağ klikləyib</strong> → New → Java Class → <code>Main</code></div></li>
  </ol>
  <div class='note note-info'>
    <span class='note-icon'>📁</span>
    <div class='note-body'>
      <strong>Layihə strukturu:</strong><br>
      <code>java-learning/</code><br>
      <code>├── src/</code> &nbsp; ← Java kodlarını bura yaz<br>
      <code>│&nbsp;&nbsp; └── Main.java</code><br>
      <code>└── java-learning.iml</code> &nbsp; ← IntelliJ konfiqurasiyası
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Vacib IntelliJ Shortcut-lar</h2>
  <div class='shortcut-grid'>
    <div class='shortcut-item'><kbd>Shift+F10</kbd><span>Proqramı çalışdır (Run)</span></div>
    <div class='shortcut-item'><kbd>Alt+Enter</kbd><span>Quick Fix (import, xəta düzəlt)</span></div>
    <div class='shortcut-item'><kbd>Ctrl+Space</kbd><span>Autocomplete (Mac: ⌘Space)</span></div>
    <div class='shortcut-item'><kbd>Ctrl+/</kbd><span>Sətri şərh et / aç</span></div>
    <div class='shortcut-item'><kbd>Ctrl+Alt+L</kbd><span>Kodu formatla (Mac: ⌘⌥L)</span></div>
    <div class='shortcut-item'><kbd>Shift+Shift</kbd><span>Hər yeri axtar</span></div>
    <div class='shortcut-item'><kbd>psvm + Tab</kbd><span>main() metodunu əlavə et</span></div>
    <div class='shortcut-item'><kbd>sout + Tab</kbd><span>System.out.println() əlavə et</span></div>
  </div>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'><kbd>Alt+Enter</kbd> — IntelliJ-in ən güclü shortcut-udur. Xəta gördükdə hər zaman bunu bas, IDE özü həll yolunu təklif edəcək.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Maven — pom.xml İlk Baxış</h2>
  <p class='lesson-text'>Maven Java layihələri üçün <strong>build</strong> və <strong>dependency management</strong> sistemidir. Hər Maven layihəsinin kökündə <code>pom.xml</code> faylı olur.</p>
  <pre><code class='language-xml'>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;project&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;az.example&lt;/groupId&gt;          &lt;!-- Şirkət / qrup --&gt;
    &lt;artifactId&gt;java-learning&lt;/artifactId&gt;  &lt;!-- Layihə adı --&gt;
    &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;

    &lt;properties&gt;
        &lt;java.version&gt;21&lt;/java.version&gt;
    &lt;/properties&gt;

    &lt;dependencies&gt;
        &lt;!-- Buraya kitabxanalar əlavə olunur --&gt;
    &lt;/dependencies&gt;
&lt;/project&gt;</code></pre>
  <div class='note note-info'>
    <span class='note-icon'>📌</span>
    <div class='note-body'>Maven-i Bölmə 08-də ətraflı öyrənəcəyik. İndi sadəcə bil: yeni kitabxana lazım olduqda <code>mvnrepository.com</code>-dan koordinatlarını tapıb <code>&lt;dependencies&gt;</code> içinə kopyala.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>JDK 21 LTS — <code>adoptium.net</code>-dən pulsuz yüklə, terminal-da <code>java -version</code> ilə yoxla</li>
    <li>IntelliJ IDEA Community Edition — Java üçün ən yaxşı IDE, pulsuzdur</li>
    <li><kbd>Alt+Enter</kbd> — hər xəta gördükdə bas, IDE həll yolunu göstərəcək</li>
    <li><kbd>psvm</kbd>+Tab → main() metodu; <kbd>sout</kbd>+Tab → println() avtomatik yazılır</li>
    <li>Maven — <code>pom.xml</code> vasitəsilə kitabxanaları (dependencies) layihəyə əlavə edir</li>
  </ul>
</div>
`,

  "gs-4": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>İlk Java Proqramı — Hello World</h2>
  <p class='lesson-text'>Proqramlaşdırmada ənənə olaraq ilk proqram "Hello World" yazılır. Bu sadə proqramın hər sətrinə baxaq:</p>
  <pre><code class='language-java'>public class HelloWorld {                      // 1. Class elan et
    public static void main(String[] args) {   // 2. Proqramın giriş nöqtəsi
        System.out.println("Salam, Dünya!");   // 3. Konsola çıxış
    }
}</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><strong>Fayl adı = Class adı!</strong> Bu kod <code>HelloWorld.java</code> faylında saxlanmalıdır. Java-da class adı ilə fayl adı eyni olmalıdır (case-sensitive: HelloWorld ≠ helloworld).</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Hər Sətrin İzahı</h2>
  <h3 class='lesson-h3'>1. public class HelloWorld</h3>
  <p class='lesson-text'>Java-da hər şey bir <strong>class</strong> içərisindədir. <code>public</code> — hər yerdən görünə bilər, <code>class</code> — sinif elan edirik, <code>HelloWorld</code> — sinifin adıdır.</p>
  <h3 class='lesson-h3'>2. public static void main(String[] args)</h3>
  <p class='lesson-text'>Proqramın <strong>giriş nöqtəsidir (entry point)</strong>. JVM proqramı başladanda məhz bu metodu axtarır:</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Açar söz</div>
      <ul>
        <li><code>public</code></li>
        <li><code>static</code></li>
        <li><code>void</code></li>
        <li><code>main</code></li>
        <li><code>String[] args</code></li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Mənası</div>
      <ul>
        <li>Hər yerdən çağrıla bilər</li>
        <li>Obyekt yaratmadan çağrılır</li>
        <li>Heç nə qaytarmır</li>
        <li>Metodun adı (dəyişdirilə bilməz)</li>
        <li>Komanda xətti arqumentləri</li>
      </ul>
    </div>
  </div>
  <h3 class='lesson-h3'>3. System.out.println()</h3>
  <pre><code class='language-java'>System.out.println("Salam!");       // Yeni sətirə keçir
System.out.print("Mən Java-yam");   // Yeni sətirə keçmir
System.out.printf("Ad: %s, Yaş: %d%n", "Anar", 25); // Formatlanmış çıxış</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Terminal-da Compile &amp; Run</h2>
  <p class='lesson-text'>IntelliJ olmadan, terminal vasitəsilə işlətmək:</p>
  <pre><code class='language-bash'># 1. Layihə qovluğuna keç
cd ~/Desktop/java-learning

# 2. Kodu compile et (javac = Java Compiler)
javac HelloWorld.java
# → HelloWorld.class faylı yaranır

# 3. Proqramı işlət
java HelloWorld
# → Salam, Dünya!</code></pre>
  <div class='note note-info'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>IntelliJ-də isə sadəcə <kbd>Shift+F10</kbd> (Windows/Linux) və ya <kbd>⌃R</kbd> (Mac) bas — compile + run avtomatik baş verir.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Ümumi Xətalar və Həlləri</h2>
  <div class='error-list'>
    <div class='error-item'>
      <div class='error-code'>❌ class HelloWorld is public, should be declared in HelloWorld.java</div>
      <div class='error-fix'>✅ Fayl adını class adı ilə eyni et: <code>HelloWorld.java</code></div>
    </div>
    <div class='error-item'>
      <div class='error-code'>❌ error: ';' expected</div>
      <div class='error-fix'>✅ Sətrin sonunda nöqtəli vergül (<code>;</code>) əlavə et</div>
    </div>
    <div class='error-item'>
      <div class='error-code'>❌ cannot find symbol</div>
      <div class='error-fix'>✅ Dəyişən/metod adını yoxla; import lazımdırsa <kbd>Alt+Enter</kbd> bas</div>
    </div>
    <div class='error-item'>
      <div class='error-code'>❌ Main method not found in class</div>
      <div class='error-fix'>✅ <code>public static void main(String[] args)</code> düzgün yazılıb?</div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <p class='lesson-text'>Adını, soyadını və doğum ilini çap edən bir proqram yaz:</p>
  <pre><code class='language-java'>public class AboutMe {
    public static void main(String[] args) {
        System.out.println("Ad: Anar");
        System.out.println("Soyad: Məmmədov");
        System.out.println("Doğum ili: 2000");
        System.out.printf("Yaş: %d%n", 2025 - 2000);
        System.out.println("Peşə: Java Backend Developer (gələcək 🚀)");
    }
}</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>Bu kodu özünə uyğunlaşdır və IntelliJ-də işlət. Xəta çıxarsa, xəta mesajını oxu — Java xəta mesajları çox informativdir.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Java proqramı <code>public class ClassName { }</code> içərisindədir</li>
    <li>Giriş nöqtəsi: <code>public static void main(String[] args)</code> — dəqiq yazılmalıdır</li>
    <li><code>System.out.println()</code> konsola çıxış verir, sonda yeni sətirə keçir</li>
    <li>Fayl adı class adı ilə eyni olmalıdır, hər ifadənin sonunda <code>;</code> lazımdır</li>
    <li><kbd>javac</kbd> → compile, <kbd>java</kbd> → run; IntelliJ-də <kbd>Shift+F10</kbd> ikisini birlikdə edir</li>
  </ul>
</div>
`,

  /* ─────────────────────────────────────────
     SECTION 02 — Java Fundamentals
     ───────────────────────────────────────── */

  "jf-1": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Dəyişən nədir?</h2>
  <p class='lesson-text'>Dəyişən — yaddaşda bir qutudur. Qutunun tipi (<strong>data type</strong>), adı (<strong>identifier</strong>) və dəyəri (<strong>value</strong>) olur. Java-da hər dəyişənin tipi compile zamanı məlum olmalıdır (statik tipləmə).</p>
  <pre><code class='language-java'>int age = 25;          // tip  ad   dəyər
String name = "Anar";  // reference type
double salary = 4500.50;
boolean isActive = true;</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Primitive Tiplər (8 ədəd)</h2>
  <p class='lesson-text'>Java-nın 8 primitive tipi var. Bunlar birbaşa dəyəri saxlayır, heap-də yox, stack-də yerləşirlər:</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Tam ədədlər</div>
      <ul>
        <li><code>byte</code> — 8 bit, -128..127</li>
        <li><code>short</code> — 16 bit, -32768..32767</li>
        <li><code>int</code> — 32 bit, ~±2 milyard</li>
        <li><code>long</code> — 64 bit, çox böyük</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Digər tiplər</div>
      <ul>
        <li><code>float</code> — 32 bit kəsr</li>
        <li><code>double</code> — 64 bit kəsr (tövsiyə)</li>
        <li><code>char</code> — 16 bit Unicode simvol</li>
        <li><code>boolean</code> — true / false</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>int count = 100;
long population = 8_000_000_000L;   // L suffix - long literal
double pi = 3.14159265;
float temp = 36.6f;                  // f suffix - float literal
char letter = 'A';
boolean isDone = false;

// Java 7+: alt xətt rəqəm oxunuşunu asanlaşdırır
int million = 1_000_000;</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Reference Tiplər</h2>
  <p class='lesson-text'>Reference tiplər heap-də saxlanır, dəyişəndə isə yalnız <strong>ünvan (reference)</strong> olur. Ən çox istifadə olunanlar:</p>
  <ul class='lesson-list'>
    <li><code>String</code> — mətn</li>
    <li><code>int[]</code> — massiv</li>
    <li>İstənilən class nümunəsi (object)</li>
  </ul>
  <pre><code class='language-java'>String city = "Bakı";
int[] numbers = {1, 2, 3, 4, 5};
// Reference tiplərin default dəyəri null-dır
String s = null;</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><strong>NullPointerException:</strong> <code>null</code> olan bir reference üzərindən metod çağırmaq ən çox rast gəlinən runtime xətasıdır.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Type Casting</h2>
  <p class='lesson-text'>Tiplər arasında çevirmə iki cürdür:</p>
  <pre><code class='language-java'>// Widening (implicit) — kiçikdən böyüyə, avtomatik
int i = 100;
long l = i;       // int → long, heç nə itmir
double d = i;     // int → double

// Narrowing (explicit) — böyükdən kiçiyə, məlumat itə bilər
double price = 9.99;
int rounded = (int) price;   // → 9  (kəsr hissəsi itirilir!)

// String-ə çevirmə
String s = String.valueOf(42);   // "42"
int n = Integer.parseInt("123"); // 123</code></pre>
  <div class='note note-info'>
    <span class='note-icon'>💡</span>
    <div class='note-body'><strong>var keyword (Java 10+):</strong> <code>var</code> tipi compiler özü müəyyən edir — kodu qısaldır amma aydınlığı azaltmamalıdır.
    <pre style='margin:8px 0 0'><code class='language-java'>var name = "Anar";    // compiler bilir: String
var list = new ArrayList&lt;String&gt;();</code></pre></div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Dəyişən Adlandırma Qaydaları</h2>
  <ul class='lesson-list'>
    <li>Dəyişən adları: <strong>camelCase</strong> — <code>firstName</code>, <code>totalAmount</code></li>
    <li>Sabitlər: <strong>UPPER_SNAKE_CASE</strong> — <code>MAX_SIZE = 100</code></li>
    <li>Rəqəmlə başlaya bilməz: <code>2name</code> ❌, <code>name2</code> ✅</li>
    <li>Keyword istifadə edilə bilməz: <code>int</code>, <code>class</code>, <code>return</code> ❌</li>
  </ul>
  <pre><code class='language-java'>// Yaxşı adlar
int userAge = 25;
double monthlyIncome = 2500.0;
final int MAX_RETRIES = 3;   // final = sabit (dəyişdirilə bilməz)

// Pis adlar
int x = 25;      // mənasız
int ddhh = 25;   // abbreviation başa düşülmür</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>public class DataTypes {
    public static void main(String[] args) {
        // 1. Şəxsi məlumatlarını saxla
        String name = "Ad Soyad";
        int birthYear = 2000;
        double height = 1.75;
        boolean isStudent = true;

        // 2. Hesabla və çap et
        int age = 2025 - birthYear;
        System.out.println("Ad: " + name);
        System.out.println("Yaş: " + age);
        System.out.printf("Boy: %.2f m%n", height);
        System.out.println("Tələbədir: " + isStudent);

        // 3. Type casting
        double exact = 7.0 / 2;   // → 3.5
        int truncated = (int)(7.0 / 2); // → 3
        System.out.println(exact + " vs " + truncated);
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Java-da 8 primitive tip var: byte, short, int, long, float, double, char, boolean</li>
    <li>Primitive tiplər stack-də, reference tiplər heap-də saxlanır</li>
    <li>Widening casting avtomatik, narrowing casting manual (məlumat itkisi ola bilər)</li>
    <li><code>var</code> (Java 10+) tipi compiler müəyyən edir, amma statik tipləmə qalır</li>
    <li>Dəyişən adları camelCase, sabitlər UPPER_SNAKE_CASE</li>
  </ul>
</div>
`,

  "jf-2": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Arifmetik Operatorlar</h2>
  <pre><code class='language-java'>int a = 10, b = 3;

System.out.println(a + b);   // 13  — toplama
System.out.println(a - b);   // 7   — çıxma
System.out.println(a * b);   // 30  — vurma
System.out.println(a / b);   // 3   — bölmə (tam bölmə!)
System.out.println(a % b);   // 1   — qalıq (modulus)

// Tam bölmədən qaçmaq üçün double istifadə et
System.out.println(10.0 / 3);    // 3.3333...
System.out.println((double)a / b); // 3.3333...

// Artırma / azaltma
int x = 5;
System.out.println(x++);  // 5 çap edir, sonra x=6
System.out.println(++x);  // əvvəl x=7, sonra 7 çap edir
System.out.println(x--);  // 7 çap edir, sonra x=6</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><strong>Tam bölmə tələsi:</strong> <code>10 / 3 = 3</code> (3.333... deyil!). İki <code>int</code> bölündüyündə nəticə həmişə <code>int</code>-dir.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Müqayisə Operatorları</h2>
  <p class='lesson-text'>Nəticə həmişə <code>boolean</code> (true/false) olur:</p>
  <pre><code class='language-java'>int x = 10, y = 20;
System.out.println(x == y);   // false — bərabərmi?
System.out.println(x != y);   // true  — fərqlimi?
System.out.println(x &lt; y);    // true  — kiçikmi?
System.out.println(x &gt; y);    // false — böyükdürmü?
System.out.println(x &lt;= 10);  // true  — kiçik və ya bərabər?
System.out.println(x &gt;= 10);  // true  — böyük və ya bərabər?</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><strong>String müqayisəsi:</strong> String-ləri <code>==</code> ilə deyil, <code>.equals()</code> ilə müqayisə et!<br>
    <code>==</code> reference-ləri, <code>.equals()</code> isə məzmunu müqayisə edir.</div>
  </div>
  <pre><code class='language-java'>String s1 = new String("Java");
String s2 = new String("Java");
System.out.println(s1 == s2);       // false (fərqli obyektlər)
System.out.println(s1.equals(s2));  // true  (eyni məzmun)</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Məntiqi Operatorlar</h2>
  <pre><code class='language-java'>boolean a = true, b = false;

System.out.println(a &amp;&amp; b);  // false — VƏ (hər ikisi true olmalı)
System.out.println(a || b);  // true  — VƏ YA (biri true olsa kifayət)
System.out.println(!a);      // false — DEYIL

// Short-circuit evaluation — Java ağıllıdır!
int x = 0;
// x != 0 false olduğundan, 10/x heç vaxt icra edilmir (sıfıra bölmə yoxdur!)
if (x != 0 &amp;&amp; 10 / x &gt; 1) {
    System.out.println("Bu işləməyəcək");
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Təyinat və Compound Operatorlar</h2>
  <pre><code class='language-java'>int n = 10;
n += 5;   // n = n + 5  → 15
n -= 3;   // n = n - 3  → 12
n *= 2;   // n = n * 2  → 24
n /= 4;   // n = n / 4  → 6
n %= 4;   // n = n % 4  → 2</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Ternary Operator</h2>
  <p class='lesson-text'>Qısa if-else alternativi: <code>şərt ? dəyər_true : dəyər_false</code></p>
  <pre><code class='language-java'>int age = 20;
String status = age &gt;= 18 ? "Yetkindir" : "Yetkin deyil";
System.out.println(status);  // "Yetkindir"

// Math.max() əvəzinə
int a = 15, b = 22;
int max = a &gt; b ? a : b;   // 22</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>Ternary sadə hallarda yaxşıdır, amma iç-içə ternary (<code>a ? b ? c : d : e</code>) kodu oxunaqlı etmir — bu halda if-else istifadə et.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>public class Operators {
    public static void main(String[] args) {
        // 1. Faiz hesabla
        double principal = 1000.0;
        double rate = 7.5;
        double interest = principal * rate / 100;
        System.out.printf("Faiz: %.2f AZN%n", interest);

        // 2. Cüt / Tək yoxla
        int number = 17;
        boolean isEven = number % 2 == 0;
        System.out.println(number + " cütdür: " + isEven);

        // 3. Min/Max
        int x = 45, y = 72;
        int min = x &lt; y ? x : y;
        int max = x &gt; y ? x : y;
        System.out.println("Min: " + min + ", Max: " + max);
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>İki int bölündüyündə nəticə int-dir (3.33 deyil 3)</li>
    <li>String müqayisəsindən həmişə <code>.equals()</code> istifadə et, <code>==</code> yox</li>
    <li><code>&amp;&amp;</code> və <code>||</code> short-circuit edir — sol tərəf kifayət edərsə sağ tərəf icra edilmir</li>
    <li>Ternary operator: <code>şərt ? true_dəyər : false_dəyər</code></li>
    <li>Compound operatorlar: <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code></li>
  </ul>
</div>
`,

  "jf-3": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>if / else if / else</h2>
  <p class='lesson-text'>Şərtə görə fərqli kod blokları icra etmək üçün <code>if</code> istifadə olunur:</p>
  <pre><code class='language-java'>int score = 75;

if (score >= 90) {
    System.out.println("Əla (A)");
} else if (score >= 75) {
    System.out.println("Yaxşı (B)");
} else if (score >= 60) {
    System.out.println("Kafi (C)");
} else {
    System.out.println("Qeyri-kafi (F)");
}
// Output: Yaxşı (B)</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>Şərtlər yuxarıdan aşağıya yoxlanır. İlk true olan blok icra edilir, qalanlar keçilir. Buna görə daha xüsusi şərtləri əvvələ yaz.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>switch statement (klassik)</h2>
  <p class='lesson-text'>Bir dəyişənin çoxlu mümkün dəyərlərini müqayisə etmək üçün switch daha oxunaqlıdır:</p>
  <pre><code class='language-java'>String day = "Monday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        System.out.println("İş günü");
        break;  // break olmazsa növbəti case-ə "düşür" (fall-through!)
    case "Saturday":
    case "Sunday":
        System.out.println("İstirahət");
        break;
    default:
        System.out.println("Naməlum gün");
}</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><strong>break unutma!</strong> <code>break</code> olmadan Java növbəti <code>case</code>-ə keçməyə davam edir (fall-through). Bu bəzən istəniləndir, amma çox vaxt xətadır.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>switch expression (Java 14+) — Tövsiyə olunan</h2>
  <p class='lesson-text'>Yeni sintaksis çox daha aydın və təhlükəsizdir — <code>break</code> lazım deyil:</p>
  <pre><code class='language-java'>String day = "Monday";

String type = switch (day) {
    case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" -> "İş günü";
    case "Saturday", "Sunday" -> "İstirahət";
    default -> "Naməlum";
};
System.out.println(type);  // İş günü

// yield ilə blok da istifadə edə bilərsən
int numLetters = switch (day) {
    case "Monday", "Friday", "Sunday" -> 6;
    case "Tuesday"                    -> 7;
    case "Thursday", "Saturday"       -> 8;
    default -> {
        System.out.println("Xüsusi hal: " + day);
        yield day.length();
    }
};</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Pattern Matching for instanceof (Java 16+)</h2>
  <p class='lesson-text'>Tipi yoxla və eyni anda çevir:</p>
  <pre><code class='language-java'>// Köhnə üsul
Object obj = "Salam";
if (obj instanceof String) {
    String s = (String) obj;   // ayrıca cast lazım idi
    System.out.println(s.length());
}

// Java 16+ — bir addımda
if (obj instanceof String s) {
    System.out.println(s.length());  // s avtomatik String kimi istifadə olunur
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>public class ControlFlow {
    public static void main(String[] args) {
        // 1. Hesab kalkulyatoru (switch expression)
        int a = 15, b = 4;
        String op = "+";

        double result = switch (op) {
            case "+" -> (double)(a + b);
            case "-" -> (double)(a - b);
            case "*" -> (double)(a * b);
            case "/" -> b != 0 ? (double)a / b : Double.NaN;
            default  -> throw new IllegalArgumentException("Bilinməyən operator: " + op);
        };
        System.out.printf("%d %s %d = %.2f%n", a, op, b, result);

        // 2. FizzBuzz (klassik müsahibə sualı)
        for (int i = 1; i <= 20; i++) {
            if      (i % 15 == 0) System.out.println("FizzBuzz");
            else if (i % 3  == 0) System.out.println("Fizz");
            else if (i % 5  == 0) System.out.println("Buzz");
            else                  System.out.println(i);
        }
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>if-else if-else: şərtlər yuxarıdan aşağıya yoxlanır, ilk true blok icra edilir</li>
    <li>Klassik switch-də <code>break</code> unutsaq fall-through baş verir — xəta mənbəyi</li>
    <li>switch expression (Java 14+) <code>-&gt;</code> sintaksisi ilə daha təhlükəsiz və oxunaqlıdır</li>
    <li>Pattern matching instanceof (Java 16+) cast əməliyyatını sadələşdirir</li>
    <li>FizzBuzz: 3-ə bölünürsə "Fizz", 5-ə "Buzz", 15-ə "FizzBuzz"</li>
  </ul>
</div>
`,

  "jf-4": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>for döngüsü</h2>
  <p class='lesson-text'>Neçə dəfə döngü edəcəyini bildiyində <code>for</code> istifadə et:</p>
  <pre><code class='language-java'>// Sintaksis: for(başlanğıc; şərt; addım)
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}
// Output: 0, 1, 2, 3, 4

// Geri sayan döngü
for (int i = 10; i >= 1; i--) {
    System.out.print(i + " ");
}
// Output: 10 9 8 7 6 5 4 3 2 1

// Addımı 2 artırmaq
for (int i = 0; i <= 20; i += 2) {
    System.out.print(i + " ");  // 0 2 4 6 8 10 12 14 16 18 20
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>for-each (Enhanced for)</h2>
  <p class='lesson-text'>Collection və massivlər üzərindən iterasiya üçün ən oxunaqlı üsul:</p>
  <pre><code class='language-java'>int[] numbers = {3, 1, 4, 1, 5, 9, 2, 6};

for (int num : numbers) {
    System.out.print(num + " ");
}

// String list
List&lt;String&gt; names = List.of("Anar", "Günel", "Tural");
for (String name : names) {
    System.out.println("Salam, " + name + "!");
}</code></pre>
  <div class='note note-info'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>for-each döngüdə indeksi bilmirsən. İndeks lazımdırsa klassik <code>for</code> istifadə et.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>while döngüsü</h2>
  <p class='lesson-text'>Neçə dəfə döngü edəcəyini öncədən bilmədikdə <code>while</code> istifadə et:</p>
  <pre><code class='language-java'>// İstifadəçi düzgün cavab verənə qədər
int secret = 42;
int guess = 0;
int attempts = 0;

// Bu nümunədə sabit dəyər istifadə edirik
while (guess != secret) {
    attempts++;
    guess = secret; // simulyasiya
}
System.out.println(attempts + " cəhddə tapdın!");

// Rəqəmlərin cəmi
int sum = 0, n = 1;
while (n <= 100) {
    sum += n;
    n++;
}
System.out.println("1-100 cəmi: " + sum);  // 5050</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>do-while döngüsü</h2>
  <p class='lesson-text'>Ən azından bir dəfə icra edilməli olduğunda <code>do-while</code> istifadə et:</p>
  <pre><code class='language-java'>// Şərt false olsa belə, kod bir dəfə icra edilir
int count = 10;
do {
    System.out.println("count = " + count);
    count--;
} while (count > 0);

// Fərq: while vs do-while
int x = 0;
while (x > 5) {
    System.out.println("while: icra edilmir");  // icra edilmir!
}

do {
    System.out.println("do-while: bir dəfə icra edilir");  // icra edilir!
} while (x > 5);</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>break &amp; continue</h2>
  <pre><code class='language-java'>// break — döngüdən tamamilə çıx
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.print(i + " ");  // 0 1 2 3 4
}

// continue — bu iterasiyanı atla, davam et
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;  // cütləri atla
    System.out.print(i + " ");  // 1 3 5 7 9
}

// İç-içə döngüdən çıxmaq üçün label
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) break outer; // xarici döngüdən çıx
        System.out.println(i + "," + j);
    }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıqlar</h2>
  <pre><code class='language-java'>public class Loops {
    public static void main(String[] args) {
        // 1. Çarpaz cədvəl (3x3)
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.printf("%4d", i * j);
            }
            System.out.println();
        }

        // 2. Fibonacci (ilk 10 rəqəm)
        int a = 0, b = 1;
        for (int i = 0; i < 10; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        // Output: 0 1 1 2 3 5 8 13 21 34

        // 3. Sadə ədəd yoxlaması
        int num = 29;
        boolean isPrime = num > 1;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) { isPrime = false; break; }
        }
        System.out.println(num + " sadə ədəddir: " + isPrime);
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><code>for</code> — sayı məlum olduqda; <code>while</code> — şərtə görə; <code>do-while</code> — ən az 1 dəfə</li>
    <li>for-each ən oxunaqlıdır, amma indeks lazım olsa klassik for istifadə et</li>
    <li><code>break</code> döngüdən çıxır, <code>continue</code> isə həmin iterasiyanı atlayır</li>
    <li>İç-içə döngüdən çıxmaq üçün labelled break istifadə edilə bilər</li>
    <li>Performans: böyük döngülərdə döngü içindəki əməliyyatları optimallaşdır</li>
  </ul>
</div>
`,

  "jf-5": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Array nədir?</h2>
  <p class='lesson-text'>Array — eyni tipdə elementləri ardıcıl yaddaşda saxlayan sabit ölçülü data strukturudur. Ölçüsü yaradılarkən müəyyən edilir, sonra dəyişdirilmir.</p>
  <pre><code class='language-java'>// Array yaratmaq — 3 üsul
int[] nums1 = new int[5];              // 5 elementli, hamısı 0
int[] nums2 = {10, 20, 30, 40, 50};   // literal initialization
int[] nums3 = new int[]{1, 2, 3};     // anonymous array

// Elementlərə müraciət (0-dan başlayır!)
System.out.println(nums2[0]);  // 10 — ilk element
System.out.println(nums2[4]);  // 50 — son element
System.out.println(nums2.length); // 5 — uzunluq (metod deyil, sahə!)

// Dəyişdirmək
nums2[2] = 99;
System.out.println(nums2[2]); // 99</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><strong>ArrayIndexOutOfBoundsException:</strong> 5 elementli arrayin 5-ci indeksinə (nums[5]) müraciət xəta verir — yalnız 0..4 etibarlıdır.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Array üzərindən Iteration</h2>
  <pre><code class='language-java'>int[] scores = {85, 92, 78, 95, 88};

// Klassik for (indeks lazımdırsa)
for (int i = 0; i < scores.length; i++) {
    System.out.println("scores[" + i + "] = " + scores[i]);
}

// for-each (sadə iteration)
int total = 0;
for (int score : scores) {
    total += score;
}
double avg = (double) total / scores.length;
System.out.printf("Orta: %.1f%n", avg);</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Arrays Sinfi — Faydalı Metodlar</h2>
  <pre><code class='language-java'>import java.util.Arrays;

int[] arr = {5, 2, 8, 1, 9, 3};

// Sort
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));  // [1, 2, 3, 5, 8, 9]

// Binary search (sort edilmiş arrayda!)
int idx = Arrays.binarySearch(arr, 5);
System.out.println("5-in indeksi: " + idx);  // 3

// Fill
int[] zeros = new int[5];
Arrays.fill(zeros, 7);
System.out.println(Arrays.toString(zeros));  // [7, 7, 7, 7, 7]

// CopyOf
int[] copy = Arrays.copyOf(arr, 3);   // ilk 3 element
System.out.println(Arrays.toString(copy));   // [1, 2, 3]

// CopyOfRange
int[] part = Arrays.copyOfRange(arr, 2, 5); // index 2-dən 5-ə qədər (5 daxil deyil)
System.out.println(Arrays.toString(part));   // [3, 5, 8]

// Müqayisə
int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
System.out.println(Arrays.equals(a, b));  // true (a == b deyil!)</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>2D Arrays (Matris)</h2>
  <pre><code class='language-java'>// 3x3 matris
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Elementə müraciət: matrix[sıra][sütun]
System.out.println(matrix[1][2]);  // 6

// Printout
for (int[] row : matrix) {
    for (int val : row) {
        System.out.printf("%3d", val);
    }
    System.out.println();
}
// Output:
//   1  2  3
//   4  5  6
//   7  8  9</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıqlar</h2>
  <pre><code class='language-java'>public class ArrayTasks {
    public static void main(String[] args) {
        int[] data = {64, 25, 12, 22, 11};

        // 1. Min və Max tap
        int min = data[0], max = data[0];
        for (int val : data) {
            if (val < min) min = val;
            if (val > max) max = val;
        }
        System.out.println("Min: " + min + ", Max: " + max);

        // 2. Array-i tərsinə çevir
        int[] reversed = new int[data.length];
        for (int i = 0; i < data.length; i++) {
            reversed[i] = data[data.length - 1 - i];
        }
        System.out.println(Arrays.toString(reversed));

        // 3. Sort et və ya ikili axtar
        Arrays.sort(data);
        System.out.println("Sorted: " + Arrays.toString(data));
        System.out.println("25-in yeri: " + Arrays.binarySearch(data, 25));
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Array sabit ölçülüdür, 0-dan başlayan indekslər ilə müraciət edilir</li>
    <li>Uzunluq üçün <code>.length</code> sahəsi (metod deyil!), son indeks <code>length - 1</code></li>
    <li><code>Arrays.sort()</code>, <code>Arrays.toString()</code>, <code>Arrays.equals()</code> — ən vacib metodlar</li>
    <li>2D array: <code>int[][] matrix = new int[3][3]</code>; müraciət: <code>matrix[row][col]</code></li>
    <li>Dinamik ölçü lazımdırsa <code>ArrayList</code> istifadə et (Bölmə 04)</li>
  </ul>
</div>
`,

  "jf-6": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>String Pool</h2>
  <p class='lesson-text'>String Java-da <em>immutable</em> (dəyişilməz) reference tipidir. JVM xüsusi bir <strong>String Pool</strong> (string interning) saxlayır:</p>
  <pre><code class='language-java'>String s1 = "Java";         // pool-dan götürülür
String s2 = "Java";         // eyni pool obyekti qaytarılır
String s3 = new String("Java");  // məcburi yeni heap obyekti

System.out.println(s1 == s2);       // true  (eyni pool referansı)
System.out.println(s1 == s3);       // false (fərqli obyekt)
System.out.println(s1.equals(s3));  // true  (eyni məzmun)

// Immutability nümunəsi
String str = "Hello";
str = str + " World";  // yeni String yaranır, köhnəsi dəyişmir
System.out.println(str);  // "Hello World"</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>String dəyişilməzdir — buna görə string əməliyyatları yeni obyektlər yaradır. Çoxlu birləşmə lazımdırsa <code>StringBuilder</code> istifadə et.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Ən Vacib String Metodları</h2>
  <pre><code class='language-java'>String s = "  Hello, Java World!  ";

// Ölçü və simvollar
System.out.println(s.length());          // 22
System.out.println(s.charAt(8));         // 'J'
System.out.println(s.indexOf("Java"));   // 8
System.out.println(s.contains("World")); // true

// Dəyişdirmə
System.out.println(s.trim());            // "Hello, Java World!" (baş/son boşluq)
System.out.println(s.strip());           // Java 11+, Unicode boşluqları da
System.out.println(s.toLowerCase());     // "  hello, java world!  "
System.out.println(s.toUpperCase());     // "  HELLO, JAVA WORLD!  "
System.out.println(s.replace("Java", "Python")); // dəyiş

// Alt-string
System.out.println(s.trim().substring(7));      // "Java World!"
System.out.println(s.trim().substring(7, 11));  // "Java"

// Split
String csv = "Anar,Günel,Tural";
String[] names = csv.split(",");
System.out.println(names[1]);  // "Günel"

// Join (Java 8+)
String joined = String.join(" | ", names);
System.out.println(joined);    // "Anar | Günel | Tural"

// Boşluq yoxlaması (Java 11+)
System.out.println("   ".isBlank());   // true
System.out.println("hi".isEmpty());    // false</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>StringBuilder vs StringBuffer</h2>
  <p class='lesson-text'>Döngü içərisində çoxlu string birləşdirmə lazımdırsa StringBuilder istifadə et:</p>
  <pre><code class='language-java'>// YANLIŞ — hər iterasiyada yeni String yaranır (yavaş!)
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i;  // 1000 yeni String obyekti!
}

// DOĞRU — StringBuilder mutable-dır, obyekt yenilənmir
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);
}
String result2 = sb.toString();

// StringBuilder-ın metodları
sb.append(" World");        // əlavə et
sb.insert(0, "Hello ");     // müəyyən yerə əlavə et
sb.delete(0, 6);            // sil
sb.reverse();               // tərsinə çevir
sb.replace(0, 5, "Java");   // dəyiş</code></pre>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>StringBuilder</div>
      <ul>
        <li>Thread-safe deyil</li>
        <li>Single-thread üçün</li>
        <li>Daha sürətli</li>
        <li>Tövsiyə olunur</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>StringBuffer</div>
      <ul>
        <li>Thread-safe (synchronized)</li>
        <li>Multi-thread üçün</li>
        <li>Daha yavaş</li>
        <li>Nadir istifadə edilir</li>
      </ul>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>String.format() &amp; Text Blocks</h2>
  <pre><code class='language-java'>// String.format()
String name = "Anar";
int age = 25;
double gpa = 3.75;
String msg = String.format("Ad: %s, Yaş: %d, GPA: %.2f", name, age, gpa);
// Ad: Anar, Yaş: 25, GPA: 3.75

// Faydalı format specifier-lər:
// %s → String,  %d → integer,  %f → float/double
// %n → newline, %5d → minimum 5 yer,  %-5d → sola hizala

// Text Blocks (Java 13+) — çoxsatırlı string
String json = """
        {
            "name": "Anar",
            "age": 25
        }
        """;
System.out.println(json);</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>public class StringTasks {
    public static void main(String[] args) {
        // 1. Palindrom yoxlaması
        String word = "level";
        String reversed = new StringBuilder(word).reverse().toString();
        System.out.println(word + " palindromdur: " + word.equals(reversed));

        // 2. Söz saymaq
        String sentence = "Java backend development is fun";
        String[] words = sentence.split("\\s+");
        System.out.println("Söz sayı: " + words.length);

        // 3. Email validasiya (sadə)
        String email = "user@example.com";
        boolean isValid = email.contains("@") && email.contains(".");
        System.out.println(email + " etibarlıdır: " + isValid);

        // 4. Camel case
        String snake = "hello_world_java";
        StringBuilder camel = new StringBuilder();
        for (String part : snake.split("_")) {
            camel.append(Character.toUpperCase(part.charAt(0)))
                 .append(part.substring(1));
        }
        System.out.println(camel);  // HelloWorldJava
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>String immutable-dır — hər dəyişiklik yeni obyekt yaradır</li>
    <li>String müqayisəsi üçün həmişə <code>.equals()</code> istifadə et, <code>==</code> yox</li>
    <li>Döngüdə string birləşdirmə üçün <code>StringBuilder</code> istifadə et (performans)</li>
    <li><code>trim()</code>/<code>strip()</code>, <code>split()</code>, <code>contains()</code>, <code>substring()</code> ən çox istifadə olunanlar</li>
    <li>Text Blocks (Java 13+) çoxsatırlı string-lər üçün çox rahatdır</li>
  </ul>
</div>
`,

  "jf-7": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Metod Sintaksisi</h2>
  <p class='lesson-text'>Metod — bir işi görən, adlandırılmış kod blokudur. Kodu yenidən istifadə etməyə imkan verir:</p>
  <pre><code class='language-java'>// Sintaksis:
// [modifikator] return_tipi metodAdı(parametrlər) { bədən }

public static int add(int a, int b) {
    return a + b;
}

public static void greet(String name) {   // void — heç nə qaytarmır
    System.out.println("Salam, " + name + "!");
}

// Çağırma
int sum = add(10, 20);   // sum = 30
greet("Anar");           // Salam, Anar!</code></pre>
  <div class='note note-info'>
    <span class='note-icon'>💡</span>
    <div class='note-body'><strong>static metodlar</strong> — class-a aiddir, obyekt yaratmadan çağrılır. İndi bütün metodlarımız static-dir. Bölmə 03-də non-static metodları öyrənəcəyik.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Return Types &amp; Pass-by-Value</h2>
  <pre><code class='language-java'>// Primitive tiplər by value ötürülür (kopyası gedir)
public static void doubleIt(int x) {
    x = x * 2;  // orijinal dəyər dəyişmir!
}

int num = 5;
doubleIt(num);
System.out.println(num);  // 5 (dəyişmədi!)

// Düzgün üsul: return ilə yeni dəyər qaytar
public static int doubled(int x) {
    return x * 2;
}
num = doubled(num);
System.out.println(num);  // 10

// Object-lər by reference ötürülür — orijinal dəyişə bilər
public static void addToList(List&lt;Integer&gt; list, int val) {
    list.add(val);  // orijinal list dəyişir!
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Method Overloading</h2>
  <p class='lesson-text'>Eyni adlı metodun fərqli parametr imzaları olması:</p>
  <pre><code class='language-java'>public static int add(int a, int b) {
    return a + b;
}
public static double add(double a, double b) {
    return a + b;
}
public static int add(int a, int b, int c) {
    return a + b + c;
}

// Java hansını çağıracağını parametr tiplərinə görə bilir
System.out.println(add(3, 5));          // int versiyası → 8
System.out.println(add(1.5, 2.5));      // double versiyası → 4.0
System.out.println(add(1, 2, 3));       // 3 parametrli versiya → 6</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>varargs (dəyişkən sayda parametr)</h2>
  <pre><code class='language-java'>// ... ilə istənilən sayda arqument qəbul et
public static int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) total += n;
    return total;
}

System.out.println(sum(1, 2));           // 3
System.out.println(sum(1, 2, 3, 4, 5)); // 15
System.out.println(sum());               // 0

// varargs həmişə son parametr olmalıdır
public static String format(String prefix, String... items) {
    return prefix + ": " + String.join(", ", items);
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Rekursiya (Recursion)</h2>
  <p class='lesson-text'>Metodun özünü çağırması. Hər rekursiv metodun <strong>base case</strong> (dayandırma şərti) olmalıdır, əks halda sonsuz döngü baş verir:</p>
  <pre><code class='language-java'>// Faktorial: 5! = 5 × 4 × 3 × 2 × 1 = 120
public static long factorial(int n) {
    if (n <= 1) return 1;        // BASE CASE — buradan geri qayıdılır
    return n * factorial(n - 1); // RECURSIVE CASE
}

// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...
public static int fibonacci(int n) {
    if (n <= 1) return n;   // base case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

System.out.println(factorial(5));    // 120
System.out.println(fibonacci(10));   // 55</code></pre>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>Rekursiya üstünlükləri</div>
      <ul>
        <li>Kod daha qısa və oxunaqlı</li>
        <li>Ağac quruluşları üçün ideal</li>
        <li>Divide-and-conquer</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Rekursiya çatışmazlıqları</div>
      <ul>
        <li>Stack overflow riski</li>
        <li>Daha çox yaddaş</li>
        <li>Bəzən daha yavaş</li>
      </ul>
    </div>
  </div>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><code>fibonacci(40)</code> çox yavaş işləyir (üstəl mürəkkəblik). Real kodda ya iterasiya, ya memoization, ya da dynamic programming istifadə et.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıqlar</h2>
  <pre><code class='language-java'>public class Methods {

    // 1. İkili axtarış (Binary Search) — iterativ
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if      (arr[mid] == target) return mid;
            else if (arr[mid] < target)  left = mid + 1;
            else                         right = mid - 1;
        }
        return -1; // tapılmadı
    }

    // 2. Güc hesablamaq — rekursiv
    public static long power(long base, int exp) {
        if (exp == 0) return 1;
        if (exp % 2 == 0) {
            long half = power(base, exp / 2);
            return half * half;
        }
        return base * power(base, exp - 1);
    }

    public static void main(String[] args) {
        int[] sorted = {1, 3, 5, 7, 9, 11, 13};
        System.out.println(binarySearch(sorted, 7));  // 3
        System.out.println(power(2, 10));              // 1024
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Metod: modifikator + return tipi + ad + parametrlər + bədən</li>
    <li>Primitive tiplər by value, object-lər by reference ötürülür</li>
    <li>Overloading: eyni ad, fərqli parametr imzası (return tipi fərqi kifayət etmir)</li>
    <li>varargs (<code>Type... name</code>) son parametr olmalı, massiv kimi işləyir</li>
    <li>Rekursiyada mütləq base case olmalı, çox dərin rekursiya StackOverflowError verir</li>
  </ul>
</div>
`,

  /* ─────────────────────────────────────────
     SECTION 03 — OOP (Object-Oriented Programming)
     ───────────────────────────────────────── */

  "oop-1": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Class nədir?</h2>
  <p class='lesson-text'><strong>Class</strong> — real dünyadakı bir anlayışın (şablon/mövqe) kodda təsviridir. <strong>Object</strong> isə o şablondan yaradılan konkret nümunədir.</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Class (şablon)</div>
      <ul>
        <li>Bir dəfə yazılır</li>
        <li>Sahə (field) tipləri var</li>
        <li>Metodlar var</li>
        <li>Yaddaşda yer tutmur</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>Object (nümunə)</div>
      <ul>
        <li>Çox sayda yaradıla bilər</li>
        <li>Öz dəyərləri var</li>
        <li>Heap-də yer tutur</li>
        <li><code>new</code> ilə yaranır</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>// Class — şablon
public class Car {
    // Instance fields (hər obyektin öz kopyası)
    String brand;
    String model;
    int year;
    double price;

    // Method
    void start() {
        System.out.println(brand + " " + model + " işə düşdü.");
    }

    void info() {
        System.out.println(year + " | " + brand + " " + model + " | " + price + " AZN");
    }
}

// Main-da obyekt yaratmaq
public class Main {
    public static void main(String[] args) {
        Car car1 = new Car();       // new ilə obyekt yaranır
        car1.brand = "Toyota";
        car1.model = "Camry";
        car1.year  = 2023;
        car1.price = 45000;

        Car car2 = new Car();       // ikinci, müstəqil obyekt
        car2.brand = "BMW";
        car2.model = "X5";
        car2.year  = 2024;
        car2.price = 95000;

        car1.info();   // 2023 | Toyota Camry | 45000.0 AZN
        car2.start();  // BMW X5 işə düşdü.
    }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Instance vs Local Variables</h2>
  <pre><code class='language-java'>public class BankAccount {
    // Instance variable — obyektə aiddir, hər nümunənin öz kopyası var
    // Default dəyəri var: int=0, double=0.0, boolean=false, Object=null
    double balance;
    String owner;

    void deposit(double amount) {   // amount — LOCAL variable
        // Local variable: metodun içindədir, default dəyəri YOXdur
        double fee = amount * 0.01; // bu da local
        balance += amount - fee;    // balance = instance variable
        System.out.printf("%.2f AZN əlavə edildi (komissiya: %.2f)%n", amount, fee);
    }

    void printBalance() {
        System.out.println(owner + " balansı: " + balance + " AZN");
    }
}

// İstifadə
BankAccount acc = new BankAccount();
acc.owner = "Anar";
acc.balance = 1000;
acc.deposit(500);
acc.printBalance(); // Anar balansı: 1495.0 AZN</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>toString(), equals(), hashCode()</h2>
  <p class='lesson-text'>Bu 3 metod <code>Object</code> sinfindən gəlir (hər Java class-ı Object-dən extend edir). Öz class-larında override etmək yaxşı təcrübədir:</p>
  <pre><code class='language-java'>public class Person {
    String name;
    int age;

    // toString — obyekti String kimi çap etdikdə çağrılır
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }

    // equals — iki obyektin məzmununu müqayisə edir
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;           // eyni referans
        if (!(obj instanceof Person)) return false;
        Person other = (Person) obj;
        return age == other.age && name.equals(other.name);
    }

    // hashCode — equals ilə birlikdə override edilməlidir (HashMap üçün vacib!)
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

Person p1 = new Person();
p1.name = "Anar"; p1.age = 25;

Person p2 = new Person();
p2.name = "Anar"; p2.age = 25;

System.out.println(p1);            // Person{name='Anar', age=25}
System.out.println(p1.equals(p2)); // true  (bizim equals)
System.out.println(p1 == p2);      // false (fərqli referanslar)</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><strong>Qayda:</strong> <code>equals()</code> override etdikdə mütləq <code>hashCode()</code>-u da override et. Əks halda <code>HashMap</code>/<code>HashSet</code>-də gözlənilməz davranış baş verər.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>// Student class-ı yaz: name, grade (A-F), gpa sahələri
// toString, equals, hashCode override et
// calculateStatus() metodu: gpa >= 3.5 → "Honor Roll", else "Regular"

public class Student {
    String name;
    char grade;
    double gpa;

    String calculateStatus() {
        return gpa >= 3.5 ? "Honor Roll" : "Regular";
    }

    @Override
    public String toString() {
        return String.format("Student{%s, grade=%c, gpa=%.2f, status=%s}",
                             name, grade, gpa, calculateStatus());
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Student)) return false;
        Student s = (Student) o;
        return name.equals(s.name) && gpa == s.gpa;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, gpa);
    }

    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Anar"; s.grade = 'A'; s.gpa = 3.8;
        System.out.println(s); // Student{Anar, grade=A, gpa=3.80, status=Honor Roll}
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Class şablon, Object həmin şablondan <code>new</code> ilə yaradılan nümunədir</li>
    <li>Instance variable-ların default dəyəri var (0/false/null), local variable-ların yoxdur</li>
    <li>Hər Java class-ı <code>Object</code>-dən miras alır</li>
    <li><code>toString()</code>, <code>equals()</code>, <code>hashCode()</code> — ən vacib override metodları</li>
    <li><code>equals()</code> override edilərsə <code>hashCode()</code> da override edilməlidir</li>
  </ul>
</div>
`,

  "oop-2": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Constructor nədir?</h2>
  <p class='lesson-text'>Constructor — <code>new</code> ilə obyekt yaradılarkən avtomatik çağrılan xüsusi bir metoddur. Class-la eyni ada malikdir, return tipi yoxdur.</p>
  <pre><code class='language-java'>public class Product {
    String name;
    double price;
    int stock;

    // Default constructor — parametrsiz
    // Java bunu avtomatik əlavə edir (amma siz özünüz constructor yazarsanız, Java əlavə etmir)
    public Product() {
        name  = "Naməlum";
        price = 0.0;
        stock = 0;
    }

    // Parametrli constructor
    public Product(String name, double price, int stock) {
        this.name  = name;   // this.name = sahə, name = parametr
        this.price = price;
        this.stock = stock;
    }

    // Yalnız ad alan constructor
    public Product(String name) {
        this.name  = name;
        this.price = 0.0;
        this.stock = 0;
    }
}

// İstifadə
Product p1 = new Product();                       // default
Product p2 = new Product("Laptop", 2500.0, 10);  // parametrli
Product p3 = new Product("Siçan");                // yalnız ad</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>this keyword — 3 İstifadə</h2>
  <pre><code class='language-java'>public class Circle {
    double radius;
    String color;

    // 1. this.field — sahə ilə parametri ayırd et
    public Circle(double radius, String color) {
        this.radius = radius;   // this.radius = sahə, radius = parametr
        this.color  = color;
    }

    // 2. this() — başqa konstruktoru çağır (Constructor Chaining)
    public Circle(double radius) {
        this(radius, "qara");   // ↑ yuxarıdakı constructor-u çağırır
    }

    public Circle() {
        this(1.0);  // → this(1.0, "qara") zənciri
    }

    // 3. this metodda — cari obyektin referansı (method chaining üçün)
    public Circle setRadius(double radius) {
        this.radius = radius;
        return this;   // ← cari obyekti qaytar
    }

    public Circle setColor(String color) {
        this.color = color;
        return this;
    }

    public double area() {
        return Math.PI * radius * radius;
    }

    @Override
    public String toString() {
        return String.format("Circle(r=%.1f, color=%s, area=%.2f)", radius, color, area());
    }
}

// Method chaining (Builder pattern əsası)
Circle c = new Circle()
    .setRadius(5.0)
    .setColor("mavi");
System.out.println(c); // Circle(r=5.0, color=mavi, area=78.54)</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Constructor Overloading</h2>
  <p class='lesson-text'>Eyni class-da fərqli parametr imzaları olan bir neçə constructor ola bilər:</p>
  <pre><code class='language-java'>public class Address {
    String street;
    String city;
    String country;

    public Address(String street, String city, String country) {
        this.street  = street;
        this.city    = city;
        this.country = country;
    }

    // city verilməyibsə "Bakı" default götürülür
    public Address(String street, String country) {
        this(street, "Bakı", country);
    }

    // Yalnız şəhər
    public Address(String city) {
        this("Naməlum küçə", city, "Azərbaycan");
    }

    @Override
    public String toString() {
        return street + ", " + city + ", " + country;
    }
}

System.out.println(new Address("Nizami 10", "Bakı", "Azərbaycan"));
System.out.println(new Address("İstiqlaliyyət", "Azərbaycan"));
System.out.println(new Address("Gəncə"));</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'><strong>this() çağırması constructor-un ilk sətri olmalıdır</strong>. super() ilə bir yerdə istifadə edilə bilməz (ikisi də ilk sətirdə ola bilməz).</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>// BankAccount class-ı:
// - owner (String), balance (double), accountNumber (static sayğac)
// - 3 constructor: tam, yalnız owner, default
// - deposit(double), withdraw(double), toString()

public class BankAccount {
    private static int counter = 1000;  // static — bütün obyektlər paylaşır

    String owner;
    double balance;
    int accountNumber;

    public BankAccount(String owner, double initialBalance) {
        this.owner         = owner;
        this.balance       = initialBalance;
        this.accountNumber = ++counter;
    }

    public BankAccount(String owner) {
        this(owner, 0.0);
    }

    public BankAccount() {
        this("Anonim");
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) balance -= amount;
        else System.out.println("Kifayət qədər balans yoxdur!");
    }

    @Override
    public String toString() {
        return String.format("Hesab #%d [%s] — %.2f AZN", accountNumber, owner, balance);
    }

    public static void main(String[] args) {
        BankAccount a = new BankAccount("Anar", 5000);
        BankAccount b = new BankAccount("Günel");
        a.deposit(200);
        a.withdraw(100);
        System.out.println(a);  // Hesab #1001 [Anar] — 5100.00 AZN
        System.out.println(b);  // Hesab #1002 [Günel] — 0.00 AZN
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Constructor class-la eyni adda, return tipi olmayan, <code>new</code>-da avtomatik çağrılan metoddur</li>
    <li><code>this.field</code> — sahə ilə eyni adlı parametri ayırd edir</li>
    <li><code>this()</code> — həmin class-ın başqa constructor-unu çağırır (ilk sətir olmalı)</li>
    <li>Constructor overloading: fərqli parametr siyahısı ilə bir neçə constructor</li>
    <li><code>return this</code> → method chaining (Builder pattern əsası)</li>
  </ul>
</div>
`,

  "oop-3": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Access Modifiers</h2>
  <p class='lesson-text'>Java-da 4 görünürlük səviyyəsi var:</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Modifier</div>
      <ul>
        <li><code>private</code></li>
        <li><code>default</code> (yazılmır)</li>
        <li><code>protected</code></li>
        <li><code>public</code></li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>Haradan əlçatan?</div>
      <ul>
        <li>Yalnız həmin class daxilindən</li>
        <li>Eyni package daxilindən</li>
        <li>Eyni package + alt sinflər</li>
        <li>Hər yerdən</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>public class Employee {
    private String name;       // yalnız bu class daxilindən
    private double salary;
    int department;            // default — eyni package
    protected String role;     // alt sinflər də görür
    public String company;     // hər yerdən

    // Getter — dəyəri oxumaq üçün
    public String getName() {
        return name;
    }

    // Setter — dəyəri dəyişmək üçün (validasiya əlavə etmək olar)
    public void setName(String name) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Ad boş ola bilməz!");
        }
        this.name = name;
    }

    public double getSalary() { return salary; }

    public void setSalary(double salary) {
        if (salary < 0) throw new IllegalArgumentException("Maaş mənfi ola bilməz!");
        this.salary = salary;
    }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Encapsulation niyə lazımdır?</h2>
  <p class='lesson-text'>Sahələri <code>private</code> edib getter/setter vasitəsilə idarə etmək:</p>
  <ul class='lesson-list'>
    <li><strong>Validasiya</strong> — mənfi maaş, boş ad kimi yanlış dəyərlərin qarşısını alır</li>
    <li><strong>Daxili dəyişiklik</strong> — saxlama formatını dəyişsən, API dəyişmir</li>
    <li><strong>Read-only / Write-only</strong> — yalnız getter və ya yalnız setter yarada bilərsən</li>
    <li><strong>Debug asanlığı</strong> — setter-ə breakpoint qoy, hansı kod dəyəri dəyişdirir bilirsin</li>
  </ul>
  <pre><code class='language-java'>// Yanlış — encapsulation yoxdur
public class BadPerson {
    public int age;  // hər kəs istənilən dəyər yaza bilər!
}
BadPerson bp = new BadPerson();
bp.age = -5;  // mənfi yaş — məntiksiz amma yol verilir

// Doğru — encapsulate edilib
public class Person {
    private int age;

    public int getAge() { return age; }

    public void setAge(int age) {
        if (age < 0 || age > 150)
            throw new IllegalArgumentException("Etibarsız yaş: " + age);
        this.age = age;
    }
}
Person p = new Person();
p.setAge(-5); // → IllegalArgumentException atılır!</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Record Classes (Java 16+)</h2>
  <p class='lesson-text'>Record — immutable data class-ı üçün qısa sintaksis. Avtomatik: constructor, getter, toString, equals, hashCode yaradır:</p>
  <pre><code class='language-java'>// Köhnə üsul — ~30 sətir
public class Point {
    private final double x;
    private final double y;
    public Point(double x, double y) { this.x = x; this.y = y; }
    public double x() { return x; }
    public double y() { return y; }
    @Override public String toString() { return "Point[x=" + x + ", y=" + y + "]"; }
    // ...equals, hashCode da lazımdır
}

// Record ilə — 1 sətir!
public record Point(double x, double y) {}

// İstifadə
Point p = new Point(3.0, 4.0);
System.out.println(p.x());         // 3.0
System.out.println(p.y());         // 4.0
System.out.println(p);             // Point[x=3.0, y=4.0]

// Record-a metod əlavə etmək olar
public record Point(double x, double y) {
    public double distance() {
        return Math.sqrt(x * x + y * y);
    }
    // Compact constructor — validasiya üçün
    public Point {
        if (x &lt; 0 || y &lt; 0) throw new IllegalArgumentException("Mənfi koordinat!");
    }
}</code></pre>
  <div class='note note-info'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>Record-lar <strong>immutable</strong>-dır — yaradıldıqdan sonra dəyərləri dəyişdirilə bilməz. DTO (Data Transfer Object) kimi çox əlverişlidir.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>// Temperature class — Celsius saxla, Fahrenheit-ə çevir
public class Temperature {
    private double celsius;

    public Temperature(double celsius) {
        setCelsius(celsius);
    }

    public double getCelsius() { return celsius; }

    public void setCelsius(double celsius) {
        if (celsius &lt; -273.15)
            throw new IllegalArgumentException("Mütləq sıfırdan aşağı ola bilməz!");
        this.celsius = celsius;
    }

    public double getFahrenheit() {
        return celsius * 9 / 5 + 32;
    }

    public double getKelvin() {
        return celsius + 273.15;
    }

    @Override
    public String toString() {
        return String.format("%.2f°C = %.2f°F = %.2fK", celsius, getFahrenheit(), getKelvin());
    }

    public static void main(String[] args) {
        Temperature t = new Temperature(100);
        System.out.println(t);  // 100.00°C = 212.00°F = 373.15K
        t.setCelsius(-40);
        System.out.println(t.getFahrenheit()); // -40.0 (eyni nöqtə!)
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>4 access modifier: private &lt; default &lt; protected &lt; public</li>
    <li>Sahələri private et, getter/setter ilə idarə et — encapsulation</li>
    <li>Setter-lərdə validasiya əlavə etmək yanlış dəyərlərin qarşısını alır</li>
    <li>Record (Java 16+) — immutable data class üçün kompakt sintaksis</li>
    <li>DTO-lar üçün Record ideal seçimdir</li>
  </ul>
</div>
`,

  "oop-4": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Inheritance (Miras alma)</h2>
  <p class='lesson-text'><code>extends</code> ilə bir class başqa bir class-ın bütün sahə və metodlarını miras alır. Java-da <strong>single inheritance</strong> (bir class yalnız bir class-dan extend edə bilər):</p>
  <pre><code class='language-java'>// Əsas class (superclass / parent)
public class Animal {
    String name;
    int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age  = age;
    }

    public void eat() {
        System.out.println(name + " yemək yeyir.");
    }

    public void sleep() {
        System.out.println(name + " yatır.");
    }

    @Override
    public String toString() {
        return name + " (" + age + " yaş)";
    }
}

// Alt class (subclass / child) — Animal-ı miras alır
public class Dog extends Animal {
    String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);   // ← Parent constructor-u çağır (İLK SƏTIR OLMALI!)
        this.breed = breed;
    }

    public void bark() {
        System.out.println(name + " hürür: Hav hav!");
    }

    @Override
    public String toString() {
        return super.toString() + " | Cins: " + breed;
    }
}

// İstifadə
Dog d = new Dog("Qarabağ", 3, "İt");
d.eat();     // Animal-dan miras — "Qarabağ yemək yeyir."
d.sleep();   // Animal-dan miras
d.bark();    // Dog-un öz metodu
System.out.println(d); // Qarabağ (3 yaş) | Cins: İt</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>super keyword</h2>
  <pre><code class='language-java'>public class Vehicle {
    String brand;
    int speed;

    public Vehicle(String brand, int speed) {
        this.brand = brand;
        this.speed = speed;
    }

    public String describe() {
        return brand + " | " + speed + " km/h";
    }
}

public class ElectricCar extends Vehicle {
    int batteryCapacity; // kWh

    public ElectricCar(String brand, int speed, int battery) {
        super(brand, speed);         // 1. super() — parent constructor
        this.batteryCapacity = battery;
    }

    @Override
    public String describe() {
        return super.describe() + " | Batareya: " + batteryCapacity + " kWh"; // 2. super.method()
    }
}

ElectricCar tesla = new ElectricCar("Tesla Model S", 250, 100);
System.out.println(tesla.describe());
// Tesla Model S | 250 km/h | Batareya: 100 kWh</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><code>super()</code> çağırması constructor-un ilk sətri olmalıdır. Əgər siz yazmırsanızsa, Java avtomatik <code>super()</code> (parametrsiz) əlavə edir — parent-in parametrsiz constructor-u yoxdursa, compile xətası!</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Method Overriding &amp; @Override</h2>
  <p class='lesson-text'>Alt sinif parent-in metodunu yenidən tərif edə bilər. <code>@Override</code> annotation-u kompilyatora yoxlatdırır:</p>
  <pre><code class='language-java'>public class Shape {
    public double area() {
        return 0; // default
    }
    public void display() {
        System.out.println("Sahə: " + area());
    }
}

public class Circle extends Shape {
    double radius;
    public Circle(double radius) { this.radius = radius; }

    @Override
    public double area() {                // overriding
        return Math.PI * radius * radius;
    }
}

public class Rectangle extends Shape {
    double width, height;
    public Rectangle(double w, double h) { width = w; height = h; }

    @Override
    public double area() {
        return width * height;
    }
}

Shape s1 = new Circle(5);
Shape s2 = new Rectangle(4, 6);
s1.display();  // Sahə: 78.54  (Circle-ın area() çağrılır)
s2.display();  // Sahə: 24.0   (Rectangle-ın area() çağrılır)</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>final keyword</h2>
  <pre><code class='language-java'>// final class — extend edilə bilməz
public final class String { ... }  // JDK-nın özündəki String!

// final method — override edilə bilməz
public class Base {
    public final void doSomething() { ... }
}

// final variable — dəyişdirilə bilməz (sabit)
final double PI = 3.14159;
// PI = 3.0; // compile xətası!</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Object sinfi — Hər şeyin əsası</h2>
  <p class='lesson-text'>Java-da hər class dolayı yolla <code>Object</code>-dən extend edir. Buna görə bu metodlar hər obyektdə var:</p>
  <ul class='lesson-list'>
    <li><code>toString()</code> — String kimi çap</li>
    <li><code>equals(Object)</code> — bərabərlik müqayisəsi</li>
    <li><code>hashCode()</code> — hash dəyəri</li>
    <li><code>getClass()</code> — runtime class məlumatı</li>
    <li><code>clone()</code> — kopyalama (Cloneable lazım)</li>
  </ul>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>// İyerarxiya: Person → Student → GraduateStudent
public class Person {
    protected String name;
    protected int age;
    public Person(String name, int age) { this.name = name; this.age = age; }
    public String introduce() { return "Mən " + name + ", " + age + " yaşındayam."; }
}

public class Student extends Person {
    protected String major;
    protected double gpa;
    public Student(String name, int age, String major, double gpa) {
        super(name, age);
        this.major = major; this.gpa = gpa;
    }
    @Override
    public String introduce() {
        return super.introduce() + " " + major + " üzrə tələbəyəm. GPA: " + gpa;
    }
}

public class GraduateStudent extends Student {
    String thesis;
    public GraduateStudent(String name, int age, String major, double gpa, String thesis) {
        super(name, age, major, gpa);
        this.thesis = thesis;
    }
    @Override
    public String introduce() {
        return super.introduce() + " Tezis: \"" + thesis + "\"";
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Java single inheritance — bir class yalnız bir class-dan <code>extends</code> edə bilər</li>
    <li><code>super()</code> parent constructor-u çağırır, <strong>ilk sətir olmalı</strong></li>
    <li><code>@Override</code> annotation-u yanlış override-ın qarşısını alır (məsləhət görülür)</li>
    <li><code>final</code>: class extend edilə bilməz, method override edilə bilməz, variable dəyişdirilə bilməz</li>
    <li>Hər Java class-ı <code>Object</code>-dən dolayı miras alır</li>
  </ul>
</div>
`,

  "oop-5": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Polimorfizm nədir?</h2>
  <p class='lesson-text'><strong>Polymorphism</strong> (çox formalılıq) — eyni interfeysin fərqli davranışlar göstərə bilməsidir. Java-da 2 növü var:</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Compile-time (Static)</div>
      <ul>
        <li>Method Overloading</li>
        <li>Kompilasiya zamanı müəyyən olunur</li>
        <li>Eyni ad, fərqli parametr</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Runtime (Dynamic)</div>
      <ul>
        <li>Method Overriding</li>
        <li>İcra zamanı müəyyən olunur</li>
        <li>Upcasting + Override</li>
      </ul>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Runtime Polymorphism — Upcasting</h2>
  <pre><code class='language-java'>public abstract class Shape {
    abstract double area();
    void display() { System.out.printf("Sahə: %.2f%n", area()); }
}

public class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    @Override public double area() { return Math.PI * r * r; }
}

public class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    @Override public double area() { return w * h; }
}

public class Triangle extends Shape {
    double base, height;
    Triangle(double b, double h) { base = b; height = h; }
    @Override public double area() { return 0.5 * base * height; }
}

// Polymorphism — Shape tipli array, fərqli alt siniflər
Shape[] shapes = {
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 8)
};

// Eyni kod, fərqli davranış — bu polimorfizmin gücüdür!
for (Shape s : shapes) {
    s.display();  // hər biri öz area()-sını çağırır
}
// Sahə: 78.54
// Sahə: 24.00
// Sahə: 12.00</code></pre>
  <div class='note note-info'>
    <span class='note-icon'>💡</span>
    <div class='note-body'><strong>Dynamic dispatch:</strong> <code>s.display()</code> çağrılanda Java <em>icra zamanı</em> həmin obyektin əsl tipinə baxır və onu çağırır — compile zamanı deyil!</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Upcasting &amp; Downcasting</h2>
  <pre><code class='language-java'>// Upcasting — alt sinfi parent tipinə mənimsətmək (avtomatik, təhlükəsiz)
Animal animal = new Dog("Rex", 3, "German Shepherd");  // Dog → Animal
animal.eat();    // ✅ Animal metodları işləyir

// animal.bark(); // ❌ Compile xətası! Animal tipindən bark() görünmür

// Downcasting — parent tipini alt sinifə çevirmək (manual, riskli!)
Dog dog = (Dog) animal;  // Animal → Dog
dog.bark();  // ✅ İndi Dog metodları əlçatandır

// Yanlış downcasting — ClassCastException!
Animal cat = new Cat("Mimi", 2);
// Dog wrongDog = (Dog) cat;  // Runtime: ClassCastException!

// Təhlükəsiz downcasting — instanceof ilə yoxla
if (animal instanceof Dog d) {          // Java 16+ pattern matching
    d.bark();
    System.out.println("Cins: " + d.breed);
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Polimorfizmin Real Faydası</h2>
  <pre><code class='language-java'>// Yeni Shape növü əlavə edilsə, aşağıdakı kod dəyişmir!
public double totalArea(Shape[] shapes) {
    double total = 0;
    for (Shape s : shapes) total += s.area();
    return total;
}

// Ödəniş sistemi nümunəsi
public interface Payment {
    void process(double amount);
    String getType();
}

public class CreditCard implements Payment {
    @Override public void process(double amount) {
        System.out.printf("Kredit kartı: %.2f AZN debitləndi%n", amount);
    }
    @Override public String getType() { return "CREDIT_CARD"; }
}

public class BankTransfer implements Payment {
    @Override public void process(double amount) {
        System.out.printf("Bank köçürməsi: %.2f AZN göndərildi%n", amount);
    }
    @Override public String getType() { return "BANK_TRANSFER"; }
}

// Eyni metod istənilən ödəniş növü ilə işləyir
void checkout(Payment payment, double total) {
    System.out.println("Ödəniş növü: " + payment.getType());
    payment.process(total);
}

checkout(new CreditCard(), 250.0);
checkout(new BankTransfer(), 1500.0);</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>// Notification sistemi
public abstract class Notification {
    protected String message;
    public Notification(String message) { this.message = message; }
    public abstract void send(String recipient);
    public void log() {
        System.out.println("[LOG] " + getClass().getSimpleName() + " → " + message);
    }
}

public class EmailNotification extends Notification {
    public EmailNotification(String message) { super(message); }
    @Override public void send(String to) {
        System.out.println("Email → " + to + ": " + message);
    }
}

public class SMSNotification extends Notification {
    public SMSNotification(String message) { super(message); }
    @Override public void send(String to) {
        System.out.println("SMS → " + to + ": " + message);
    }
}

public class PushNotification extends Notification {
    public PushNotification(String message) { super(message); }
    @Override public void send(String to) {
        System.out.println("Push → " + to + ": " + message);
    }
}

// İstifadə
List&lt;Notification&gt; notifications = List.of(
    new EmailNotification("Hesabınız aktivləşdi"),
    new SMSNotification("Doğrulama kodu: 1234"),
    new PushNotification("Yeni mesajınız var!")
);

for (Notification n : notifications) {
    n.send("user@example.com");
    n.log();
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Compile-time polymorphism: Method Overloading (eyni ad, fərqli parametr)</li>
    <li>Runtime polymorphism: Method Overriding + Upcasting — dinamik dispatch</li>
    <li>Upcasting avtomatik (təhlükəsiz), Downcasting manual (ClassCastException riski)</li>
    <li>Downcasting öncə <code>instanceof</code> ilə yoxla; Java 16+ pattern matching istifadə et</li>
    <li>Polimorfizm yeni sinif əlavəsini mövcud kodu dəyişdirmədən mümkün edir (Open/Closed Principle)</li>
  </ul>
</div>
`,

  "oop-6": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Abstract Class nədir?</h2>
  <p class='lesson-text'><code>abstract</code> class birbaşa instantiate edilə bilməz — yalnız miras alına bilər. Həm konkret (gövdəli) həm abstract (gövdəsiz) metodlar ola bilər:</p>
  <pre><code class='language-java'>public abstract class Animal {
    protected String name;
    protected int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age  = age;
    }

    // Abstract method — gövdə yoxdur, alt sinif MÜTLƏQ override etməlidir
    public abstract String sound();
    public abstract String type();

    // Concrete method — gövdəsi var, miras alınır
    public void sleep() {
        System.out.println(name + " yatır... 💤");
    }

    public void introduce() {
        // Template Method — alt siniflərin override edəcəyi metodu çağırır
        System.out.println("Mən bir " + type() + "-yam. Adım " + name + ". Səsim: " + sound());
    }
}

// new Animal("Rex", 3) — ❌ XƏTA! Abstract class instantiate edilə bilməz

public class Dog extends Animal {
    public Dog(String name, int age) { super(name, age); }

    @Override public String sound() { return "Hav hav!"; }
    @Override public String type()  { return "köpək"; }
}

public class Cat extends Animal {
    public Cat(String name, int age) { super(name, age); }

    @Override public String sound() { return "Miyav!"; }
    @Override public String type()  { return "pişik"; }
}

Dog d = new Dog("Rex", 3);
Cat c = new Cat("Mimi", 2);
d.introduce();  // Mən bir köpək-yam. Adım Rex. Səsim: Hav hav!
c.introduce();  // Mən bir pişik-yam. Adım Mimi. Səsim: Miyav!</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Template Method Pattern</h2>
  <p class='lesson-text'>Abstract class-ın ən güclü istifadə qaydası: alqoritmin skeletini abstract class-da tərif et, konkret addımları alt siniflərdə implement et:</p>
  <pre><code class='language-java'>public abstract class DataExporter {
    // Template method — alqoritmin sırası burada müəyyən edilir
    public final void export(String data) {
        String validated = validate(data);
        String formatted = format(validated);
        save(formatted);
        notify();
    }

    protected abstract String validate(String data);  // alt sinif implement edir
    protected abstract String format(String data);    // alt sinif implement edir

    protected void save(String data) {
        System.out.println("Fayla yazılır: " + data);
    }

    protected void notify() {
        System.out.println("Export tamamlandı!");
    }
}

public class CsvExporter extends DataExporter {
    @Override protected String validate(String data) {
        return data.trim().isEmpty() ? "EMPTY" : data;
    }
    @Override protected String format(String data) {
        return "CSV: " + data.replace(" ", ",");
    }
}

public class JsonExporter extends DataExporter {
    @Override protected String validate(String data) {
        return data == null ? "{}" : data;
    }
    @Override protected String format(String data) {
        return "{\"data\": \"" + data + "\"}";
    }
}

new CsvExporter().export("Anar Günel Tural");
// Fayla yazılır: CSV: Anar,Günel,Tural
// Export tamamlandı!</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Abstract Class vs Interface</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Abstract Class istifadə et</div>
      <ul>
        <li>Ortaq state (sahə) lazımdırsa</li>
        <li>Constructor lazımdırsa</li>
        <li>"Is-a" əlaqəsi — Dog IS AN Animal</li>
        <li>Konkret metodlar paylaşmaq üçün</li>
        <li>Template Method pattern</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>Interface istifadə et</div>
      <ul>
        <li>Sözləşmə (contract) müəyyən etmək</li>
        <li>Multiple implementation</li>
        <li>"Can-do" əlaqəsi — Bird CAN FLY</li>
        <li>Loose coupling üçün</li>
        <li>Functional interface üçün</li>
      </ul>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>// Report generator sistemi
public abstract class ReportGenerator {
    private String title;
    public ReportGenerator(String title) { this.title = title; }

    // Template method
    public final String generate(List&lt;String&gt; data) {
        StringBuilder sb = new StringBuilder();
        sb.append(header(title)).append("\n");
        for (String item : data) sb.append(formatRow(item)).append("\n");
        sb.append(footer()).append("\n");
        return sb.toString();
    }

    protected abstract String header(String title);
    protected abstract String formatRow(String row);
    protected abstract String footer();
}

public class HtmlReport extends ReportGenerator {
    public HtmlReport(String title) { super(title); }
    @Override protected String header(String t)  { return "&lt;h1&gt;" + t + "&lt;/h1&gt;&lt;ul&gt;"; }
    @Override protected String formatRow(String r){ return "  &lt;li&gt;" + r + "&lt;/li&gt;"; }
    @Override protected String footer()           { return "&lt;/ul&gt;"; }
}

public class TextReport extends ReportGenerator {
    public TextReport(String title) { super(title); }
    @Override protected String header(String t)   { return "=== " + t + " ==="; }
    @Override protected String formatRow(String r){ return "• " + r; }
    @Override protected String footer()           { return "=".repeat(20); }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Abstract class <code>new</code> ilə yaradıla bilməz — yalnız miras alına bilər</li>
    <li>Abstract metodun gövdəsi yoxdur; alt sinif mütləq override etməlidir</li>
    <li>Template Method pattern: alqoritm skeletini abstract class-da müəyyən et</li>
    <li>State (sahə) + constructor lazımdırsa abstract class, yalnız sözləşmə lazımdırsa interface seç</li>
    <li><code>final</code> template metodu alt siniflər tərəfindən dəyişdirilməsini önləyir</li>
  </ul>
</div>
`,

  "oop-7": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Interface nədir?</h2>
  <p class='lesson-text'>Interface — metodların imzalarını (sözləşməsini) tərif edən, state saxlamayan bir kontraktdır. Class-lar <code>implements</code> ilə birdən çox interface-i həyata keçirə bilər:</p>
  <pre><code class='language-java'>public interface Flyable {
    // Bütün metodlar public abstract (açıq yazılmır)
    void fly();
    int getMaxAltitude();
}

public interface Swimmable {
    void swim();
    double getSpeed();
}

// Multiple interface implementation
public class Duck implements Flyable, Swimmable {
    private String name;
    public Duck(String name) { this.name = name; }

    @Override public void fly() {
        System.out.println(name + " uçur!");
    }
    @Override public int getMaxAltitude() { return 200; }

    @Override public void swim() {
        System.out.println(name + " üzür!");
    }
    @Override public double getSpeed() { return 3.5; }
}

Duck d = new Duck("Üzgün");
d.fly();   d.swim();

// Interface tipi kimi istifadə — polimorfizm!
Flyable f = new Duck("Uçar");
f.fly();
// f.swim() — ❌ Flyable-da swim() yoxdur</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>default &amp; static metodlar (Java 8+)</h2>
  <pre><code class='language-java'>public interface Logger {
    // Abstract method — implement edilməlidir
    void log(String message);

    // default method — override edilə bilər, amma məcburi deyil
    default void logInfo(String message) {
        log("[INFO] " + message);
    }

    default void logError(String message) {
        log("[ERROR] " + message);
    }

    // static method — interface adı ilə çağrılır
    static Logger console() {
        return message -> System.out.println(message);  // lambda
    }
}

public class FileLogger implements Logger {
    private String filename;
    public FileLogger(String filename) { this.filename = filename; }

    @Override public void log(String message) {
        System.out.println("[" + filename + "] " + message);
    }

    // logInfo, logError — default versiyalar işləyir, override etmədik
}

Logger fileLog = new FileLogger("app.log");
fileLog.logInfo("Server başladı");   // [app.log] [INFO] Server başladı
fileLog.logError("Bağlantı kəsildi"); // [app.log] [ERROR] Bağlantı kəsildi

Logger console = Logger.console();   // static metod
console.log("Konsol mesajı");</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Functional Interface &amp; Lambda (Giriş)</h2>
  <p class='lesson-text'>Yalnız bir abstract metodu olan interface — <strong>functional interface</strong>-dir. Lambda expression ilə qısaca implement edilə bilər:</p>
  <pre><code class='language-java'>@FunctionalInterface
public interface Validator&lt;T&gt; {
    boolean validate(T value);
    // Yalnız 1 abstract method — functional interface!
}

// Ənənəvi istifadə — anonim class
Validator&lt;String&gt; notEmpty = new Validator&lt;String&gt;() {
    @Override public boolean validate(String s) {
        return s != null &amp;&amp; !s.isBlank();
    }
};

// Lambda ilə — çox daha qısa!
Validator&lt;String&gt; notEmpty2 = s -> s != null &amp;&amp; !s.isBlank();
Validator&lt;Integer&gt; positive = n -> n > 0;
Validator&lt;String&gt; emailLike = s -> s.contains("@") &amp;&amp; s.contains(".");

System.out.println(notEmpty2.validate("Java"));     // true
System.out.println(positive.validate(-5));           // false
System.out.println(emailLike.validate("a@b.com"));  // true

// Java-nın daxili functional interface-ləri (java.util.function)
Predicate&lt;Integer&gt; isEven   = n -> n % 2 == 0;
Function&lt;String, Integer&gt; len = String::length;
Consumer&lt;String&gt; printer    = System.out::println;
Supplier&lt;Double&gt; random     = Math::random;</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Interface vs Abstract Class (Qərar Cədvəli)</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Interface</div>
      <ul>
        <li>Multiple implementation ✅</li>
        <li>State (sahə) yoxdur ❌</li>
        <li>Constructor yoxdur ❌</li>
        <li>"CAN-DO" münasibəti</li>
        <li>Loose coupling üçün ideal</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Abstract Class</div>
      <ul>
        <li>Yalnız bir-dən extend ✅</li>
        <li>State ola bilər ✅</li>
        <li>Constructor var ✅</li>
        <li>"IS-A" münasibəti</li>
        <li>Ortaq state paylaşmaq üçün</li>
      </ul>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>// E-commerce ödəniş sistemi
@FunctionalInterface
public interface PaymentProcessor {
    boolean process(double amount);
}

public interface Refundable {
    boolean refund(double amount);
    default String refundPolicy() { return "30 gün ərzində tam geri ödəmə"; }
}

public class PayPal implements PaymentProcessor, Refundable {
    @Override public boolean process(double amount) {
        System.out.printf("PayPal: %.2f USD ödənildi%n", amount);
        return true;
    }
    @Override public boolean refund(double amount) {
        System.out.printf("PayPal: %.2f USD geri qaytarıldı%n", amount);
        return true;
    }
}

// Lambda ilə ödəniş
PaymentProcessor stripe = amount -> {
    System.out.printf("Stripe: %.2f USD%n", amount);
    return amount &lt; 10000;
};

stripe.process(250.0);

PayPal pp = new PayPal();
pp.process(150.0);
pp.refund(50.0);
System.out.println(pp.refundPolicy());</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Interface — sözləşmə; class <code>implements</code> ilə bir neçə interface-i implement edə bilər</li>
    <li><code>default</code> metod — override opsional; <code>static</code> metod — interface adı ilə çağrılır</li>
    <li>Yalnız bir abstract metodu olan interface — functional interface (<code>@FunctionalInterface</code>)</li>
    <li>Functional interface lambda expression ilə implement edilə bilər</li>
    <li>Java-nın daxili functional interface-ləri: <code>Predicate</code>, <code>Function</code>, <code>Consumer</code>, <code>Supplier</code></li>
  </ul>
</div>
`,

  "oop-8": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>static nədir?</h2>
  <p class='lesson-text'><code>static</code> — class-a aiddir, obyektə yox. Bütün nümunələr eyni static sahəni paylaşır. Obyekt yaratmadan istifadə edilə bilər:</p>
  <pre><code class='language-java'>public class Counter {
    // static field — bütün Counter obyektləri bu dəyəri paylaşır
    private static int totalCount = 0;

    // instance field — hər obyektin özünə aiddir
    private int id;
    private String name;

    public Counter(String name) {
        totalCount++;          // hər yeni obyektdə artır
        this.id   = totalCount;
        this.name = name;
    }

    // static method — yalnız static sahələrə müraciət edə bilər
    public static int getTotalCount() {
        return totalCount;
        // return name; // ❌ XƏTA! Instance field-ə static metoddan müraciət olmur
    }

    @Override public String toString() {
        return "#" + id + " " + name + " (cəm: " + totalCount + ")";
    }
}

Counter c1 = new Counter("Alpha");
Counter c2 = new Counter("Beta");
Counter c3 = new Counter("Gamma");

System.out.println(c1);  // #1 Alpha (cəm: 3)
System.out.println(Counter.getTotalCount());  // 3  — class adı ilə çağrılır</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>static blocks</h2>
  <p class='lesson-text'>Static initializer block — class ilk dəfə yükləndikdə (classloader tərəfindən) bir dəfə icra olunur. Mürəkkəb static sahə inisializasiyaları üçün:</p>
  <pre><code class='language-java'>public class Config {
    public static final Map&lt;String, String&gt; DEFAULTS;
    public static final int MAX_CONNECTIONS;

    // static block — class yükləndikdə bir dəfə çalışır
    static {
        DEFAULTS = new HashMap&lt;&gt;();
        DEFAULTS.put("host", "localhost");
        DEFAULTS.put("port", "8080");
        DEFAULTS.put("timeout", "30");

        MAX_CONNECTIONS = Integer.parseInt(
            System.getProperty("max.conn", "100")
        );
        System.out.println("Config yükləndi!");
    }
}

System.out.println(Config.DEFAULTS.get("host")); // localhost
System.out.println(Config.MAX_CONNECTIONS);       // 100</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Singleton Pattern</h2>
  <p class='lesson-text'>Singleton — bir class-dan yalnız bir nümunə yarandığını təmin edən dizayn nümunəsidir. Static-in klassik tətbiqi:</p>
  <pre><code class='language-java'>public class DatabaseConnection {
    // 1. Tək nümunəni static saxla
    private static DatabaseConnection instance;

    private String url;
    private boolean connected;

    // 2. Constructor private — xaricdən new edilə bilməz
    private DatabaseConnection() {
        this.url       = "jdbc:postgresql://localhost:5432/mydb";
        this.connected = false;
    }

    // 3. Nümunəyə yalnız bu metod vasitəsilə çatmaq olar
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }

    public void connect() {
        connected = true;
        System.out.println("Qoşuldu: " + url);
    }

    public boolean isConnected() { return connected; }
}

// İstifadə
DatabaseConnection db1 = DatabaseConnection.getInstance();
DatabaseConnection db2 = DatabaseConnection.getInstance();
System.out.println(db1 == db2);  // true — eyni obyekt!

db1.connect();
System.out.println(db2.isConnected()); // true — eyni nümunədir</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'>Yuxarıdakı Singleton thread-safe deyil. Multi-thread mühitdə <code>synchronized</code> və ya <code>enum</code>-based Singleton istifadə et.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>static vs instance — Qərar Qaydası</h2>
  <pre><code class='language-java'>public class MathUtils {
    // ✅ static olmalı — heç bir instance state-i lazım deyil
    public static double circleArea(double r) { return Math.PI * r * r; }
    public static int max(int a, int b)       { return a > b ? a : b; }

    // ❌ static olmamalı — instance state-ə bağlıdır
    private double value;
    public double doubled() { return value * 2; }  // this.value lazımdır
}

// Utility class-ları: constructor private et, hamısı static
public final class StringUtils {
    private StringUtils() {}  // instantiation-ı önlə

    public static boolean isPalindrome(String s) {
        String rev = new StringBuilder(s).reverse().toString();
        return s.equalsIgnoreCase(rev);
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>static sahə — bütün nümunələr arasında paylaşılır; instance sahə — hər nümunənin özünə aiddir</li>
    <li>static metod — yalnız static sahələrə müraciət edə bilər, <code>this</code>-i yoxdur</li>
    <li>static block — class yükləndikdə bir dəfə icra edilir (mürəkkəb inisializasiya üçün)</li>
    <li>Singleton pattern: private constructor + static instance + getInstance()</li>
    <li>Utility class: constructor private et, bütün metodlar static olsun</li>
  </ul>
</div>
`,

  "oop-9": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Enum nədir?</h2>
  <p class='lesson-text'>Enum — sabit dəyərlər toplusunu tip-təhlükəsiz şəkildə tərif edir. <code>int</code> sabit istifadəsinə nisbətən daha güclü və oxunaqlıdır:</p>
  <pre><code class='language-java'>// Köhnə üsul — probelmatik
public static final int NORTH = 0;
public static final int SOUTH = 1;
// Bu dəyərləri qarışdırmaq mümkündür!

// Enum ilə — tip-təhlükəsiz
public enum Direction {
    NORTH, SOUTH, EAST, WEST
}

Direction d = Direction.NORTH;
System.out.println(d);           // NORTH
System.out.println(d.name());    // NORTH
System.out.println(d.ordinal()); // 0 (indeks)

// Switch-də istifadə
String result = switch (d) {
    case NORTH -> "Şimala get";
    case SOUTH -> "Cənuba get";
    case EAST  -> "Şərqə get";
    case WEST  -> "Qərbə get";
};
System.out.println(result);

// Bütün dəyərlər
for (Direction dir : Direction.values()) {
    System.out.println(dir);
}

// String-dən Enum-a çevirmə
Direction parsed = Direction.valueOf("EAST");
System.out.println(parsed == Direction.EAST);  // true</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Enum-a Field &amp; Metod əlavə etmək</h2>
  <p class='lesson-text'>Enum-lar sahə, constructor və metodlara sahib ola bilər — bu onu çox güclü edir:</p>
  <pre><code class='language-java'>public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS  (4.869e+24, 6.0518e6),
    EARTH  (5.976e+24, 6.37814e6),
    MARS   (6.421e+23, 3.3972e6);

    private final double mass;    // kg
    private final double radius;  // metres

    // Enum constructor həmişə private-dir (ya da default)
    Planet(double mass, double radius) {
        this.mass   = mass;
        this.radius = radius;
    }

    static final double G = 6.67300E-11;

    double surfaceGravity() {
        return G * mass / (radius * radius);
    }

    double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

double earthWeight = 75.0;
double mass = earthWeight / Planet.EARTH.surfaceGravity();
for (Planet p : Planet.values()) {
    System.out.printf("%-8s: %.2f kq%n", p, p.surfaceWeight(mass));
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Enum-da Abstract Method</h2>
  <pre><code class='language-java'>public enum Operation {
    PLUS("+") {
        @Override public double apply(double x, double y) { return x + y; }
    },
    MINUS("-") {
        @Override public double apply(double x, double y) { return x - y; }
    },
    TIMES("*") {
        @Override public double apply(double x, double y) { return x * y; }
    },
    DIVIDE("/") {
        @Override public double apply(double x, double y) { return x / y; }
    };

    private final String symbol;
    Operation(String symbol) { this.symbol = symbol; }

    public abstract double apply(double x, double y);

    @Override public String toString() { return symbol; }
}

double x = 10, y = 3;
for (Operation op : Operation.values()) {
    System.out.printf("%.1f %s %.1f = %.2f%n", x, op, y, op.apply(x, y));
}
// 10.0 + 3.0 = 13.00
// 10.0 - 3.0 = 7.00  ...vb</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>EnumSet &amp; EnumMap</h2>
  <pre><code class='language-java'>import java.util.EnumSet;
import java.util.EnumMap;

public enum DayOfWeek { MON, TUE, WED, THU, FRI, SAT, SUN }

// EnumSet — enum dəyərləri üçün yüksək performanslı Set
EnumSet&lt;DayOfWeek&gt; workdays = EnumSet.range(DayOfWeek.MON, DayOfWeek.FRI);
EnumSet&lt;DayOfWeek&gt; weekend  = EnumSet.of(DayOfWeek.SAT, DayOfWeek.SUN);

System.out.println(workdays.contains(DayOfWeek.WED));   // true
System.out.println(weekend.contains(DayOfWeek.MON));    // false

// EnumMap — enum açarlı yüksək performanslı Map
EnumMap&lt;DayOfWeek, String&gt; schedule = new EnumMap&lt;&gt;(DayOfWeek.class);
schedule.put(DayOfWeek.MON, "Java dərsi");
schedule.put(DayOfWeek.WED, "Spring dərsi");
schedule.put(DayOfWeek.FRI, "Layihə");

schedule.forEach((day, task) -> System.out.println(day + ": " + task));</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>EnumSet və EnumMap regular HashSet/HashMap-dən daha sürətlidir. Enum açarlarla işlədikdə bunları istifadə et.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Enum tip-təhlükəsiz sabit dəyərlər dəstidir; <code>int</code> sabitlərə üstündür</li>
    <li><code>values()</code> bütün dəyərləri, <code>valueOf()</code> string-dən çevirməni, <code>ordinal()</code> indeksi verir</li>
    <li>Enum-a field, constructor, metod əlavə edilə bilər</li>
    <li>Enum abstract metod dəstəkləyir — hər dəyər öz implementasiyasını verir</li>
    <li><code>EnumSet</code> və <code>EnumMap</code> enum üçün optimallaşdırılmış kolleksiyalardır</li>
  </ul>
</div>
`,

  "oop-10": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Nested Class növləri</h2>
  <p class='lesson-text'>Java-da class daxilində başqa class yaratmaq mümkündür. 4 növü var:</p>
  <div class='feature-list'>
    <div class='feature-item'>
      <span class='feature-icon'>🔵</span>
      <div><strong>Static Nested Class</strong> — outer class-ın static üzvüdür; outer instance lazım deyil</div>
    </div>
    <div class='feature-item'>
      <span class='feature-icon'>🟢</span>
      <div><strong>Inner Class</strong> — outer instance-a bağlıdır; outer-ın private sahələrini görür</div>
    </div>
    <div class='feature-item'>
      <span class='feature-icon'>🟡</span>
      <div><strong>Local Class</strong> — metod daxilindədir; lokal dəyişənlərə (effectively final) müraciət edə bilər</div>
    </div>
    <div class='feature-item'>
      <span class='feature-icon'>🔴</span>
      <div><strong>Anonymous Class</strong> — adsız, bir dəfə istifadəlik; interface/abstract class-ı inline implement edir</div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Static Nested Class</h2>
  <pre><code class='language-java'>public class Outer {
    private static int staticField = 10;
    private int instanceField = 20;

    // Static nested — outer-ın static üzvüdür
    public static class StaticNested {
        public void show() {
            System.out.println("Static field: " + staticField); // ✅
            // System.out.println(instanceField); // ❌ — instance field görünmür
        }
    }
}

// Outer nümunəsi lazım deyil!
Outer.StaticNested sn = new Outer.StaticNested();
sn.show();  // Static field: 10

// Real nümunə — Builder pattern
public class Pizza {
    private final String size;
    private final boolean cheese;
    private final boolean pepperoni;

    private Pizza(Builder b) {
        size = b.size; cheese = b.cheese; pepperoni = b.pepperoni;
    }

    public static class Builder {
        private String size;
        private boolean cheese;
        private boolean pepperoni;

        public Builder size(String size)        { this.size = size; return this; }
        public Builder cheese(boolean v)        { cheese = v; return this; }
        public Builder pepperoni(boolean v)     { pepperoni = v; return this; }
        public Pizza build()                    { return new Pizza(this); }
    }

    @Override public String toString() {
        return "Pizza[" + size + ", cheese=" + cheese + ", pepperoni=" + pepperoni + "]";
    }
}

Pizza p = new Pizza.Builder().size("Large").cheese(true).pepperoni(false).build();
System.out.println(p);  // Pizza[Large, cheese=true, pepperoni=false]</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Inner Class</h2>
  <pre><code class='language-java'>public class LinkedList&lt;T&gt; {
    private Node&lt;T&gt; head;
    private int size;

    // Inner class — LinkedList-in private üzvlərinə müraciət edir
    private class Node&lt;T&gt; {
        T data;
        Node&lt;T&gt; next;
        Node(T data) { this.data = data; }
    }

    public void add(T item) {
        Node&lt;T&gt; newNode = new Node&lt;&gt;(item);
        if (head == null) { head = newNode; }
        else {
            Node&lt;T&gt; curr = head;
            while (curr.next != null) curr = curr.next;
            curr.next = newNode;
        }
        size++;
    }

    public int size() { return size; }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Anonymous Class</h2>
  <pre><code class='language-java'>// Interface-i inline implement etmək
Comparator&lt;String&gt; byLength = new Comparator&lt;String&gt;() {
    @Override
    public int compare(String a, String b) {
        return Integer.compare(a.length(), b.length());
    }
};

// Lambda ilə eyni iş (Java 8+)
Comparator&lt;String&gt; byLength2 = (a, b) -> Integer.compare(a.length(), b.length());

List&lt;String&gt; words = new ArrayList&lt;&gt;(List.of("Java", "Go", "Python", "C"));
words.sort(byLength2);
System.out.println(words);  // [C, Go, Java, Python]

// Runnable ilə thread (anonim class)
Thread t = new Thread(new Runnable() {
    @Override public void run() {
        System.out.println("Anonim Runnable işləyir!");
    }
});
// Lambda ilə daha qısa
Thread t2 = new Thread(() -> System.out.println("Lambda Runnable!"));
t2.start();</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>Java 8+ -dan sonra anonim class-ların əksəriyyəti lambda expression ilə əvəz edildi. Lambda daha qısa, amma anonim class çox metodlu interface üçün hələ də lazımdır.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq — Builder Pattern</h2>
  <pre><code class='language-java'>// HTTP Request builder
public class HttpRequest {
    private final String url;
    private final String method;
    private final Map&lt;String, String&gt; headers;
    private final String body;

    private HttpRequest(Builder b) {
        url = b.url; method = b.method; headers = b.headers; body = b.body;
    }

    @Override public String toString() {
        return method + " " + url + "\nHeaders: " + headers + "\nBody: " + body;
    }

    public static class Builder {
        private String url;
        private String method = "GET";
        private Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
        private String body;

        public Builder(String url) { this.url = url; }
        public Builder method(String m)     { method = m; return this; }
        public Builder header(String k, String v) { headers.put(k, v); return this; }
        public Builder body(String b)       { body = b; return this; }
        public HttpRequest build()          { return new HttpRequest(this); }
    }

    public static void main(String[] args) {
        HttpRequest req = new HttpRequest.Builder("https://api.example.com/users")
            .method("POST")
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer token123")
            .body("{\"name\": \"Anar\"}")
            .build();
        System.out.println(req);
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Static Nested: outer instance lazım yox; Builder pattern üçün ideal</li>
    <li>Inner Class: outer instance-a bağlı; private üzvlərə müraciət edər</li>
    <li>Anonymous Class: interface/abstract class-ı bir dəfəlik implement edir</li>
    <li>Java 8+ sonra anonim class-ların çoxu lambda ilə əvəzləndi</li>
    <li>Builder Pattern: complex obyekt konstruksiyasını oxunaqlı edir</li>
  </ul>
</div>
`,

  /* ─────────────────────────────────────────
     SECTION 04 — Advanced Java
     ───────────────────────────────────────── */

  "aj-1": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Exception Hierarchy</h2>
  <p class='lesson-text'>Java-da bütün xətalar <code>Throwable</code>-dan gəlir. İki əsas qol var:</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Error</div>
      <ul>
        <li>JVM-in özündəki ciddi problem</li>
        <li><code>OutOfMemoryError</code></li>
        <li><code>StackOverflowError</code></li>
        <li>Catch etmə — ümumiyyətlə mənasız</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Exception</div>
      <ul>
        <li><strong>Checked</strong> — compile zamanı məcburi handle</li>
        <li><strong>Unchecked</strong> (RuntimeException) — isteğe bağlı</li>
        <li><code>IOException</code>, <code>SQLException</code> (checked)</li>
        <li><code>NullPointerException</code>, <code>IllegalArgumentException</code> (unchecked)</li>
      </ul>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>try-catch-finally</h2>
  <pre><code class='language-java'>public class ExceptionDemo {
    public static int divide(int a, int b) {
        try {
            return a / b;                    // ArithmeticException riski
        } catch (ArithmeticException e) {
            System.out.println("Xəta: " + e.getMessage()); // "/ by zero"
            return -1;
        } finally {
            System.out.println("finally HƏMİŞƏ icra edilir!");
            // Resurs bağlamaq üçün ideal (köhnə üsul)
        }
    }

    public static void main(String[] args) {
        System.out.println(divide(10, 2));  // 5
        System.out.println(divide(10, 0));  // Xəta: / by zero  → -1
    }
}</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><code>finally</code> bloku həmişə icra edilir — hətta <code>return</code> və ya exception olsa belə. Resurs sızdırmamaq üçün vacibdir.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Multi-catch &amp; Re-throw</h2>
  <pre><code class='language-java'>public static void parseAndDivide(String numStr, int divisor) {
    try {
        int num = Integer.parseInt(numStr);   // NumberFormatException riski
        int result = num / divisor;            // ArithmeticException riski
        System.out.println("Nəticə: " + result);

    } catch (NumberFormatException | ArithmeticException e) {
        // Multi-catch — Java 7+
        System.out.println("Hesablama xətası: " + e.getClass().getSimpleName());

    } catch (Exception e) {
        // Geniş tip — ən sonda olmalı!
        System.out.println("Bilinməyən xəta: " + e.getMessage());
        throw new RuntimeException("Wrap edilmiş xəta", e); // re-throw
    }
}

parseAndDivide("abc", 5);  // NumberFormatException
parseAndDivide("10", 0);   // ArithmeticException
parseAndDivide("10", 2);   // Nəticə: 5</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>try-with-resources (AutoCloseable)</h2>
  <p class='lesson-text'>Resurslar (fayl, DB bağlantısı, network) avtomatik bağlanır — <code>finally</code>-da manual bağlamağa ehtiyac yoxdur:</p>
  <pre><code class='language-java'>// Köhnə üsul — verbose və xəta-prone
BufferedReader br = null;
try {
    br = new BufferedReader(new FileReader("data.txt"));
    System.out.println(br.readLine());
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (br != null) try { br.close(); } catch (IOException e) { }
}

// try-with-resources — Java 7+
try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    System.out.println(br.readLine());
} catch (IOException e) {
    System.out.println("Fayl tapılmadı: " + e.getMessage());
}
// br.close() avtomatik çağrılır!

// Bir neçə resurs — hər biri bağlanır (tərsinə sırada)
try (
    var conn = DriverManager.getConnection(URL, USER, PASS);
    var stmt = conn.prepareStatement("SELECT * FROM users")
) {
    ResultSet rs = stmt.executeQuery();
    while (rs.next()) System.out.println(rs.getString("name"));
} catch (SQLException e) {
    e.printStackTrace();
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Custom Exception</h2>
  <pre><code class='language-java'>// Unchecked custom exception (RuntimeException-dan)
public class InsufficientFundsException extends RuntimeException {
    private final double amount;
    private final double balance;

    public InsufficientFundsException(double amount, double balance) {
        super(String.format("%.2f AZN çıxarmaq istənildi, balans: %.2f AZN", amount, balance));
        this.amount  = amount;
        this.balance = balance;
    }

    public double getAmount()  { return amount; }
    public double getBalance() { return balance; }
}

// İstifadə
public class BankAccount {
    private double balance;

    public BankAccount(double balance) { this.balance = balance; }

    public void withdraw(double amount) {
        if (amount > balance) {
            throw new InsufficientFundsException(amount, balance);
        }
        balance -= amount;
    }
}

BankAccount acc = new BankAccount(100);
try {
    acc.withdraw(200);
} catch (InsufficientFundsException e) {
    System.out.println(e.getMessage());
    System.out.printf("Çatışmayan məbləğ: %.2f AZN%n", e.getAmount() - e.getBalance());
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Checked vs Unchecked — Nə Seçmeli?</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Checked Exception</div>
      <ul>
        <li>Caller-ın handle etməsi gözlənilir</li>
        <li>I/O, network, DB xətaları</li>
        <li><code>IOException</code>, <code>SQLException</code></li>
        <li>throws ilə elan edilməlidir</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Unchecked (Runtime)</div>
      <ul>
        <li>Proqramçı xətası — düzəltmək lazımdır</li>
        <li>Yanlış arqument, null, out-of-bounds</li>
        <li><code>NPE</code>, <code>IllegalArgument</code>, <code>ArrayIndexOOB</code></li>
        <li>Modern Java-da daha çox istifadə edilir</li>
      </ul>
    </div>
  </div>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>Spring Framework əsasən unchecked exception istifadə edir. Müasir Java-da custom exception-lar üçün <code>RuntimeException</code>-dan extend etmək tövsiyə olunur.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Checked: compile məcburi handle; Unchecked: isteğe bağlı, proqramçı xətaları</li>
    <li><code>try-with-resources</code> AutoCloseable resursları avtomatik bağlayır</li>
    <li>Multi-catch: <code>catch (A | B e)</code> — Java 7+</li>
    <li>Custom exception: Unchecked üçün RuntimeException-dan extend et</li>
    <li><code>finally</code> həmişə icra edilir — return və ya exception olsa belə</li>
  </ul>
</div>
`,

  "aj-2": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>ArrayList vs LinkedList</h2>
  <p class='lesson-text'>Hər ikisi <code>List</code> interface-ni implement edir, lakin daxili quruluşları fərqlidir:</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>ArrayList</div>
      <ul>
        <li>Dinamik massiv (array)</li>
        <li>get(i) → O(1) — sürətli random access</li>
        <li>add(ortada) → O(n) — yavaş</li>
        <li>Yaddaşda ardıcıl saxlanır</li>
        <li><strong>Çox hallarda tövsiyə edilir</strong></li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>LinkedList</div>
      <ul>
        <li>İkitərəfli bağlı siyahı</li>
        <li>get(i) → O(n) — yavaş</li>
        <li>add/remove baş/son → O(1) — sürətli</li>
        <li>Hər element ayrı node-dur</li>
        <li>Queue/Deque kimi istifadə üçün</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>import java.util.*;

// ArrayList — ən çox istifadə olunan
List&lt;String&gt; names = new ArrayList&lt;&gt;();
names.add("Anar");
names.add("Günel");
names.add(0, "Tural");    // 0-cı indeksə əlavə et
System.out.println(names); // [Tural, Anar, Günel]

// LinkedList — Queue kimi
Deque&lt;String&gt; queue = new LinkedList&lt;&gt;();
queue.offer("birinci");
queue.offer("ikinci");
System.out.println(queue.poll()); // birinci (FIFO)</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Ən Vacib List Metodları</h2>
  <pre><code class='language-java'>List&lt;Integer&gt; nums = new ArrayList&lt;&gt;(List.of(5, 2, 8, 1, 9, 3));

// Əsas CRUD
nums.add(7);             // sonuna əlavə
nums.add(2, 99);         // indeksə əlavə
nums.remove(0);          // indeksə görə sil
nums.remove(Integer.valueOf(9)); // dəyərə görə sil
nums.set(0, 100);        // dəyişdir
System.out.println(nums.get(0)); // oxu
System.out.println(nums.size()); // ölçü

// Axtarış
System.out.println(nums.contains(8));       // true
System.out.println(nums.indexOf(8));         // 2
System.out.println(nums.lastIndexOf(8));     // 2

// Sublists
List&lt;Integer&gt; sub = nums.subList(1, 4);     // index 1-dən 4-ə (4 daxil deyil)

// Sort
Collections.sort(nums);                      // təbii sıra
nums.sort(Comparator.reverseOrder());        // tərsinə
nums.sort((a, b) -> a - b);                 // lambda comparator

// Bulk ops
nums.addAll(List.of(10, 20, 30));
nums.removeAll(List.of(1, 2, 3));
nums.retainAll(List.of(10, 20));            // yalnız bunları saxla
nums.clear();

// Iterasiya
for (int n : nums) System.out.print(n + " ");
nums.forEach(System.out::println);          // method reference</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Collections Utility Sinfi</h2>
  <pre><code class='language-java'>List&lt;Integer&gt; list = new ArrayList&lt;&gt;(List.of(3, 1, 4, 1, 5, 9, 2, 6));

Collections.sort(list);          // [1, 1, 2, 3, 4, 5, 6, 9]
Collections.reverse(list);       // [9, 6, 5, 4, 3, 2, 1, 1]
Collections.shuffle(list);       // təsadüfi qarışdır
Collections.swap(list, 0, 3);    // 0 və 3-cü indeksləri dəyiş

System.out.println(Collections.min(list));  // ən kiçik
System.out.println(Collections.max(list));  // ən böyük
System.out.println(Collections.frequency(list, 1)); // neçə dəfə?

// Thread-safe wrapper
List&lt;String&gt; syncList = Collections.synchronizedList(new ArrayList&lt;&gt;());

// Dəyişilməz list
List&lt;String&gt; immutable = Collections.unmodifiableList(list);
// immutable.add("x"); → UnsupportedOperationException!

// Java 9+ — daha qısa immutable
List&lt;String&gt; fixed = List.of("a", "b", "c");  // dəyişilməz
List&lt;String&gt; copy  = List.copyOf(list);        // kopyası</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>public class ListTasks {
    public static void main(String[] args) {
        List&lt;Integer&gt; nums = new ArrayList&lt;&gt;(Arrays.asList(5,3,8,1,9,2,7,4,6));

        // 1. Cüt ədədləri yeni listə topla
        List&lt;Integer&gt; evens = new ArrayList&lt;&gt;();
        for (int n : nums) if (n % 2 == 0) evens.add(n);
        System.out.println("Cütlər: " + evens);

        // 2. Sort — natural
        Collections.sort(nums);
        System.out.println("Sorted: " + nums);

        // 3. Binary search (sort edilmiş listdə)
        int idx = Collections.binarySearch(nums, 7);
        System.out.println("7-nin yeri: " + idx);

        // 4. Duplicate-ları sil (LinkedHashSet ilə sıranı qoruyaraq)
        List&lt;Integer&gt; dup = new ArrayList&lt;&gt;(Arrays.asList(1,2,2,3,3,3,4));
        List&lt;Integer&gt; unique = new ArrayList&lt;&gt;(new LinkedHashSet&lt;&gt;(dup));
        System.out.println("Unikal: " + unique); // [1, 2, 3, 4]
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>ArrayList random access üçün O(1), LinkedList baş/son əlavə/silmə üçün O(1)</li>
    <li>Əksər hallarda ArrayList seç — daha yaxşı cache performance</li>
    <li><code>List.of()</code> immutable list yaradır (Java 9+)</li>
    <li><code>Collections.sort()</code>, <code>min()</code>, <code>max()</code>, <code>shuffle()</code>, <code>frequency()</code></li>
    <li>Duplicate silmək üçün: <code>new LinkedHashSet&lt;&gt;(list)</code> — sıranı qoruyur</li>
  </ul>
</div>
`,

  "aj-3": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Set — Unikal Elementlər</h2>
  <p class='lesson-text'>Set dublikat elementlər saxlamır. 3 əsas implementasiya:</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>HashSet</div>
      <ul>
        <li>Sırasız</li>
        <li>add/remove/contains → O(1)</li>
        <li>null dəstəklənir</li>
        <li>Ən sürətli</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>LinkedHashSet</div>
      <ul>
        <li>Əlavə sırasını qoruyur</li>
        <li>O(1) əməliyyatlar</li>
        <li>HashSet + sıra</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>TreeSet</div>
      <ul>
        <li>Artan sırada saxlayır</li>
        <li>add/remove → O(log n)</li>
        <li>null dəstəklənmir</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>// HashSet
Set&lt;String&gt; set = new HashSet&lt;&gt;();
set.add("Java");
set.add("Python");
set.add("Java");    // dublikat — əlavə edilmir
System.out.println(set.size());       // 2
System.out.println(set.contains("Java")); // true

// Set əməliyyatları
Set&lt;Integer&gt; a = new HashSet&lt;&gt;(Set.of(1, 2, 3, 4));
Set&lt;Integer&gt; b = new HashSet&lt;&gt;(Set.of(3, 4, 5, 6));

Set&lt;Integer&gt; union = new HashSet&lt;&gt;(a);
union.addAll(b);        // Birləşmə: {1,2,3,4,5,6}

Set&lt;Integer&gt; intersection = new HashSet&lt;&gt;(a);
intersection.retainAll(b); // Kəsişmə: {3,4}

Set&lt;Integer&gt; diff = new HashSet&lt;&gt;(a);
diff.removeAll(b);      // Fərq a\b: {1,2}

// TreeSet — sıralı
TreeSet&lt;Integer&gt; sorted = new TreeSet&lt;&gt;(Set.of(5,3,8,1,9));
System.out.println(sorted);         // [1, 3, 5, 8, 9]
System.out.println(sorted.first()); // 1
System.out.println(sorted.last());  // 9
System.out.println(sorted.headSet(5)); // [1, 3] (5-dən kiçiklər)
System.out.println(sorted.tailSet(5)); // [5, 8, 9] (5 daxil)</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Queue &amp; Deque</h2>
  <pre><code class='language-java'>// Queue — FIFO (First In First Out)
Queue&lt;String&gt; queue = new LinkedList&lt;&gt;();
queue.offer("birinci");  // əlavə et (null-safe)
queue.offer("ikinci");
queue.offer("üçüncü");

System.out.println(queue.peek());   // "birinci" — baxır, silmir
System.out.println(queue.poll());   // "birinci" — çıxarır
System.out.println(queue.size());   // 2

// PriorityQueue — min-heap (ən kiçik element öndə)
PriorityQueue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;();
pq.offer(5); pq.offer(1); pq.offer(3);
System.out.println(pq.poll());  // 1 (ən kiçik)
System.out.println(pq.poll());  // 3

// Max-heap
PriorityQueue&lt;Integer&gt; maxPQ = new PriorityQueue&lt;&gt;(Comparator.reverseOrder());
maxPQ.offer(5); maxPQ.offer(1); maxPQ.offer(3);
System.out.println(maxPQ.poll());  // 5 (ən böyük)

// Deque (ArrayDeque) — həm Stack, həm Queue
Deque&lt;String&gt; deque = new ArrayDeque&lt;&gt;();
deque.offerFirst("A");  // baş
deque.offerLast("B");   // son
deque.offerFirst("Z");  // [Z, A, B]
System.out.println(deque.pollFirst()); // Z
System.out.println(deque.pollLast());  // B

// Stack kimi istifadə (Stack class-ı köhnədir, ArrayDeque tövsiyə)
deque.push("x");   // = offerFirst
deque.pop();       // = pollFirst</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>public class SetQueueTasks {
    // 1. Sözlərin təkrar sayını tap (Set ilə)
    static Map&lt;String, Integer&gt; wordFreq(String text) {
        Map&lt;String, Integer&gt; freq = new HashMap&lt;&gt;();
        for (String w : text.split("\\s+")) {
            freq.merge(w.toLowerCase(), 1, Integer::sum);
        }
        return freq;
    }

    // 2. Browser geri/irəli — Deque ilə
    static void browserHistory() {
        Deque&lt;String&gt; back = new ArrayDeque&lt;&gt;();
        Deque&lt;String&gt; forward = new ArrayDeque&lt;&gt;();
        String current = "home";

        // Səhifəyə get
        back.push(current); current = "java.com";
        back.push(current); current = "spring.io";

        // Geri
        forward.push(current);
        current = back.pop();
        System.out.println("Geri: " + current);    // java.com

        // İrəli
        back.push(current);
        current = forward.pop();
        System.out.println("İrəli: " + current);   // spring.io
    }

    // 3. Top-K ən böyük element
    static List&lt;Integer&gt; topK(int[] nums, int k) {
        PriorityQueue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;(); // min-heap
        for (int n : nums) {
            pq.offer(n);
            if (pq.size() &gt; k) pq.poll(); // k-dan kiçiyi çıxar
        }
        return new ArrayList&lt;&gt;(pq);
    }

    public static void main(String[] args) {
        System.out.println(topK(new int[]{3,1,4,1,5,9,2,6}, 3)); // [5,6,9]
        browserHistory();
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>HashSet O(1), TreeSet O(log n) amma sıralıdır, LinkedHashSet əlavə sırasını qoruyur</li>
    <li>Set əməliyyatları: <code>addAll</code> (union), <code>retainAll</code> (intersection), <code>removeAll</code> (diff)</li>
    <li>Queue: FIFO; <code>offer/poll/peek</code> — null-safe metodlar</li>
    <li>PriorityQueue: default min-heap; max-heap üçün <code>Comparator.reverseOrder()</code></li>
    <li>ArrayDeque Stack və Queue üçün həm sürətli həm tövsiyə ediləndir</li>
  </ul>
</div>
`,

  "aj-4": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Map — Açar/Dəyər Cütləri</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>HashMap</div>
      <ul>
        <li>Sırasız</li>
        <li>get/put/remove → O(1)</li>
        <li>null key dəstəklənir</li>
        <li>Ən sürətli</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>LinkedHashMap</div>
      <ul>
        <li>Əlavə sırasını qoruyur</li>
        <li>LRU cache üçün ideal</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>TreeMap</div>
      <ul>
        <li>Açara görə sıralı</li>
        <li>get/put → O(log n)</li>
        <li>Range queries üçün</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>Map&lt;String, Integer&gt; scores = new HashMap&lt;&gt;();

// CRUD
scores.put("Anar", 95);
scores.put("Günel", 88);
scores.put("Tural", 72);

System.out.println(scores.get("Anar"));        // 95
System.out.println(scores.get("Leyla"));       // null
System.out.println(scores.containsKey("Günel")); // true
System.out.println(scores.size());              // 3

scores.remove("Tural");
scores.replace("Anar", 98);     // Anar-ın balını dəyişdir</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Map-ın Güclü Metodları (Java 8+)</h2>
  <pre><code class='language-java'>Map&lt;String, Integer&gt; wordCount = new HashMap&lt;&gt;();
String[] words = {"java", "python", "java", "go", "java", "python"};

for (String w : words) {
    // getOrDefault — key yoxdursa default qaytar
    wordCount.put(w, wordCount.getOrDefault(w, 0) + 1);
}

// merge — daha qısa üsul
Map&lt;String, Integer&gt; wc2 = new HashMap&lt;&gt;();
for (String w : words) {
    wc2.merge(w, 1, Integer::sum);  // varsa cəmlə, yoxdursa 1 qoy
}

// compute
wc2.compute("java", (k, v) -> v == null ? 1 : v * 2);

// computeIfAbsent — key yoxdursa yaradır
Map&lt;String, List&lt;String&gt;&gt; groups = new HashMap&lt;&gt;();
groups.computeIfAbsent("backend", k -> new ArrayList&lt;&gt;()).add("Java");
groups.computeIfAbsent("backend", k -> new ArrayList&lt;&gt;()).add("Spring");
// groups = {backend: [Java, Spring]}

// putIfAbsent — key yoxdursa əlavə edir
scores.putIfAbsent("Leyla", 85);  // əlavə edilir
scores.putIfAbsent("Anar", 50);   // Anar artıq var — dəyişmir

System.out.println(wc2); // {java=6, python=2, go=1}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Map Iterasiyası</h2>
  <pre><code class='language-java'>Map&lt;String, Integer&gt; map = new LinkedHashMap&lt;&gt;();
map.put("A", 1); map.put("B", 2); map.put("C", 3);

// 1. entrySet — açar + dəyər birlikdə
for (Map.Entry&lt;String, Integer&gt; entry : map.entrySet()) {
    System.out.println(entry.getKey() + " → " + entry.getValue());
}

// 2. forEach (Java 8+) — ən qısa
map.forEach((key, value) -> System.out.println(key + ": " + value));

// 3. keySet — yalnız açarlar
for (String key : map.keySet()) System.out.println(key);

// 4. values — yalnız dəyərlər
for (int val : map.values()) System.out.println(val);

// Sort by value
map.entrySet().stream()
    .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
    .forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>public class MapTasks {
    // 1. Hərflər tezliyi
    static Map&lt;Character, Integer&gt; charFreq(String s) {
        Map&lt;Character, Integer&gt; freq = new LinkedHashMap&lt;&gt;();
        for (char c : s.toCharArray()) freq.merge(c, 1, Integer::sum);
        return freq;
    }

    // 2. İlk təkrarlanmayan hərf
    static char firstUnique(String s) {
        Map&lt;Character, Integer&gt; freq = charFreq(s);
        for (char c : s.toCharArray()) if (freq.get(c) == 1) return c;
        return '\0';
    }

    // 3. İki listi Map-a çevir (zip)
    static &lt;K, V&gt; Map&lt;K, V&gt; zip(List&lt;K&gt; keys, List&lt;V&gt; values) {
        Map&lt;K, V&gt; result = new LinkedHashMap&lt;&gt;();
        for (int i = 0; i &lt; Math.min(keys.size(), values.size()); i++) {
            result.put(keys.get(i), values.get(i));
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(charFreq("aabbccda"));    // {a=3, b=2, c=2, d=1}
        System.out.println(firstUnique("aabbcde"));  // c

        Map&lt;String,Integer&gt; zipped = zip(
            List.of("bir", "iki", "üç"),
            List.of(1, 2, 3)
        );
        System.out.println(zipped);  // {bir=1, iki=2, üç=3}
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>HashMap O(1) amma sırasız; LinkedHashMap sıralı; TreeMap açara görə sıralı</li>
    <li><code>getOrDefault</code>, <code>merge</code>, <code>computeIfAbsent</code>, <code>putIfAbsent</code> — Java 8+ gücü</li>
    <li><code>merge(key, 1, Integer::sum)</code> — söz saymaq üçün ideal idiom</li>
    <li>İterasiya üçün <code>forEach</code> və ya <code>entrySet()</code></li>
    <li>Thread-safe lazımdırsa <code>ConcurrentHashMap</code> istifadə et</li>
  </ul>
</div>
`,

  "aj-5": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Generics niyə lazımdır?</h2>
  <p class='lesson-text'>Generics compile zamanı tip yoxlanması əlavə edir — runtime ClassCastException-ın qarşısını alır:</p>
  <pre><code class='language-java'>// Generics olmadan — tip-unsafe
List rawList = new ArrayList();
rawList.add("salam");
rawList.add(42);        // fərqli tip əlavə etmək olar!
String s = (String) rawList.get(1); // Runtime ClassCastException!

// Generics ilə — tip-safe
List&lt;String&gt; strList = new ArrayList&lt;&gt;();
strList.add("salam");
// strList.add(42);     // Compile xətası — integer qəbul etmir
String s2 = strList.get(0); // cast lazım deyil</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Generic Class</h2>
  <pre><code class='language-java'>// T — Type parameter (adı istənilən şey ola bilər, amma T, E, K, V konvensiyadır)
public class Pair&lt;A, B&gt; {
    private final A first;
    private final B second;

    public Pair(A first, B second) {
        this.first  = first;
        this.second = second;
    }

    public A getFirst()  { return first; }
    public B getSecond() { return second; }

    @Override public String toString() {
        return "(" + first + ", " + second + ")";
    }
}

// İstifadə
Pair&lt;String, Integer&gt; nameAge = new Pair&lt;&gt;("Anar", 25);
Pair&lt;Double, Double&gt;  point   = new Pair&lt;&gt;(3.0, 4.0);

System.out.println(nameAge.getFirst());   // Anar
System.out.println(nameAge.getSecond());  // 25
System.out.println(point);               // (3.0, 4.0)</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Generic Method &amp; Bounded Type</h2>
  <pre><code class='language-java'>// Generic static metod
public static &lt;T extends Comparable&lt;T&gt;&gt; T max(T a, T b) {
    return a.compareTo(b) &gt;= 0 ? a : b;
}

System.out.println(max(10, 20));          // 20
System.out.println(max("java", "python")); // python (leksik)

// Multiple bound
public static &lt;T extends Comparable&lt;T&gt; &amp; Cloneable&gt; T cloneMax(T a, T b) {
    return a.compareTo(b) &gt;= 0 ? a : b;
}

// Generic Stack sinfi
public class Stack&lt;T&gt; {
    private List&lt;T&gt; elements = new ArrayList&lt;&gt;();

    public void push(T item) { elements.add(item); }

    public T pop() {
        if (isEmpty()) throw new EmptyStackException();
        return elements.remove(elements.size() - 1);
    }

    public T peek() {
        if (isEmpty()) throw new EmptyStackException();
        return elements.get(elements.size() - 1);
    }

    public boolean isEmpty() { return elements.isEmpty(); }
    public int size()        { return elements.size(); }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Wildcards</h2>
  <pre><code class='language-java'>// ? — bilinməyən tip

// Upper bounded wildcard — Number və ya alt sinifləri qəbul edir
public static double sumNumbers(List&lt;? extends Number&gt; list) {
    double sum = 0;
    for (Number n : list) sum += n.doubleValue();
    return sum;
}
sumNumbers(List.of(1, 2, 3));           // Integer-lər
sumNumbers(List.of(1.5, 2.5, 3.5));    // Double-lar

// Lower bounded wildcard — Integer və ya üst sinifləri qəbul edir
public static void addIntegers(List&lt;? super Integer&gt; list) {
    list.add(1); list.add(2); list.add(3);
}
List&lt;Number&gt;  numList = new ArrayList&lt;&gt;();
addIntegers(numList);  // ✅

// PECS qaydası: Producer Extends, Consumer Super
// Listdən oxuyursansa → &lt;? extends T&gt;
// Listə yazırsansa  → &lt;? super T&gt;</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'><strong>PECS:</strong> Producer Extends, Consumer Super — wildcard seçimi üçün əsas qayda. Collections.copy() mənbəyi <code>extends</code>, hədəfi <code>super</code> ilə istifadə edir.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Generics compile zamanı tip yoxlaması — runtime ClassCastException yoxdur</li>
    <li>Diamond operator <code>&lt;&gt;</code> — tip inference, Java 7+</li>
    <li><code>&lt;T extends Number&gt;</code> — bounded type; T yalnız Number və ya alt sinifləri ola bilər</li>
    <li>Wildcard <code>?</code>: <code>extends</code> (oxumaq), <code>super</code> (yazmaq), PECS qaydası</li>
    <li>Type erasure: compile zamanı generic tiplər silinir, runtime-da Object görünür</li>
  </ul>
</div>
`,

  "aj-6": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Lambda Sintaksisi</h2>
  <p class='lesson-text'>Lambda — anonim funksiyalardır. Functional interface-ləri qısa yazmağa imkan verir:</p>
  <pre><code class='language-java'>// Sintaksis: (parametrlər) -> {gövdə}

// Anonim class — verbose
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Köhnə üsul");
    }
};

// Lambda — eyni iş, çox qısa
Runnable r2 = () -> System.out.println("Lambda!");

// Parametr nümunələri
Comparator&lt;String&gt; c1 = (s1, s2) -> s1.compareTo(s2);
// Yalnız bir ifadədirsə {} lazım deyil, return yazılmır

// Çox sətirli lambda
Comparator&lt;String&gt; c2 = (s1, s2) -> {
    int len = Integer.compare(s1.length(), s2.length());
    return len != 0 ? len : s1.compareTo(s2);
};

// List.sort ilə
List&lt;String&gt; names = new ArrayList&lt;&gt;(List.of("Charlie", "Ali", "Bob"));
names.sort((a, b) -> a.length() - b.length());
System.out.println(names);  // [Ali, Bob, Charlie]</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Method References</h2>
  <p class='lesson-text'>Lambda-nın daha da qısaldılmış forması — mövcud metodları istinad edir:</p>
  <pre><code class='language-java'>// 4 növ method reference:

// 1. Static method reference: ClassName::staticMethod
List&lt;String&gt; words = List.of("hello", "world", "java");
words.forEach(System.out::println);           // System.out.println istifadə edir
// Eynidir: words.forEach(w -> System.out.println(w));

// 2. Instance method — müəyyən obyekt: instance::method
String prefix = "Salam: ";
words.stream()
     .map(prefix::concat)                     // prefix.concat(w) çağırır
     .forEach(System.out::println);

// 3. Instance method — ixtiyari obyekt: ClassName::instanceMethod
words.stream()
     .map(String::toUpperCase)               // w -> w.toUpperCase()
     .forEach(System.out::println);

// 4. Constructor reference: ClassName::new
List&lt;Integer&gt; lengths = words.stream()
    .map(String::length)                      // w -> w.length()
    .collect(Collectors.toList());

// Comparator ilə
names.sort(Comparator.comparing(String::length)
                      .thenComparing(Comparator.naturalOrder()));
System.out.println(names);</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Lambda ilə Collection Əməliyyatları</h2>
  <pre><code class='language-java'>List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// removeIf — şərtə uyan elementləri sil
List&lt;Integer&gt; mutable = new ArrayList&lt;&gt;(nums);
mutable.removeIf(n -> n % 2 == 0);   // cüt ədədləri sil
System.out.println(mutable);          // [1, 3, 5, 7, 9]

// replaceAll — hər elementi çevir
mutable.replaceAll(n -> n * n);       // kvadratlara çevir
System.out.println(mutable);          // [1, 9, 25, 49, 81]

// Comparator.comparing zənciri
List&lt;String&gt; words = new ArrayList&lt;&gt;(List.of("banana", "apple", "cherry", "date"));
words.sort(
    Comparator.comparingInt(String::length)   // əvvəl uzunluğa görə
              .thenComparing(Comparator.naturalOrder())  // sonra əlifbaya görə
);
System.out.println(words);  // [date, apple, banana, cherry]</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>public class LambdaTasks {
    public static void main(String[] args) {
        // 1. Custom Comparator — tələbə sıralama
        record Student(String name, double gpa, int age) {}
        List&lt;Student&gt; students = new ArrayList&lt;&gt;(List.of(
            new Student("Anar",  3.8, 22),
            new Student("Günel", 3.9, 21),
            new Student("Tural", 3.8, 23)
        ));

        // GPA-ya görə azalan, bərabərsə ada görə artan
        students.sort(
            Comparator.comparingDouble(Student::gpa).reversed()
                      .thenComparing(Student::name)
        );
        students.forEach(s -> System.out.printf("%s: %.1f%n", s.name(), s.gpa()));

        // 2. Lambda ilə Calculator
        @FunctionalInterface
        interface BinaryOp { int apply(int a, int b); }

        Map&lt;String, BinaryOp&gt; ops = Map.of(
            "+", (a, b) -> a + b,
            "-", (a, b) -> a - b,
            "*", (a, b) -> a * b,
            "/", (a, b) -> b != 0 ? a / b : 0
        );

        ops.forEach((op, fn) ->
            System.out.printf("10 %s 3 = %d%n", op, fn.apply(10, 3))
        );
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Lambda: <code>(params) -&gt; expression</code> — functional interface-i qısa implement edir</li>
    <li>4 method reference növü: static, instance (konkret), instance (ixtiyari), constructor</li>
    <li><code>removeIf</code>, <code>replaceAll</code>, <code>forEach</code> — lambda qəbul edən collection metodları</li>
    <li><code>Comparator.comparing</code> zənciri ilə mürəkkəb sıralama</li>
    <li>Effectively final: lambda daxilindən əlçatan lokal dəyişən dəyişdirilə bilməz</li>
  </ul>
</div>
`,

  "aj-7": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>java.util.function Paketi</h2>
  <p class='lesson-text'>Java 8+ 43 hazır functional interface gətirir. Əsas 4-ü:</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Predicate&lt;T&gt;</div>
      <ul>
        <li><code>boolean test(T t)</code></li>
        <li>Şərt yoxlamaq üçün</li>
        <li><code>filter()</code>-da istifadə</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>Function&lt;T,R&gt;</div>
      <ul>
        <li><code>R apply(T t)</code></li>
        <li>T-ni R-ə çevirmək</li>
        <li><code>map()</code>-da istifadə</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Consumer&lt;T&gt;</div>
      <ul>
        <li><code>void accept(T t)</code></li>
        <li>Nəticə qaytarmır</li>
        <li><code>forEach()</code>-da istifadə</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>import java.util.function.*;

// Predicate — şərt yoxlamaq
Predicate&lt;Integer&gt; isPositive = n -> n > 0;
Predicate&lt;String&gt;  notEmpty   = s -> !s.isBlank();
Predicate&lt;Integer&gt; isEven     = n -> n % 2 == 0;

// Predicate kombinasiyası
Predicate&lt;Integer&gt; positiveEven = isPositive.and(isEven);
Predicate&lt;Integer&gt; positiveOrEven = isPositive.or(isEven);
Predicate&lt;Integer&gt; notPositive = isPositive.negate();

System.out.println(positiveEven.test(4));   // true
System.out.println(positiveEven.test(-4));  // false
System.out.println(positiveEven.test(3));   // false (odd)

// Function — çevirmə
Function&lt;String, Integer&gt; strlen  = String::length;
Function&lt;Integer, String&gt; intToStr = String::valueOf;

// Zəncirləmə
Function&lt;String, String&gt; trimUpper = ((Function&lt;String,String&gt;) String::trim)
                                        .andThen(String::toUpperCase);
System.out.println(trimUpper.apply("  java  "));  // JAVA

// compose: f.compose(g) = f(g(x))
// andThen: f.andThen(g) = g(f(x))</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Consumer &amp; Supplier</h2>
  <pre><code class='language-java'>// Consumer — giriş alır, nəticə vermir (yan effekt üçün)
Consumer&lt;String&gt; print   = System.out::println;
Consumer&lt;String&gt; log     = s -> System.err.println("[LOG] " + s);
Consumer&lt;String&gt; both    = print.andThen(log);  // iki consumer zənciri

both.accept("Salam!");  // "Salam!" + "[LOG] Salam!"

// BiConsumer — iki giriş
BiConsumer&lt;String, Integer&gt; printPair = (name, age) ->
    System.out.println(name + " — " + age + " yaş");
printPair.accept("Anar", 25);

// Supplier — giriş yox, nəticə qaytarır (factory kimi)
Supplier&lt;List&lt;String&gt;&gt; listFactory = ArrayList::new;
List&lt;String&gt; list1 = listFactory.get();
List&lt;String&gt; list2 = listFactory.get();  // hər dəfə yeni list

Supplier&lt;Double&gt; random = Math::random;
System.out.println(random.get());  // 0.0 - 1.0 arasında

// Lazy evaluation
Supplier&lt;String&gt; expensiveOp = () -> {
    // Yalnız .get() çağrıldıqda icra edilir
    return "Bahalı hesablama nəticəsi";
};</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>UnaryOperator, BinaryOperator, BiFunction</h2>
  <pre><code class='language-java'>// UnaryOperator&lt;T&gt; — T alır, T qaytarır (Function&lt;T,T&gt; xüsusi halı)
UnaryOperator&lt;String&gt; toUpper = String::toUpperCase;
UnaryOperator&lt;Integer&gt; square = n -> n * n;

List&lt;String&gt; words = new ArrayList&lt;&gt;(List.of("java", "python", "go"));
words.replaceAll(toUpper);  // hər elementi çevir
System.out.println(words);  // [JAVA, PYTHON, GO]

// BinaryOperator&lt;T&gt; — iki T alır, T qaytarır
BinaryOperator&lt;Integer&gt; add = Integer::sum;
BinaryOperator&lt;String&gt; concat = String::concat;

System.out.println(add.apply(5, 3));      // 8
System.out.println(concat.apply("A", "B")); // AB

// BiFunction&lt;T,U,R&gt; — T və U alır, R qaytarır
BiFunction&lt;String, Integer, String&gt; repeat =
    (s, n) -> s.repeat(n);
System.out.println(repeat.apply("AB", 3));  // ABABAB</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik: Pipeline qurmaq</h2>
  <pre><code class='language-java'>public class FunctionalPipeline {
    // Generic pipeline — bir-birinin ardınca funksiyalar tətbiq et
    static &lt;T&gt; T applyAll(T input, List&lt;UnaryOperator&lt;T&gt;&gt; ops) {
        T result = input;
        for (UnaryOperator&lt;T&gt; op : ops) result = op.apply(result);
        return result;
    }

    public static void main(String[] args) {
        List&lt;UnaryOperator&lt;String&gt;&gt; pipeline = List.of(
            String::trim,
            String::toLowerCase,
            s -> s.replace(" ", "_"),
            s -> s + "_processed"
        );

        System.out.println(applyAll("  Hello World  ", pipeline));
        // hello_world_processed

        // Validasiya pipeline
        Predicate&lt;String&gt; validPassword =
            ((Predicate&lt;String&gt;) s -> s.length() &gt;= 8)
            .and(s -> s.matches(".*[A-Z].*"))
            .and(s -> s.matches(".*[0-9].*"));

        List.of("short", "NoNumbers", "Valid1234")
            .forEach(p -> System.out.println(p + ": " + validPassword.test(p)));
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><code>Predicate</code>: test() → boolean; <code>.and()</code>, <code>.or()</code>, <code>.negate()</code> ilə kombinasiya</li>
    <li><code>Function</code>: apply() → nəticə; <code>.andThen()</code> ilə zəncir</li>
    <li><code>Consumer</code>: accept() → void; <code>forEach</code>-da; <code>.andThen()</code> ilə çox consumer</li>
    <li><code>Supplier</code>: get() → nəticə; lazy evaluation; factory metodu kimi</li>
    <li><code>UnaryOperator</code> = <code>Function&lt;T,T&gt;</code>; <code>BinaryOperator</code> = <code>BiFunction&lt;T,T,T&gt;</code></li>
  </ul>
</div>
`,

  "aj-8": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Stream nədir?</h2>
  <p class='lesson-text'>Stream — data ardıcıllığının elan tərzi (declarative) emal üsulu. Collection-ı dəyişdirmir, yeni nəticə verir. Pipeline: Source → Intermediate ops → Terminal op:</p>
  <pre><code class='language-java'>List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Stream pipeline
int result = nums.stream()           // 1. SOURCE
    .filter(n -> n % 2 == 0)         // 2. INTERMEDIATE — cütlər: [2,4,6,8,10]
    .map(n -> n * n)                  // 2. INTERMEDIATE — kvadrat: [4,16,36,64,100]
    .reduce(0, Integer::sum);         // 3. TERMINAL — cəmla

System.out.println(result);  // 220

// Stream yaratmaq — müxtəlif yollar
Stream&lt;String&gt; s1 = Stream.of("a", "b", "c");
Stream&lt;Integer&gt; s2 = Stream.iterate(0, n -> n + 2).limit(5); // [0,2,4,6,8]
Stream&lt;Double&gt;  s3 = Stream.generate(Math::random).limit(3); // 3 random
IntStream range   = IntStream.range(1, 11);      // 1-10
IntStream closed  = IntStream.rangeClosed(1, 10); // 1-10 (10 daxil)</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Intermediate Operations</h2>
  <pre><code class='language-java'>List&lt;String&gt; words = List.of("java", "python", "go", "rust", "java", "kotlin");

// filter — şərtə uyanları saxla
words.stream()
     .filter(w -> w.length() &gt; 3)
     .forEach(System.out::println);  // java, python, rust, java, kotlin

// map — hər elementi çevir
words.stream()
     .map(String::toUpperCase)
     .map(w -> w + "!")
     .forEach(System.out::println);

// distinct — dublikatları sil
words.stream().distinct().forEach(System.out::println);

// sorted
words.stream().sorted().forEach(System.out::println);  // əlifba
words.stream().sorted(Comparator.comparingInt(String::length).reversed())
     .forEach(System.out::println);

// limit &amp; skip
words.stream().limit(3).forEach(System.out::println);  // ilk 3
words.stream().skip(2).forEach(System.out::println);   // ilk 2-ni atla

// peek — debug üçün, elementi dəyişdirmir
words.stream()
     .peek(w -> System.out.print("before: " + w + " | "))
     .map(String::toUpperCase)
     .peek(w -> System.out.println("after: " + w))
     .limit(2)
     .toList();

// flatMap — iç-içə structları düzəlt
List&lt;List&lt;Integer&gt;&gt; nested = List.of(List.of(1,2), List.of(3,4), List.of(5));
List&lt;Integer&gt; flat = nested.stream()
    .flatMap(List::stream)    // [[1,2],[3,4],[5]] → [1,2,3,4,5]
    .toList();
System.out.println(flat);  // [1, 2, 3, 4, 5]</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Terminal Operations &amp; Collectors</h2>
  <pre><code class='language-java'>List&lt;String&gt; names = List.of("Anar", "Günel", "Tural", "Leyla", "Anar");

// collect — ən çox istifadə olunan terminal op
List&lt;String&gt; sorted = names.stream().sorted().toList(); // Java 16+
Set&lt;String&gt;  unique = names.stream().collect(Collectors.toSet());

// Grouping
Map&lt;Integer, List&lt;String&gt;&gt; byLength = names.stream()
    .collect(Collectors.groupingBy(String::length));
// {4=[Anar, Günel, Tural, Leyla, Anar]}  hmm — length = 4 for all except Günel=5

// Counting
Map&lt;Integer, Long&gt; countByLength = names.stream()
    .collect(Collectors.groupingBy(String::length, Collectors.counting()));

// joining
String joined = names.stream()
    .distinct()
    .collect(Collectors.joining(", ", "[", "]"));
System.out.println(joined);  // [Anar, Günel, Tural, Leyla]

// Statistics
IntSummaryStatistics stats = names.stream()
    .mapToInt(String::length)
    .summaryStatistics();
System.out.println("Max: " + stats.getMax() + ", Avg: " + stats.getAverage());

// reduce
int product = IntStream.rangeClosed(1, 5).reduce(1, (a, b) -> a * b);
System.out.println(product);  // 120 (5!)

// count, anyMatch, allMatch, noneMatch, findFirst
long count = names.stream().filter(n -> n.length() == 4).count();
boolean anyA = names.stream().anyMatch(n -> n.startsWith("A"));
Optional&lt;String&gt; first = names.stream().filter(n -> n.contains("u")).findFirst();</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>record Employee(String name, String dept, double salary) {}

public class StreamTasks {
    public static void main(String[] args) {
        List&lt;Employee&gt; employees = List.of(
            new Employee("Anar",  "Backend",  5000),
            new Employee("Günel", "Frontend", 4500),
            new Employee("Tural", "Backend",  5500),
            new Employee("Leyla", "Frontend", 4800),
            new Employee("Rauf",  "DevOps",   6000)
        );

        // 1. Backend işçilərinin orta maaşı
        double avgBackend = employees.stream()
            .filter(e -> e.dept().equals("Backend"))
            .mapToDouble(Employee::salary)
            .average()
            .orElse(0);
        System.out.printf("Backend orta maaş: %.2f%n", avgBackend);

        // 2. Departamentə görə qruplaşdır
        Map&lt;String, List&lt;Employee&gt;&gt; byDept = employees.stream()
            .collect(Collectors.groupingBy(Employee::dept));
        byDept.forEach((dept, emps) ->
            System.out.println(dept + ": " + emps.stream().map(Employee::name).toList())
        );

        // 3. Ən yüksək maaşlı işçi
        employees.stream()
            .max(Comparator.comparingDouble(Employee::salary))
            .ifPresent(e -> System.out.println("Top: " + e.name() + " — " + e.salary()));

        // 4. Maaş cəmi departamentə görə
        Map&lt;String, Double&gt; totalSalary = employees.stream()
            .collect(Collectors.groupingBy(Employee::dept,
                     Collectors.summingDouble(Employee::salary)));
        System.out.println(totalSalary);
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Stream pipeline: source → intermediate (lazy) → terminal (eager, bir dəfə)</li>
    <li>Intermediate: <code>filter</code>, <code>map</code>, <code>flatMap</code>, <code>sorted</code>, <code>distinct</code>, <code>limit</code>, <code>skip</code></li>
    <li>Terminal: <code>collect</code>, <code>reduce</code>, <code>count</code>, <code>forEach</code>, <code>anyMatch</code>, <code>findFirst</code></li>
    <li><code>Collectors.groupingBy</code>, <code>joining</code>, <code>counting</code>, <code>summingDouble</code></li>
    <li>Stream bir dəfə istifadə edilir — ikinci dəfə terminal çağrısa <code>IllegalStateException</code></li>
  </ul>
</div>
`,

  "aj-9": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>NullPointerException problemi</h2>
  <p class='lesson-text'>Java-da ən çox rast gəlinən runtime xətası NPE-dir. <code>Optional</code> null-ları explicit idarəetmə imkanı verir:</p>
  <pre><code class='language-java'>// Problem: null dəyər zənciri
String city = user.getAddress().getCity().toUpperCase(); // NPE riski!

// Köhnə null yoxlama — verbose
String city = null;
if (user != null &amp;&amp; user.getAddress() != null &amp;&amp; user.getAddress().getCity() != null) {
    city = user.getAddress().getCity().toUpperCase();
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Optional Yaratmaq</h2>
  <pre><code class='language-java'>import java.util.Optional;

// Optional yaratmaq
Optional&lt;String&gt; empty   = Optional.empty();          // boş
Optional&lt;String&gt; present = Optional.of("Java");       // dəyər var (null keçsən NPE!)
Optional&lt;String&gt; nullable = Optional.ofNullable(null); // null keçmək olar → empty

// Yoxlama
System.out.println(present.isPresent());   // true
System.out.println(empty.isEmpty());       // true  (Java 11+)

// get — TƏHLÜKƏLI, isPresent yoxlamadan istifadə etmə
System.out.println(present.get());  // Java
// empty.get() → NoSuchElementException!</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Optional-ın Güclü Metodları</h2>
  <pre><code class='language-java'>Optional&lt;String&gt; opt = Optional.ofNullable(getName()); // null ola bilər

// orElse — null-dırsa default qaytar
String name = opt.orElse("Anonim");

// orElseGet — null-dırsa supplier çağır (lazy)
String name2 = opt.orElseGet(() -> generateDefaultName());

// orElseThrow — null-dırsa exception at
String name3 = opt.orElseThrow(() -> new UserNotFoundException("User not found"));

// map — varsa çevir, yoxdursa empty qaytarır
Optional&lt;Integer&gt; len = opt.map(String::length);

// filter — şərt ödənmirsə empty
Optional&lt;String&gt; long$ = opt.filter(s -> s.length() &gt; 5);

// flatMap — Optional qaytaran funksiya üçün
Optional&lt;String&gt; city = findUser(id)
    .flatMap(User::getAddress)   // Optional&lt;Address&gt; qaytarır
    .flatMap(Address::getCity)   // Optional&lt;String&gt; qaytarır
    .map(String::toUpperCase);

// ifPresent — varsa icra et
opt.ifPresent(n -> System.out.println("Ad: " + n));

// ifPresentOrElse — Java 9+
opt.ifPresentOrElse(
    n -> System.out.println("Tapıldı: " + n),
    () -> System.out.println("Tapılmadı")
);</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Optional Best Practices</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>✅ Düzgün istifadə</div>
      <ul>
        <li>Metod return tipi kimi</li>
        <li><code>orElse</code>, <code>map</code>, <code>flatMap</code> ilə zəncir</li>
        <li>Repository metodlarında: <code>Optional&lt;User&gt; findById()</code></li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>❌ Yanlış istifadə</div>
      <ul>
        <li>Field tipi kimi — <code>private Optional&lt;String&gt; name</code></li>
        <li>Metod parametri kimi</li>
        <li><code>opt.get()</code> yoxlama olmadan</li>
        <li>Collection tipləri üçün — boş list/set qaytar</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>// Service qatında Optional nümunəsi
public Optional&lt;User&gt; findById(Long id) {
    return userRepository.findById(id);
}

// Çağıran tərəf
findById(userId)
    .map(user -> new UserDto(user.getName(), user.getEmail()))
    .orElseThrow(() -> new UserNotFoundException("ID: " + userId));</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Optional null dəyərləri explicit idarə etmək üçündür, null yoxlamadan qaçmaq üçün deyil</li>
    <li><code>Optional.of()</code> null keçmək olmaz; <code>ofNullable()</code> isə olar</li>
    <li><code>orElse</code> həmişə qiymətlənir; <code>orElseGet(supplier)</code> yalnız lazım olduqda — performans</li>
    <li><code>map</code>, <code>flatMap</code>, <code>filter</code> ilə null yoxlama olmadan zəncir qurmaq olar</li>
    <li>Optional-ı field/parameter tipi kimi istifadə etmə, yalnız return type kimi</li>
  </ul>
</div>
`,

  "aj-10": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Java 8+ Date/Time API</h2>
  <p class='lesson-text'>Köhnə <code>Date</code> və <code>Calendar</code> sinifləri mutable və thread-unsafe idi. Java 8 <code>java.time</code> paketi ilə yenidən yazıldı — immutable, thread-safe:</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Sinif</div>
      <ul>
        <li><code>LocalDate</code></li>
        <li><code>LocalTime</code></li>
        <li><code>LocalDateTime</code></li>
        <li><code>ZonedDateTime</code></li>
        <li><code>Instant</code></li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>İstifadə</div>
      <ul>
        <li>Yalnız tarix (2025-05-26)</li>
        <li>Yalnız vaxt (14:30:00)</li>
        <li>Tarix + vaxt</li>
        <li>Saat qurşağı ilə</li>
        <li>Unix timestamp (UTC)</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>import java.time.*;
import java.time.format.*;

// LocalDate
LocalDate today   = LocalDate.now();
LocalDate bday    = LocalDate.of(2000, 5, 15);
LocalDate nextWeek = today.plusDays(7);
LocalDate lastYear = today.minusYears(1);

System.out.println(today);               // 2025-05-26
System.out.println(bday.getDayOfWeek()); // WEDNESDAY
System.out.println(today.isLeapYear());  // false
System.out.println(today.isAfter(bday)); // true

// LocalTime
LocalTime now   = LocalTime.now();
LocalTime lunch = LocalTime.of(12, 30);
System.out.println(now.isAfter(lunch)); // true/false

// LocalDateTime
LocalDateTime dt = LocalDateTime.now();
LocalDateTime meeting = LocalDateTime.of(2025, 6, 1, 10, 0);
System.out.println(meeting); // 2025-06-01T10:00</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Formatting &amp; Parsing</h2>
  <pre><code class='language-java'>LocalDate date = LocalDate.of(2025, 5, 26);

// Format et
DateTimeFormatter fmt1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
DateTimeFormatter fmt2 = DateTimeFormatter.ofPattern("MMMM d, yyyy");
DateTimeFormatter iso  = DateTimeFormatter.ISO_LOCAL_DATE;

System.out.println(date.format(fmt1));  // 26/05/2025
System.out.println(date.format(fmt2));  // May 26, 2025
System.out.println(date.format(iso));   // 2025-05-26

// Parse et
LocalDate parsed = LocalDate.parse("26/05/2025", fmt1);
LocalDateTime ldt = LocalDateTime.parse("2025-05-26T14:30:00");

// ZonedDateTime
ZoneId baku    = ZoneId.of("Asia/Baku");
ZoneId london  = ZoneId.of("Europe/London");
ZonedDateTime bakuTime   = ZonedDateTime.now(baku);
ZonedDateTime londonTime = bakuTime.withZoneSameInstant(london);
System.out.println("Bakı: " + bakuTime);
System.out.println("London: " + londonTime);</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Period, Duration &amp; Instant</h2>
  <pre><code class='language-java'>// Period — tarixlər arası fərq (il, ay, gün)
LocalDate start = LocalDate.of(2000, 1, 15);
LocalDate end   = LocalDate.now();
Period age = Period.between(start, end);
System.out.printf("Yaş: %d il, %d ay, %d gün%n",
    age.getYears(), age.getMonths(), age.getDays());

// Duration — vaxtlar arası fərq (saat, dəqiqə, saniyə)
LocalTime t1 = LocalTime.of(9, 0);
LocalTime t2 = LocalTime.of(17, 30);
Duration workDay = Duration.between(t1, t2);
System.out.println("İş saatı: " + workDay.toHours() + " saat " +
    workDay.toMinutesPart() + " dəq");

// Instant — UTC epoch-dan millisaniyə (log, DB timestamp üçün)
Instant now      = Instant.now();
Instant fiveAgo  = now.minusSeconds(300);
System.out.println(now.toEpochMilli());  // Unix timestamp (ms)

// Performans ölçmək
Instant before = Instant.now();
// ... bahalı əməliyyat ...
Instant after  = Instant.now();
long ms = Duration.between(before, after).toMillis();
System.out.println("Vaxt: " + ms + "ms");</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik Tapşırıq</h2>
  <pre><code class='language-java'>public class DateTimeTasks {
    // 1. Neçə gün qalıb? (geri sayım)
    static long daysUntil(LocalDate target) {
        return LocalDate.now().until(target, ChronoUnit.DAYS);
    }

    // 2. İş günlərini hesabla (həftə sonlarını istisna et)
    static long workDaysBetween(LocalDate from, LocalDate to) {
        return from.datesUntil(to)
            .filter(d -> d.getDayOfWeek() != DayOfWeek.SATURDAY
                      &amp;&amp; d.getDayOfWeek() != DayOfWeek.SUNDAY)
            .count();
    }

    // 3. Ay statistikası
    static void monthStats(int year, int month) {
        YearMonth ym = YearMonth.of(year, month);
        System.out.println(ym.getMonth() + " " + year);
        System.out.println("Gün sayı: " + ym.lengthOfMonth());
        System.out.println("İlk gün: " + ym.atDay(1).getDayOfWeek());
    }

    public static void main(String[] args) {
        System.out.println("Yeni ilə qədər: " + daysUntil(LocalDate.of(2026, 1, 1)) + " gün");
        System.out.println("İş günləri: " + workDaysBetween(
            LocalDate.of(2025, 5, 1), LocalDate.of(2025, 5, 31)));
        monthStats(2025, 5);
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><code>LocalDate/Time/DateTime</code> immutable, thread-safe; köhnə Date/Calendar-dan üstündür</li>
    <li><code>DateTimeFormatter.ofPattern()</code> ilə format/parse; ISO formatlar hazırdır</li>
    <li><code>Period</code> günlük fərq, <code>Duration</code> saniyəlik fərq, <code>Instant</code> UTC timestamp</li>
    <li><code>ZoneId</code> + <code>ZonedDateTime</code> multi-timezone tətbiqləri üçün</li>
    <li>Spring JPA ilə birlikdə <code>LocalDate</code> field-ləri avtomatik map olunur</li>
  </ul>
</div>
`,

  "aj-11": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>java.io vs java.nio</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>java.io (köhnə)</div>
      <ul>
        <li>Stream-based (byte/char)</li>
        <li>Blocking I/O</li>
        <li>Sadə fayl əməliyyatları</li>
        <li>FileInputStream, BufferedReader</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>java.nio (NIO.2 — tövsiyə)</div>
      <ul>
        <li>Buffer-based, Channel-based</li>
        <li>Non-blocking mümkün</li>
        <li>Path, Files API — çox rahat</li>
        <li>WatchService, FileSystem</li>
      </ul>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>NIO.2 — Path &amp; Files (Tövsiyə)</h2>
  <pre><code class='language-java'>import java.nio.file.*;
import java.io.IOException;

// Path — fayl yolu (OS-ə görə separator avtomatik)
Path path = Path.of("data", "users.txt");     // data/users.txt
Path abs  = path.toAbsolutePath();
Path home = Path.of(System.getProperty("user.home"), "Desktop", "test.txt");

System.out.println(path.getFileName());  // users.txt
System.out.println(path.getParent());    // data
System.out.println(path.toAbsolutePath());

// Files — bütün fayl əməliyyatları
try {
    // Fayl mövcudluğu
    System.out.println(Files.exists(path));
    System.out.println(Files.isDirectory(path));

    // Oxumaq
    String content  = Files.readString(path);             // bütün faylı string kimi
    List&lt;String&gt; lines = Files.readAllLines(path);       // siyahı kimi
    byte[] bytes = Files.readAllBytes(path);

    // Yazmaq
    Files.writeString(path, "Salam dünya!\n");           // yazır (üzərinə)
    Files.writeString(path, "Əlavə sətir\n",
                      StandardOpenOption.APPEND);          // əlavə edir

    Files.write(path, List.of("sətir 1", "sətir 2"));   // siyahıdan

    // Kopyala / Köçür / Sil
    Path dest = Path.of("backup", "users.txt");
    Files.createDirectories(dest.getParent());            // qovluq yarat
    Files.copy(path, dest, StandardCopyOption.REPLACE_EXISTING);
    Files.move(path, dest, StandardCopyOption.REPLACE_EXISTING);
    Files.delete(path);                                   // yoxdursa exception
    Files.deleteIfExists(path);                           // yoxdursa səssiz

} catch (IOException e) {
    e.printStackTrace();
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>BufferedReader / BufferedWriter (böyük fayllar)</h2>
  <pre><code class='language-java'>Path logFile = Path.of("app.log");

// Sətir-sətir oxumaq (böyük fayllar üçün yaxşıdır)
try (BufferedReader br = Files.newBufferedReader(logFile)) {
    String line;
    int lineNum = 0;
    while ((line = br.readLine()) != null) {
        lineNum++;
        if (line.contains("ERROR")) {
            System.out.println("Sətir " + lineNum + ": " + line);
        }
    }
} catch (IOException e) {
    System.out.println("Fayl oxuna bilmədi: " + e.getMessage());
}

// Stream ilə oxumaq (Java 8+ — Files.lines)
try (Stream&lt;String&gt; lines = Files.lines(logFile)) {
    lines.filter(l -> l.contains("ERROR"))
         .limit(10)
         .forEach(System.out::println);
} catch (IOException e) {
    e.printStackTrace();
}

// Yazma
try (BufferedWriter bw = Files.newBufferedWriter(
        Path.of("output.txt"), StandardOpenOption.CREATE, StandardOpenOption.APPEND)) {
    bw.write("Yeni sətir");
    bw.newLine();
    bw.write("Başqa sətir");
} catch (IOException e) {
    e.printStackTrace();
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Qovluq Əməliyyatları</h2>
  <pre><code class='language-java'>Path dir = Path.of("mydir");
Files.createDirectory(dir);           // bir qovluq
Files.createDirectories(Path.of("a/b/c")); // bütün yolu yarat

// Qovluq məzmununu siyahıla
try (Stream&lt;Path&gt; entries = Files.list(dir)) {
    entries.forEach(System.out::println);
}

// Rekursiv axtarış
try (Stream&lt;Path&gt; walk = Files.walk(dir)) {
    walk.filter(p -> p.toString().endsWith(".java"))
        .forEach(System.out::println);
}

// Pattern ilə (glob)
try (DirectoryStream&lt;Path&gt; ds = Files.newDirectoryStream(dir, "*.txt")) {
    for (Path p : ds) System.out.println(p.getFileName());
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>NIO.2 (<code>Path</code> + <code>Files</code>) tövsiyə edilir — java.io-dan daha rahat API</li>
    <li><code>Files.readString()</code> kiçik fayllar; <code>BufferedReader</code>/<code>Files.lines()</code> böyük fayllar</li>
    <li>Fayl əməliyyatları <code>try-with-resources</code> ilə istifadə et — stream/reader bağlanır</li>
    <li><code>Files.walk()</code> rekursiv; <code>Files.list()</code> bir səviyyə</li>
    <li><code>StandardOpenOption.APPEND</code> əlavə, <code>TRUNCATE_EXISTING</code> üzərinə yazmaq üçün</li>
  </ul>
</div>
`,

  "aj-12": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Reflection nədir?</h2>
  <p class='lesson-text'>Reflection — proqramın <em>icra zamanı</em> öz strukturunu (class, metod, sahə) oxuması və dəyişdirməsidir. Spring, Hibernate, JUnit hamısı reflection istifadə edir:</p>
  <pre><code class='language-java'>import java.lang.reflect.*;

public class Person {
    private String name;
    public int age;

    public Person(String name, int age) {
        this.name = name; this.age = age;
    }

    private String greet() { return "Salam, " + name + "!"; }
    public void setName(String name) { this.name = name; }
}

// Class obyekti almaq — 3 üsul
Class&lt;?&gt; c1 = Person.class;            // compile zamanı
Class&lt;?&gt; c2 = new Person("A", 1).getClass(); // runtime
Class&lt;?&gt; c3 = Class.forName("com.example.Person"); // string adla (dinamik)

System.out.println(c1.getName());       // com.example.Person
System.out.println(c1.getSimpleName()); // Person</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Metod və Sahə İntrospeksiyası</h2>
  <pre><code class='language-java'>Class&lt;?&gt; cls = Person.class;

// Metodlar
Method[] methods = cls.getDeclaredMethods();  // bütün metodlar (private daxil)
for (Method m : methods) {
    System.out.printf("%-20s → %s%n", m.getName(), m.getReturnType().getSimpleName());
}

// Sahələr
Field[] fields = cls.getDeclaredFields();
for (Field f : fields) {
    System.out.println(f.getName() + " : " + f.getType().getSimpleName()
                       + " (" + Modifier.toString(f.getModifiers()) + ")");
}

// Konstruktorlar
Constructor&lt;?&gt;[] ctors = cls.getDeclaredConstructors();
for (Constructor&lt;?&gt; ctor : ctors) {
    System.out.println(ctor);
}

// Private sahəyə müraciət (dikkat!)
Person p = new Person("Anar", 25);
Field nameField = cls.getDeclaredField("name");
nameField.setAccessible(true);              // private kilidini aç
String name = (String) nameField.get(p);   // oxu
nameField.set(p, "Günel");                 // dəyiş
System.out.println(nameField.get(p));      // Günel

// Private metod çağırmaq
Method greetMethod = cls.getDeclaredMethod("greet");
greetMethod.setAccessible(true);
String result = (String) greetMethod.invoke(p);
System.out.println(result);  // Salam, Günel!</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Dinamik Obyekt Yaratmaq</h2>
  <pre><code class='language-java'>// Class adını runtime-da bilmədikdə
String className = "com.example.CsvExporter";   // konfiqden gəlir

Class&lt;?&gt; cls = Class.forName(className);
Constructor&lt;?&gt; ctor = cls.getDeclaredConstructor(String.class);
Object instance = ctor.newInstance("output.csv");

// Method çağırmaq
Method exportMethod = cls.getMethod("export", List.class);
exportMethod.invoke(instance, data);

// Generic factory — plugin sistemi
public &lt;T&gt; T createInstance(Class&lt;T&gt; cls) throws Exception {
    return cls.getDeclaredConstructor().newInstance();
}</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><strong>Performans:</strong> Reflection normal method call-dan ~10x yavaşdır. Hot path-də istifadə etmə. Spring startup zamanı bir dəfə istifadə edir, request-per-request deyil.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Annotation Oxumaq</h2>
  <pre><code class='language-java'>@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Benchmark {}

public class Service {
    @Benchmark
    public void expensiveOp() { /* ... */ }

    public void normalOp() { /* ... */ }
}

// Annotation olan metodları tap
Class&lt;?&gt; cls = Service.class;
for (Method m : cls.getDeclaredMethods()) {
    if (m.isAnnotationPresent(Benchmark.class)) {
        long start = System.nanoTime();
        m.invoke(new Service());
        long elapsed = System.nanoTime() - start;
        System.out.printf("%s: %d ns%n", m.getName(), elapsed);
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Reflection: class, metod, sahəni runtime-da yoxlamaq/çağırmaq</li>
    <li><code>getDeclaredXxx()</code> — private daxil hamısı; <code>getXxx()</code> — yalnız public</li>
    <li><code>setAccessible(true)</code> — private kilidini açır (Module sistemi ilə məhdudlaşdırıla bilər)</li>
    <li>Spring IoC, Hibernate ORM, JUnit — hamısı reflection üzərindədir</li>
    <li>Performans overhead-ı var — hot path-dən uzaq tut</li>
  </ul>
</div>
`,

  "aj-13": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Custom Annotation yaratmaq</h2>
  <p class='lesson-text'><code>@interface</code> ilə yeni annotation tərif edilir. Meta-annotationlar davranışı müəyyən edir:</p>
  <pre><code class='language-java'>import java.lang.annotation.*;

// @Retention — annotation nə vaxta qədər qalır?
// SOURCE: kompilyasiyadan sonra silinir (@Override kimi)
// CLASS:  .class faylında qalır, runtime-da yoxdur
// RUNTIME: runtime-da reflection ilə oxuna bilər

// @Target — annotation harada istifadə edilə bilər?
// METHOD, FIELD, TYPE, PARAMETER, CONSTRUCTOR, ...

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
public @interface Auditable {
    String value() default "";        // element (default = istəğe bağlı)
    String action() default "UNKNOWN";
    boolean logArgs() default false;
}

// İstifadə
@Auditable(value = "UserService", action = "CREATE", logArgs = true)
public class UserService {

    @Auditable(action = "READ")
    public User findUser(Long id) { /* ... */ return null; }

    @Auditable(action = "DELETE", logArgs = true)
    public void deleteUser(Long id) { /* ... */ }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Annotation Prosessor (Runtime)</h2>
  <pre><code class='language-java'>// @LogExecutionTime — metodun icra müddətini log edir
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface LogExecutionTime {
    String message() default "";
}

// Reflection ilə annotation prosessor
public class AnnotationProcessor {
    public static void process(Object instance) throws Exception {
        Class&lt;?&gt; cls = instance.getClass();
        for (Method method : cls.getDeclaredMethods()) {
            if (method.isAnnotationPresent(LogExecutionTime.class)) {
                LogExecutionTime ann = method.getAnnotation(LogExecutionTime.class);
                wrapWithTimer(instance, method, ann.message());
            }
        }
    }

    private static void wrapWithTimer(Object obj, Method m, String msg) throws Exception {
        long start = System.nanoTime();
        m.invoke(obj);
        long ms = (System.nanoTime() - start) / 1_000_000;
        System.out.printf("[%s] %s: %dms%n",
            msg.isEmpty() ? m.getName() : msg, m.getName(), ms);
    }
}

// Test
public class ReportService {
    @LogExecutionTime(message = "PDF hesabat")
    public void generatePdf() throws InterruptedException {
        Thread.sleep(150); // simulyasiya
    }

    @LogExecutionTime
    public void sendEmail() throws InterruptedException {
        Thread.sleep(80);
    }
}

AnnotationProcessor.process(new ReportService());
// [PDF hesabat] generatePdf: 152ms
// [sendEmail] sendEmail: 82ms</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Spring AOP ilə Custom Annotation</h2>
  <p class='lesson-text'>Real Spring tətbiqlərdə AOP (Aspect-Oriented Programming) ilə annotation-ları intercept edirlər — reflection-a ehtiyac qalmır:</p>
  <pre><code class='language-java'>// 1. Annotation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface RateLimit {
    int maxRequests() default 100;
    int windowSeconds() default 60;
}

// 2. AOP Aspect
@Aspect
@Component
public class RateLimitAspect {

    @Around("@annotation(rateLimit)")
    public Object handleRateLimit(ProceedingJoinPoint joinPoint,
                                   RateLimit rateLimit) throws Throwable {
        String key = joinPoint.getSignature().toShortString();
        // Rate limiting məntiqi...
        System.out.printf("Rate limit: %d/%ds — %s%n",
            rateLimit.maxRequests(), rateLimit.windowSeconds(), key);
        return joinPoint.proceed(); // orijinal metodu çağır
    }
}

// 3. İstifadə — sadəcə annotation əlavə etmək kifayətdir!
@RestController
public class ApiController {
    @RateLimit(maxRequests = 10, windowSeconds = 1)
    @GetMapping("/search")
    public ResponseEntity&lt;?&gt; search(@RequestParam String q) { ... }
}</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>Spring AOP proqramçıya yalnız business məntiqi yazmağa imkan verir. Rate limiting, logging, transaction management kimi cross-cutting concern-lər annotation + aspect ilə ayrılır.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><code>@interface</code> ilə custom annotation; <code>@Retention</code> və <code>@Target</code> meta-annotation-lar</li>
    <li>RUNTIME retention: reflection ilə oxunur; SOURCE/CLASS: compile toolları üçün</li>
    <li>Annotation elementlərinin default dəyərləri ola bilər</li>
    <li>Runtime annotation prosessorun əsası: <code>isAnnotationPresent()</code> + <code>getAnnotation()</code></li>
    <li>Spring AOP + <code>@Aspect</code>: cross-cutting concern-lər üçün production üsulu</li>
  </ul>
</div>
`,

  /* ─────────────────────────────────────────
     SECTION 05 — Multithreading & Concurrency
     ───────────────────────────────────────── */

  "con-1": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Thread nədir?</h2>
  <p class='lesson-text'>Thread — proqram daxilindəki müstəqil icra axınıdır. JVM başladıqda <em>main thread</em> yaranır. Yeni thread-lər paralel iş üçün istifadə edilir.</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Thread sinfi</div>
      <pre><code class='language-java'>class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread: "
            + Thread.currentThread().getName());
    }
}

// İstifadə
MyThread t = new MyThread();
t.setName("Worker-1");
t.start(); // run() deyil, start()!</code></pre>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>Runnable interface</div>
      <pre><code class='language-java'>// Tövsiyə edilən — kompozisiya > miras
Runnable task = () ->
    System.out.println("Runnable: "
        + Thread.currentThread().getName());

Thread t = new Thread(task, "Worker-2");
t.start();</code></pre>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Thread Lifecycle</h2>
  <pre><code class='language-java'>Thread t = new Thread(() -> {
    try {
        System.out.println("RUNNING");
        Thread.sleep(1000); // TIMED_WAITING vəziyyəti
        System.out.println("Yuxudan oyandı");
    } catch (InterruptedException e) {
        System.out.println("Thread interrupt edildi!");
        Thread.currentThread().interrupt(); // flag-i bərpa et
    }
});

System.out.println("Başlamadan: " + t.getState()); // NEW
t.start();
System.out.println("Başladıqdan: " + t.getState()); // RUNNABLE

t.join(); // main thread t bitənə qədər gözləyir
System.out.println("Bitdikdən: " + t.getState()); // TERMINATED</code></pre>
  <div class='arch-box'>
    <div class='arch-flow'>
      <div class='arch-node'><small>new Thread()</small>NEW</div>
      <div class='arch-arrow'><small>start()</small>→</div>
      <div class='arch-node accent'><small>CPU scheduler</small>RUNNABLE</div>
      <div class='arch-arrow'>↔</div>
      <div class='arch-node'><small>wait / sleep / lock</small>BLOCKED / WAITING</div>
      <div class='arch-arrow'><small>notify / timeout</small>→</div>
      <div class='arch-node accent'><small>yenidən</small>RUNNABLE</div>
      <div class='arch-arrow'><small>run() bitdi</small>→</div>
      <div class='arch-node'><small>final state</small>TERMINATED</div>
    </div>
  </div>
  <div class='note note-info'>
    <span class='note-icon'>ℹ️</span>
    <div class='note-body'><strong>start() vs run():</strong> <code>start()</code> yeni thread açır; <code>run()</code> birbaşa çağırmaq yeni thread yaratmır — main thread-də icra olunur. <code>sleep()</code> lock-u buraxmır, <code>wait()</code> isə buraxır.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Thread Priority, Daemon &amp; Join</h2>
  <pre><code class='language-java'>// Priority (1-10, default=5)
Thread high = new Thread(() -> System.out.println("Yüksək prioritet"));
Thread low  = new Thread(() -> System.out.println("Aşağı prioritet"));
high.setPriority(Thread.MAX_PRIORITY); // 10
low.setPriority(Thread.MIN_PRIORITY);  // 1
// NOT: priority scheduler-ə ipucu verir, qarantiya deyil!

// Daemon thread — JVM ana thread-lər bitdikdə daemon-ları öldürür
Thread daemon = new Thread(() -> {
    while (true) {
        System.out.println("Background service işləyir...");
        try { Thread.sleep(500); } catch (InterruptedException e) { break; }
    }
});
daemon.setDaemon(true); // start()-dan ƏVVƏL!
daemon.start();

// join — bir thread-in bitməsini gözlə
Thread worker = new Thread(() -> {
    try { Thread.sleep(2000); } catch (InterruptedException e) {}
    System.out.println("İş bitdi");
});
worker.start();
worker.join();       // main gözləyir
worker.join(3000);   // maksimum 3 saniyə gözlə

// Thread.yield() — CPU-nu digər thread-lərə ver (ipucu)
Thread.yield();</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik: Paralel Sayma</h2>
  <pre><code class='language-java'>public class ThreadDemo {
    public static void main(String[] args) throws InterruptedException {
        // 5 paralel thread — hər biri 1-5-ə qədər sayır
        Thread[] threads = new Thread[5];

        for (int i = 0; i < 5; i++) {
            final int threadNum = i + 1;
            threads[i] = new Thread(() -> {
                for (int j = 1; j <= 5; j++) {
                    System.out.printf("Thread-%d: %d%n", threadNum, j);
                    try { Thread.sleep(100); } catch (InterruptedException e) {}
                }
            }, "Worker-" + threadNum);
        }

        // Hamısını başlat
        for (Thread t : threads) t.start();

        // Hamısını gözlə
        for (Thread t : threads) t.join();

        System.out.println("Bütün thread-lər tamamlandı!");
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Thread yaratmaq: <code>Thread</code> extend et (tövsiyə deyil) ya da <code>Runnable</code> implement et</li>
    <li><code>start()</code> yeni thread başladır; <code>run()</code> birbaşa çağırmaq thread yaratmır</li>
    <li>Vəziyyətlər: NEW → RUNNABLE → WAITING/BLOCKED → TERMINATED</li>
    <li><code>join()</code> — thread bitənə qədər gözlə; <code>sleep()</code> — gözlə amma lock buraxmır</li>
    <li>Daemon thread: JVM çıxışında avtomatik öldürülür — background task-lar üçün</li>
  </ul>
</div>
`,

  "con-2": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Race Condition</h2>
  <p class='lesson-text'>İki thread eyni anda paylaşılan data-nı oxuyub dəyişdirsə, nəticə gözlənilməz olur:</p>
  <pre><code class='language-java'>public class Counter {
    private int count = 0;

    public void increment() {
        count++; // ATOMIK DEYİL! 3 addım: oxu → artır → yaz
    }

    public int getCount() { return count; }
}

Counter c = new Counter();
Thread t1 = new Thread(() -> { for (int i=0; i<10000; i++) c.increment(); });
Thread t2 = new Thread(() -> { for (int i=0; i<10000; i++) c.increment(); });
t1.start(); t2.start();
t1.join(); t2.join();
System.out.println(c.getCount()); // 20000 olmalı, amma az çıxır!</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>synchronized</h2>
  <pre><code class='language-java'>// 1. synchronized metod
public class SafeCounter {
    private int count = 0;

    public synchronized void increment() {
        count++; // eyni anda yalnız bir thread
    }

    public synchronized int getCount() { return count; }
}

// 2. synchronized blok (daha incə grained — tövsiyə)
public class SafeCounter2 {
    private int count = 0;
    private final Object lock = new Object(); // explicit lock obyekti

    public void increment() {
        synchronized (lock) {
            count++;
        }
        // lock xaricindəki kod paralel işləyir
    }
}

// 3. static synchronized — sinif səviyyəsi lock
public class Singleton {
    private static Singleton instance;

    public static synchronized Singleton getInstance() {
        if (instance == null) instance = new Singleton();
        return instance;
    }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>volatile</h2>
  <p class='lesson-text'><code>volatile</code> — dəyişənin CPU cache-dən deyil, əsas yaddaşdan oxunmasını/yazılmasını təmin edir. Atomik əməliyyatlar üçün kifayət deyil, yalnız visibility üçündür:</p>
  <pre><code class='language-java'>public class FlagDemo {
    // volatile olmasaydı, thread-2 köhnə cached dəyəri görə bilərdi
    private volatile boolean running = true;

    public void stop() { running = false; }

    public void work() {
        Thread worker = new Thread(() -> {
            while (running) { // volatile oxuma — həmişə aktualdır
                // iş...
            }
            System.out.println("Dayandı");
        });
        worker.start();
    }
}

// volatile increment-i HƏLƏ qorumur — synchronized lazımdır!
// volatile yalnız read/write əməliyyatları üçün görünürlük verir</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'><code>volatile</code> sadə flag/state üçündür. <code>count++</code> kimi compound əməliyyatlar üçün <code>synchronized</code> ya da <code>AtomicInteger</code> istifadə et.</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Deadlock</h2>
  <pre><code class='language-java'>// Deadlock — iki thread bir-birinin lock-unu gözləyir
Object lockA = new Object();
Object lockB = new Object();

Thread t1 = new Thread(() -> {
    synchronized (lockA) {
        System.out.println("T1 lockA-da");
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        synchronized (lockB) { // T2 lockB-ni tutub, gözləyir...
            System.out.println("T1 lockB-ni aldı");
        }
    }
});

Thread t2 = new Thread(() -> {
    synchronized (lockB) {
        System.out.println("T2 lockB-də");
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        synchronized (lockA) { // T1 lockA-nı tutub, gözləyir...
            System.out.println("T2 lockA-nı aldı");
        }
    }
});

// Həll: həmişə eyni sırada lock al!
// lockA əvvəl, lockB sonra — hər iki thread üçün
// və ya: tryLock() ilə timeout istifadə et</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Race condition: paylaşılan data-ya sinxronizasiyasız müraciət — gözlənilməz nəticə</li>
    <li><code>synchronized</code> metod/blok — monitor lock ilə mutual exclusion</li>
    <li><code>volatile</code> — görünürlük (visibility), atomiklik deyil</li>
    <li>Deadlock: hər zaman lock-ları eyni sırada al; ya da tryLock ilə timeout</li>
    <li>Livelock: thread-lər işləyir amma irəliləmirlər (həmişə bir-birinə yol verirlər)</li>
  </ul>
</div>
`,

  "con-3": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>ReentrantLock</h2>
  <p class='lesson-text'><code>java.util.concurrent.locks</code> paketi <code>synchronized</code>-dan daha çevik lock-lar verir:</p>
  <pre><code class='language-java'>import java.util.concurrent.locks.*;

public class SafeStack {
    private final ReentrantLock lock = new ReentrantLock();
    private final List&lt;Integer&gt; stack = new ArrayList&lt;&gt;();

    public void push(int val) {
        lock.lock();
        try {
            stack.add(val);
        } finally {
            lock.unlock(); // HƏMİŞƏ finally-də unlock et!
        }
    }

    public Optional&lt;Integer&gt; pop() {
        lock.lock();
        try {
            if (stack.isEmpty()) return Optional.empty();
            return Optional.of(stack.remove(stack.size()-1));
        } finally {
            lock.unlock();
        }
    }

    // tryLock — bloklanmadan cəhd et
    public boolean tryPush(int val) {
        if (lock.tryLock()) {          // anında qaytarır
            try {
                stack.add(val); return true;
            } finally { lock.unlock(); }
        }
        return false; // lock tutulubsa false
    }

    // tryLock timeout ilə
    public boolean tryPushTimeout(int val) throws InterruptedException {
        if (lock.tryLock(500, java.util.concurrent.TimeUnit.MILLISECONDS)) {
            try {
                stack.add(val); return true;
            } finally { lock.unlock(); }
        }
        return false;
    }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>ReadWriteLock</h2>
  <p class='lesson-text'>Oxuma əməliyyatları paralel ola bilər, yalnız yazma müstəsnadır — performansı artırır:</p>
  <pre><code class='language-java'>public class Cache {
    private final Map&lt;String, String&gt; data = new HashMap&lt;&gt;();
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();
    private final Lock readLock  = rwLock.readLock();
    private final Lock writeLock = rwLock.writeLock();

    // Paralel oxuma — çox thread eyni anda oxuya bilər
    public String get(String key) {
        readLock.lock();
        try {
            return data.get(key);
        } finally {
            readLock.unlock();
        }
    }

    // Müstəsna yazma — yalnız bir thread, oxumalar bloklanır
    public void put(String key, String value) {
        writeLock.lock();
        try {
            data.put(key, value);
        } finally {
            writeLock.unlock();
        }
    }
}

// StampedLock (Java 8+) — daha optimallaşdırılmış, optimistic read
StampedLock sl = new StampedLock();
long stamp = sl.tryOptimisticRead(); // lock almadan oxu
String val = data.get(key);
if (!sl.validate(stamp)) {           // başqası yazdısa
    stamp = sl.readLock();           // əsl read lock al
    try { val = data.get(key); } finally { sl.unlockRead(stamp); }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Condition — wait/notify əvəzi</h2>
  <pre><code class='language-java'>// Producer-Consumer — Condition ilə
public class BoundedBuffer&lt;T&gt; {
    private final Queue&lt;T&gt; buffer = new LinkedList&lt;&gt;();
    private final int capacity;
    private final Lock lock = new ReentrantLock();
    private final Condition notFull  = lock.newCondition();
    private final Condition notEmpty = lock.newCondition();

    public BoundedBuffer(int capacity) { this.capacity = capacity; }

    public void put(T item) throws InterruptedException {
        lock.lock();
        try {
            while (buffer.size() == capacity) notFull.await(); // gözlə
            buffer.offer(item);
            notEmpty.signal(); // consumer-i oyat
        } finally { lock.unlock(); }
    }

    public T take() throws InterruptedException {
        lock.lock();
        try {
            while (buffer.isEmpty()) notEmpty.await(); // gözlə
            T item = buffer.poll();
            notFull.signal(); // producer-i oyat
            return item;
        } finally { lock.unlock(); }
    }
}</code></pre>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>synchronized</div>
      <ul>
        <li>Sadə sintaksis</li>
        <li>Yalnız bir wait-set</li>
        <li>tryLock yoxdur</li>
        <li>Daxili JVM dəstəyi</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>ReentrantLock</div>
      <ul>
        <li>tryLock / tryLock(timeout)</li>
        <li>Bir neçə Condition</li>
        <li>Fair lock seçimi</li>
        <li>lock.lockInterruptibly()</li>
      </ul>
    </div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>ReentrantLock: <code>try { lock() } finally { unlock() }</code> — həmişə finally-də burax</li>
    <li><code>tryLock()</code> bloklanmadan cəhd edir — deadlock riskini azaldır</li>
    <li>ReadWriteLock: çox paralel oxuma, müstəsna yazma — oxuma ağır workload-da sürətli</li>
    <li>Condition: bir Lock üçün bir neçə wait-set — producer/consumer pattern-i</li>
    <li>StampedLock: Java 8+ optimistic read — ən yüksək performans</li>
  </ul>
</div>
`,

  "con-4": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>ExecutorService</h2>
  <p class='lesson-text'>Thread-ləri manual idarə etmək əvəzinə <code>ExecutorService</code> thread pool-lar vasitəsilə tapşırıqları idarə edir:</p>
  <pre><code class='language-java'>import java.util.concurrent.*;

// Thread pool növləri
ExecutorService fixed    = Executors.newFixedThreadPool(4);       // sabit 4 thread
ExecutorService cached   = Executors.newCachedThreadPool();       // lazım olanda artır
ExecutorService single   = Executors.newSingleThreadExecutor();   // ardıcıl 1 thread
ExecutorService workStealing = Executors.newWorkStealingPool();   // ForkJoin tabanlı

// Tapşırıq göndər
fixed.submit(() -> System.out.println("Task: " + Thread.currentThread().getName()));
fixed.execute(() -> System.out.println("Execute (nəticə qaytarmır)"));

// Bağlamaq
fixed.shutdown();          // mövcud task-ları bitir, yeni qəbul etmir
fixed.shutdownNow();       // interrupt göndərir, siyahı qaytarır
fixed.awaitTermination(10, TimeUnit.SECONDS); // bitmə gözlə</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Callable &amp; Future</h2>
  <pre><code class='language-java'>ExecutorService executor = Executors.newFixedThreadPool(3);

// Callable — nəticə qaytarır (Runnable-dan fərqli)
Callable&lt;Integer&gt; task = () -> {
    Thread.sleep(1000);
    return 42;
};

// submit — Future qaytarır
Future&lt;Integer&gt; future = executor.submit(task);

System.out.println("Başqa iş görülür...");

// get() — nəticə hazır olana qədər bloklanır
try {
    Integer result = future.get();              // bloklanır
    Integer timed  = future.get(2, TimeUnit.SECONDS); // timeout ilə
    System.out.println("Nəticə: " + result);   // 42
} catch (TimeoutException e) {
    future.cancel(true); // işi dayandır
    System.out.println("Timeout!");
} catch (ExecutionException e) {
    System.out.println("Task xəta verdi: " + e.getCause());
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
}

// invokeAll — çox task, hamısı bitənə qədər gözlə
List&lt;Callable&lt;String&gt;&gt; tasks = List.of(
    () -> "Nəticə 1",
    () -> { Thread.sleep(200); return "Nəticə 2"; },
    () -> "Nəticə 3"
);
List&lt;Future&lt;String&gt;&gt; futures = executor.invokeAll(tasks);
for (Future&lt;String&gt; f : futures) System.out.println(f.get());

// invokeAny — ilk uğurlu nəticəni qaytarır
String first = executor.invokeAny(tasks);
System.out.println("İlk: " + first);

executor.shutdown();</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>ScheduledExecutorService</h2>
  <pre><code class='language-java'>ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);

// Bir dəfə gecikmə ilə icra
scheduler.schedule(
    () -> System.out.println("3 saniyə sonra"),
    3, TimeUnit.SECONDS
);

// Sabit interval ilə təkrar (ilk icra 1s, sonra hər 2s)
ScheduledFuture&lt;?&gt; periodic = scheduler.scheduleAtFixedRate(
    () -> System.out.println("Hər 2 saniyə: " + LocalTime.now()),
    1, 2, TimeUnit.SECONDS
);

// Əvvəlki icradan sonra gecikdirərək
scheduler.scheduleWithFixedDelay(
    () -> System.out.println("Bitdikdən 1s sonra"),
    0, 1, TimeUnit.SECONDS
);

// Dayandır
Thread.sleep(8000);
periodic.cancel(false); // icra olunanı dayandırma, sıradakını dayandır
scheduler.shutdown();</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>ThreadPoolExecutor — Manual Konfiqurasiya</h2>
  <pre><code class='language-java'>// Xüsusi thread pool
ThreadPoolExecutor executor = new ThreadPoolExecutor(
    2,               // corePoolSize — min saxlanılan thread
    10,              // maximumPoolSize — maks thread sayı
    60L,             // keepAliveTime — idle thread nə qədər yaşasın
    TimeUnit.SECONDS,
    new LinkedBlockingQueue&lt;&gt;(100),          // task növbəsi
    new ThreadFactory() {
        int num = 0;
        public Thread newThread(Runnable r) {
            return new Thread(r, "MyPool-" + (++num));
        }
    },
    new ThreadPoolExecutor.CallerRunsPolicy() // dolu olduqda: çağıran icra edir
    // Digər rejection policy-lər:
    // AbortPolicy (default): RejectedExecutionException
    // DiscardPolicy: səssiz rədd edir
    // DiscardOldestPolicy: ən köhnə task-ı çıxarır
);

// Monitoring
System.out.println("Active: " + executor.getActiveCount());
System.out.println("Pool size: " + executor.getPoolSize());
System.out.println("Queue: " + executor.getQueue().size());</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'><strong>Thread pool sizing qaydası:</strong> CPU-bound task-lar üçün <code>N+1</code> (N = CPU core sayı); I/O-bound task-lar üçün <code>N × (1 + wait_time/compute_time)</code>. <code>Runtime.getRuntime().availableProcessors()</code> ilə CPU sayını al.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Manual thread yaratma əvəzinə həmişə ExecutorService istifadə et</li>
    <li><code>Callable</code> nəticə qaytarır; <code>Future.get()</code> bloklanır — timeout istifadə et</li>
    <li><code>shutdown()</code> mövcud işlər bitsin; <code>shutdownNow()</code> interrupt göndərir</li>
    <li>ScheduledExecutorService: <code>scheduleAtFixedRate</code> vs <code>scheduleWithFixedDelay</code></li>
    <li>CPU-bound: N+1 thread; I/O-bound: daha çox thread pool</li>
  </ul>
</div>
`,

  "con-5": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>CompletableFuture</h2>
  <p class='lesson-text'>Java 8+ <code>CompletableFuture</code> — non-blocking asinxron hesablamalar və zəncirlər üçün. <code>Future</code>-dan daha güclüdür:</p>
  <pre><code class='language-java'>import java.util.concurrent.*;

// Sadə asinxron hesablama
CompletableFuture&lt;String&gt; cf = CompletableFuture.supplyAsync(() -> {
    // Arxa fon thread-ində (ForkJoinPool.commonPool)
    simulateDelay(1000);
    return "Nəticə";
});

// Hər hansı thread-də icra et
ExecutorService exec = Executors.newFixedThreadPool(4);
CompletableFuture&lt;String&gt; cf2 = CompletableFuture.supplyAsync(
    () -> fetchFromDB(), exec
);

// Dəyəri al (bloklanır)
String result = cf.get();               // timeout yoxdur
String result2 = cf.get(3, TimeUnit.SECONDS); // timeout ilə
String result3 = cf.join();             // get kimi amma unchecked

// Hazır dəyərlə
CompletableFuture&lt;String&gt; done = CompletableFuture.completedFuture("Hazır");</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>thenApply, thenAccept, thenRun</h2>
  <pre><code class='language-java'>CompletableFuture.supplyAsync(() -> fetchUser(1L))  // User qaytarır
    .thenApply(user -> user.getEmail())              // User → String (çevirir)
    .thenApply(String::toLowerCase)                  // String → String
    .thenAccept(email ->                             // void (son addım)
        System.out.println("Email: " + email))
    .thenRun(() ->                                   // void, nəticəyə baxmır
        System.out.println("Hamısı tamamlandı!"));

// Async versiyalar — ayrı thread-də icra
.thenApplyAsync(fn)          // ForkJoinPool-da
.thenApplyAsync(fn, executor) // xüsusi executor-da

// exceptionally — xəta idarəsi
CompletableFuture.supplyAsync(() -> riskyOperation())
    .exceptionally(ex -> {
        System.out.println("Xəta: " + ex.getMessage());
        return "Default dəyər"; // yerinə qoy
    });

// handle — həm nəticə, həm xəta
.handle((result, ex) -> {
    if (ex != null) return "Xəta: " + ex.getMessage();
    return result.toUpperCase();
});</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>thenCompose &amp; thenCombine</h2>
  <pre><code class='language-java'>// thenCompose — zəncir (flatMap kimi): bir CF-nin nəticəsi digərini başladır
CompletableFuture&lt;Order&gt; orderFuture =
    CompletableFuture.supplyAsync(() -> findUser(userId))     // CF&lt;User&gt;
        .thenCompose(user -> findOrders(user.getId()))         // CF&lt;Order&gt;
        .thenCompose(order -> applyDiscount(order));           // CF&lt;Order&gt;

// thenCombine — iki müstəqil CF-i birləşdir
CompletableFuture&lt;String&gt; nameFuture  = CompletableFuture.supplyAsync(() -> fetchName(id));
CompletableFuture&lt;Integer&gt; ageFuture  = CompletableFuture.supplyAsync(() -> fetchAge(id));

CompletableFuture&lt;String&gt; combined = nameFuture.thenCombine(
    ageFuture,
    (name, age) -> name + " — " + age + " yaş"  // ikisi bitdikdə birləşdir
);
System.out.println(combined.join());

// allOf — hamısı bitənə qədər
CompletableFuture&lt;Void&gt; all = CompletableFuture.allOf(nameFuture, ageFuture);
all.join(); // gözlə
System.out.println(nameFuture.join() + ", " + ageFuture.join());

// anyOf — ilk bitən
CompletableFuture&lt;Object&gt; any = CompletableFuture.anyOf(
    CompletableFuture.supplyAsync(() -> { sleep(1000); return "Yavaş"; }),
    CompletableFuture.supplyAsync(() -> { sleep(200);  return "Sürətli"; })
);
System.out.println(any.join()); // Sürətli</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>🔨 Praktik: Paralel API Sorğuları</h2>
  <pre><code class='language-java'>public class ProductService {
    ExecutorService exec = Executors.newFixedThreadPool(10);

    // Paralel olaraq: qiymət + stok + şərhlər çək
    public ProductInfo getProductInfo(long productId) {
        CompletableFuture&lt;Double&gt; priceFuture =
            CompletableFuture.supplyAsync(() -> fetchPrice(productId), exec);

        CompletableFuture&lt;Integer&gt; stockFuture =
            CompletableFuture.supplyAsync(() -> fetchStock(productId), exec);

        CompletableFuture&lt;List&lt;String&gt;&gt; reviewsFuture =
            CompletableFuture.supplyAsync(() -> fetchReviews(productId), exec);

        // Hamısı bitdikdə birləşdir
        return CompletableFuture.allOf(priceFuture, stockFuture, reviewsFuture)
            .thenApply(v -> new ProductInfo(
                priceFuture.join(),
                stockFuture.join(),
                reviewsFuture.join()
            ))
            .exceptionally(ex -> ProductInfo.empty())
            .join();
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><code>supplyAsync</code> nəticə qaytarır; <code>runAsync</code> void</li>
    <li><code>thenApply</code> çevirir; <code>thenAccept</code> istehlak edir; <code>thenCompose</code> zəncir (flatMap)</li>
    <li><code>thenCombine</code> iki müstəqil CF-i birləşdirir; <code>allOf</code> hamısını gözləyir</li>
    <li><code>exceptionally</code> xəta idarəsi; <code>handle</code> həm nəticə həm xəta</li>
    <li><code>join()</code> = <code>get()</code> amma unchecked — pipeline sonunda istifadə et</li>
  </ul>
</div>
`,

  "con-6": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>ConcurrentHashMap</h2>
  <p class='lesson-text'>Thread-safe Map. <code>Collections.synchronizedMap()</code>-dan fərqli olaraq segment-lər üzərindən paralel yaz mümkündür — daha yüksək performans:</p>
  <pre><code class='language-java'>import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

// ConcurrentHashMap — thread-safe, yüksək performans
ConcurrentHashMap&lt;String, Integer&gt; map = new ConcurrentHashMap&lt;&gt;();

// Paralel thread-lərdən güvənli əlavə
map.put("a", 1);
map.putIfAbsent("b", 2);
map.merge("a", 1, Integer::sum); // thread-safe artırma

// compute — atomik yenilə
map.compute("count", (k, v) -> v == null ? 1 : v + 1);
map.computeIfAbsent("list", k -> new CopyOnWriteArrayList&lt;&gt;()).add("item");

// Paralel əməliyyatlar (Java 8+)
map.forEach(1, (k, v) -> System.out.println(k + "=" + v));
int sum = map.reduceValues(1, Integer::sum);
String found = map.searchValues(1, v -> v &gt; 5 ? "found" : null);</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>CopyOnWriteArrayList &amp; BlockingQueue</h2>
  <pre><code class='language-java'>// CopyOnWriteArrayList — oxuma çoxsa, yazma azdırsa
// Hər yazma əməliyyatında tam kopyasını yaradır
CopyOnWriteArrayList&lt;String&gt; cowList = new CopyOnWriteArrayList&lt;&gt;();
cowList.add("A");
// İterasiya zamanı ConcurrentModificationException yoxdur!
for (String s : cowList) {
    cowList.add("B"); // COW-da bu safe-dir, iteratora yansımır
}

// BlockingQueue — Producer-Consumer üçün ideal
BlockingQueue&lt;String&gt; queue = new LinkedBlockingQueue&lt;&gt;(10); // capacity=10

// Producer
Thread producer = new Thread(() -> {
    try {
        for (int i = 0; i < 20; i++) {
            queue.put("Task-" + i);  // dolu olduqda bloklanır
            System.out.println("Əlavə edildi: Task-" + i);
        }
    } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
});

// Consumer
Thread consumer = new Thread(() -> {
    try {
        while (true) {
            String task = queue.take(); // boş olduqda bloklanır
            System.out.println("İşləndi: " + task);
            Thread.sleep(200);
        }
    } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
});

producer.start(); consumer.start();

// ArrayBlockingQueue — sabit ölçü, daha yaxşı performans
BlockingQueue&lt;Integer&gt; abq = new ArrayBlockingQueue&lt;&gt;(5);
abq.offer(1);          // bloklanmadan cəhd
abq.offer(2, 100, TimeUnit.MILLISECONDS); // timeout ilə
abq.poll(500, TimeUnit.MILLISECONDS);     // timeout ilə götür</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Atomic Dəyişənlər</h2>
  <pre><code class='language-java'>// AtomicInteger — synchronized olmadan thread-safe sayma
AtomicInteger counter = new AtomicInteger(0);

// Atomik əməliyyatlar
int old = counter.getAndIncrement();  // oxu, sonra artır
int new1 = counter.incrementAndGet(); // artır, sonra oxu
counter.addAndGet(5);                 // 5 artır, yenisini qaytarır

// CAS — Compare And Swap (lock-free alqoritm)
boolean updated = counter.compareAndSet(10, 20);
// 10-dursa 20 et; true qaytarır. Deyilsə heç nə etmə; false

// AtomicLong, AtomicBoolean, AtomicReference
AtomicReference&lt;String&gt; ref = new AtomicReference&lt;&gt;("köhnə");
ref.compareAndSet("köhnə", "yeni"); // köhnədirsə yenilə

// LongAdder — yüksək contention-da AtomicLong-dan sürətli
LongAdder adder = new LongAdder();
adder.increment();
adder.add(5);
System.out.println(adder.sum()); // 6</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>CountDownLatch &amp; CyclicBarrier</h2>
  <pre><code class='language-java'>// CountDownLatch — N hadisəni gözlə, sonra davam et
CountDownLatch latch = new CountDownLatch(3); // 3 thread gözlə

Runnable worker = () -> {
    System.out.println(Thread.currentThread().getName() + " tamamlandı");
    latch.countDown(); // sayacı azalt
};

new Thread(worker, "W1").start();
new Thread(worker, "W2").start();
new Thread(worker, "W3").start();

latch.await(); // 3 countDown çağrılana qədər gözlə
System.out.println("Hamısı bitdi — növbəti mərhələ!");

// CyclicBarrier — thread-lər bir-birini gözləyir (yenilənə bilər)
CyclicBarrier barrier = new CyclicBarrier(3,
    () -> System.out.println("=== Mərhələ tamamlandı ==="));

Runnable phase = () -> {
    System.out.println(Thread.currentThread().getName() + " hazır");
    try {
        barrier.await(); // hamısı gələnə qədər gözlə
        System.out.println(Thread.currentThread().getName() + " davam edir");
    } catch (Exception e) {}
};

for (int i = 0; i < 3; i++) new Thread(phase, "T"+i).start();</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>ConcurrentHashMap segment-lər üzrə kilitləyir — yüksək paralel oxuma/yazma</li>
    <li>CopyOnWriteArrayList: hər yazmada kopyalayır — oxuma ağır ssenariləri üçün</li>
    <li>BlockingQueue: producer-consumer pattern üçün ideal — put/take bloklanır</li>
    <li>AtomicXxx: lock-free CAS əməliyyatları — sadə sayğaclar üçün synchronized-dan sürətli</li>
    <li>CountDownLatch: bir dəfəlik; CyclicBarrier: dövri — barrier pattern-i üçün</li>
  </ul>
</div>
`,

  "con-7": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Java Memory Model (JMM)</h2>
  <p class='lesson-text'>CPU-lar performans üçün dəyərləri local cache-lərdə saxlayır. JMM — thread-lərin bir-birinin yazmalarını NƏ ZAMAN görəcəyini müəyyən edir:</p>
  <pre><code class='language-java'>// Visibility problemi
public class VisibilityBug {
    static boolean stop = false;   // volatile deyil!

    public static void main(String[] args) throws InterruptedException {
        Thread worker = new Thread(() -> {
            int i = 0;
            while (!stop) i++; // stop-u CPU cache-dən oxuyur!
            System.out.println("Dayandı: " + i);
        });
        worker.start();
        Thread.sleep(1000);
        stop = true;  // main thread cache-ini yeniləyir
                      // amma worker thread bunu GÖRMƏ BİLƏR!
        System.out.println("stop = true edildi");
    }
}

// Həll: volatile
static volatile boolean stop = false;
// İndi hər oxuma əsas yaddaşdan gəlir</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Happens-Before Münasibəti</h2>
  <p class='lesson-text'>JMM <em>happens-before</em> qaydaları ilə hansı yazmanın hansı oxuma tərəfindən görüləcəyini müəyyən edir:</p>
  <pre><code class='language-java'>// Happens-before qarantiyaları:

// 1. Program sırası: eyni thread-də a → b → a happens-before b
int x = 1;    // A
int y = x;    // B — A happens-before B

// 2. Monitor lock: unlock → lock
synchronized(obj) { x = 42; }  // unlock
// ...
synchronized(obj) { y = x; }   // lock — x=42 görünür

// 3. volatile: volatile yazmadan sonra volatile oxuma
volatile int v = 0;
v = 1;     // Thread-1
// ...
int r = v; // Thread-2 — r = 1 görür

// 4. Thread.start(): start()-dan əvvəl olanlar thread-də görünür
x = 100;
thread.start();
// thread.run()-da x=100 görünür

// 5. Thread.join(): thread-in etdikləri join()-dən sonra görünür
thread.join();
// thread-in bütün yazmaları indi görünür

// 6. static initializer: class yüklənərkən
class Config {
    static final String URL = "jdbc://..."; // təhlükəsiz paylaşım
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Reordering &amp; Memory Barriers</h2>
  <pre><code class='language-java'>// Compiler/CPU əmrləri yenidən sıralaya bilər (optimizasiya)
// Aşağıdaki kod single-thread-də doğru işləyir, amma multi-thread-də...
class LazyInit {
    private static HeavyObject instance;

    // YANLIŞ — double-checked locking, JMM olmadan təhlükəli
    public static HeavyObject getInstance() {
        if (instance == null) {              // yoxlama
            synchronized (LazyInit.class) {
                if (instance == null) {
                    instance = new HeavyObject(); // reordering riski!
                    // 1. yaddaş ayır
                    // 2. init et
                    // 3. reference yaz
                    // CPU 3-ü 2-dən əvvəl edə bilər!
                }
            }
        }
        return instance;
    }

    // DOĞRU — volatile yazma memory barrier yaradır
    private static volatile HeavyObject safeInstance;

    public static HeavyObject getSafeInstance() {
        if (safeInstance == null) {
            synchronized (LazyInit.class) {
                if (safeInstance == null) {
                    safeInstance = new HeavyObject(); // volatile — tam init edilib
                }
            }
        }
        return safeInstance;
    }

    // Ən yaxşı üsul — static holder (JVM class loading qerantiyası)
    private static class Holder {
        static final HeavyObject INSTANCE = new HeavyObject();
    }
    public static HeavyObject getBest() { return Holder.INSTANCE; }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Best Practices</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>✅ Tövsiyə edilir</div>
      <ul>
        <li>Paylaşılan dəyişəni <code>volatile</code> ya <code>synchronized</code> et</li>
        <li>İmmutable obyektlər istifadə et — ThreadLocal</li>
        <li>Concurrent collection-lardan istifadə et</li>
        <li>Lock-ları həmişə try-finally ilə burax</li>
        <li>Lock sırasını sabit saxla (deadlock önü)</li>
        <li>CompletableFuture ilə non-blocking async</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>❌ Qaçın</div>
      <ul>
        <li>synchronized olmadan paylaşılan dəyişəni dəyiş</li>
        <li>Manual thread pool yaratmaq</li>
        <li>Thread.stop() / suspend() — köhnə, təhlükəli</li>
        <li>Nested synchronized bloklar (deadlock riski)</li>
        <li>Lock içində uzun I/O əməliyyatı</li>
        <li>double-checked locking volatile olmadan</li>
      </ul>
    </div>
  </div>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'><strong>Qızıl qayda:</strong> Paylaşılan mutable state-dən qaçın. Mümkün olduqda immutable data, message passing (BlockingQueue), ya da ThreadLocal istifadə et.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>JMM: CPU cache-ləri görünürlük problemlərini yarada bilər — <code>volatile</code>/<code>synchronized</code> lazımdır</li>
    <li>Happens-before: lock, volatile, start(), join() qarantiyaları verir</li>
    <li>Reordering: compiler/CPU performans üçün əmrləri dəyişdirir — memory barrier lazımdır</li>
    <li>Double-checked locking: <code>volatile</code> olmadan qırıq; static holder pattern ən yaxşısı</li>
    <li>Ən yaxşı concurrent kod: mümkün qədər az paylaşılan mutable state</li>
  </ul>
</div>
`,

  /* ─────────────────────────────────────────
     SECTION 06 — JVM Internals & Performance
     ───────────────────────────────────────── */

  "jvm-1": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>JVM Yaddaş Arxitekturası</h2>
  <p class='lesson-text'>JVM yaddaşı bir neçə əsas bölgəyə bölünür. Hər birinin rolu, ölçüsü və GC davranışı fərqlidir:</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Heap Memory</div>
      <ul>
        <li>Bütün obyektlər burada yaşayır</li>
        <li>GC tərəfindən idarə edilir</li>
        <li><strong>Young Gen</strong> (Eden + 2×Survivor)</li>
        <li><strong>Old Gen</strong> (Tenured) — uzunömürlü obyektlər</li>
        <li><code>-Xms</code> / <code>-Xmx</code> ilə ölçüləndirilir</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Non-Heap Memory</div>
      <ul>
        <li><strong>Metaspace</strong> — class metadata (Java 8+, PermGen əvəzi)</li>
        <li><strong>Stack</strong> — hər thread üçün ayrı; frame-lər</li>
        <li><strong>Code Cache</strong> — JIT compiled kod</li>
        <li><strong>Direct Buffer</strong> — NIO direct memory</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>// Yaddaş istifadəsini proqramdan oxumaq
Runtime rt = Runtime.getRuntime();
long total = rt.totalMemory(); // JVM-ə ayrılmış cari heap
long free  = rt.freeMemory();  // istifadə edilməyən heap
long max   = rt.maxMemory();   // maksimum heap (-Xmx)
long used  = total - free;

System.out.printf("İstifadə: %d MB%n",   used  / 1024 / 1024);
System.out.printf("Boş:      %d MB%n",   free  / 1024 / 1024);
System.out.printf("Maksimum: %d MB%n",   max   / 1024 / 1024);</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Heap Strukturu — Young &amp; Old Generation</h2>
  <div class='arch-box'>
    <div class='arch-flow'>
      <div style='flex:3'>
        <div style='text-align:center;font-size:11px;font-weight:700;color:var(--text-3);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px'>Young Generation</div>
        <div class='arch-flow' style='gap:6px'>
          <div class='arch-node accent' style='flex:2;text-align:center'><small>Yeni obyektlər</small>Eden</div>
          <div class='arch-arrow'><small>Minor GC</small>→</div>
          <div class='arch-node' style='text-align:center'><small>sağ qalanlar</small>Survivor 0</div>
          <div class='arch-arrow'>↔</div>
          <div class='arch-node' style='text-align:center'><small>sağ qalanlar</small>Survivor 1</div>
        </div>
      </div>
      <div class='arch-arrow' style='padding:0 20px;flex-direction:column'><small style='color:var(--text-3)'>age ≥ 15</small>→</div>
      <div style='flex:1'>
        <div style='text-align:center;font-size:11px;font-weight:700;color:var(--text-3);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px'>Old Generation</div>
        <div class='arch-node' style='width:100%;text-align:center'><small>Major / Full GC</small>Tenured</div>
      </div>
    </div>
  </div>
  <div class='note note-info'>
    <span class='note-icon'>ℹ️</span>
    <div class='note-body'><strong>GC dövrü:</strong> Yeni obyektlər Eden-də yaranır → Minor GC ilə sağ qalanlar Survivor-a köçür → age threshold (default 15) keçəndə Old Gen-ə köçür → Old Gen dolduqda Major/Full GC baş verir.</div>
  </div>
  <pre><code class='language-java'>// Object allokasiya nümunəsi
public class AllocationDemo {
    static List&lt;byte[]&gt; survivor = new ArrayList&lt;&gt;();

    public static void main(String[] args) throws InterruptedException {
        // Qısa ömürlü obyektlər — Eden-də yaranır, Minor GC ilə silinir
        for (int i = 0; i &lt; 1000; i++) {
            byte[] shortLived = new byte[1024]; // 1KB — GC tezliklə silir
        }

        // Uzunömürlü obyektlər — Old Gen-ə köçür
        for (int i = 0; i &lt; 100; i++) {
            survivor.add(new byte[10 * 1024]); // 10KB — saxlanılır
        }

        // GC-ni tövsiyə et (qarantiya deyil)
        System.gc();

        Runtime rt = Runtime.getRuntime();
        System.out.printf("Used: %d MB%n",
            (rt.totalMemory() - rt.freeMemory()) / 1024 / 1024);
    }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Stack Memory &amp; Metaspace</h2>
  <pre><code class='language-java'>// Stack — hər thread üçün ayrı, LIFO
// Hər metod çağırışı yeni Frame yaradır:
//   - local variables
//   - operand stack
//   - reference to current class

public class StackDemo {
    public static void main(String[] args) {
        int x = 10;       // Stack-də (primitive)
        String s = "hi";  // Stack-də reference; String Heap-də

        foo(x); // yeni frame push
    } // frame pop

    static void foo(int n) {
        bar(n * 2); // yeni frame push
    }

    static void bar(int n) {
        System.out.println(n);
        // StackOverflowError: rekursiya çox dərinləşsə
    }
}

// Stack ölçüsü: -Xss512k (default ~512KB-1MB thread-ə görə)
// Metaspace: class metadata, static dəyişənlər (String pool)
// -XX:MetaspaceSize=64m -XX:MaxMetaspaceSize=256m</code></pre>
  <div class='note note-info'>
    <span class='note-icon'>ℹ️</span>
    <div class='note-body'><strong>Heap vs Stack:</strong> Primitiv lokal dəyişənlər Stack-də; <code>new</code> ilə yaradılan obyektlər Heap-də saxlanılır. Stack thread-ə özəl, Heap bütün thread-lər tərəfindən paylaşılır.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Heap: Young Gen (Eden+Survivor) + Old Gen — GC burada işləyir</li>
    <li>Young Gen-də doğan əksər obyektlər tezliklə ölür (generational hypothesis)</li>
    <li>Metaspace (Java 8+): class metadata; PermGen əvəzi — native memory istifadə edir</li>
    <li>Stack: hər thread üçün ayrı; method frame-ləri; StackOverflowError mümkün</li>
    <li><code>-Xms256m -Xmx1g</code> ilə heap, <code>-Xss512k</code> ilə stack ölçüsü təyin et</li>
  </ul>
</div>
`,

  "jvm-2": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>GC nədir?</h2>
  <p class='lesson-text'>Garbage Collection — əlçatılmaz (unreachable) obyektlərin yaddaşını avtomatik azad edir. Proqramçı <code>free()</code> çağırmır — JVM özü idarə edir:</p>
  <pre><code class='language-java'>// Obyekt əlçatılmaz olduqda GC onu silə bilər:
void process() {
    StringBuilder sb = new StringBuilder("data"); // Heap-də
    sb.append(" processed");
    // sb metod bitdikdə reference itirir → əlçatılmaz → GC namizədi
}

// GC Roots — buradan əlçatan obyektlər SAXLANILİR:
// 1. Stack-dəki aktiv lokal dəyişənlər
// 2. Static dəyişənlər
// 3. JNI references
// 4. Aktiv thread-lər

// finalize() — köhnə, Java 9+ deprecated
// Əvvəllər istifadə edilirdi, indi try-with-resources istifadə et
// @Override protected void finalize() { ... } // QAÇIN</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Minor GC, Major GC, Full GC</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>Minor GC</div>
      <ul>
        <li>Yalnız Young Gen təmizlənir</li>
        <li>Tez-tez baş verir</li>
        <li>Qısa STW (stop-the-world)</li>
        <li>Eden dolu olduqda tetiklənir</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Major / Full GC</div>
      <ul>
        <li>Old Gen + bəzən Metaspace</li>
        <li>Nadir, amma uzun STW</li>
        <li>Performans problemin əsas səbəbi</li>
        <li>Full GC: heap-in hamısı + compaction</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>// GC log-ları aktivləşdirmək (Java 9+)
// java -Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=10m MyApp

// Proqramdan GC statistikasını oxumaq
import java.lang.management.*;

List&lt;GarbageCollectorMXBean&gt; gcBeans =
    ManagementFactory.getGarbageCollectorMXBeans();

for (GarbageCollectorMXBean gc : gcBeans) {
    System.out.printf("GC: %-30s | Count: %5d | Time: %6d ms%n",
        gc.getName(),
        gc.getCollectionCount(),
        gc.getCollectionTime());
}
// Nümunə çıxış:
// GC: G1 Young Generation          | Count:   152 | Time:    430 ms
// GC: G1 Old Generation            | Count:     3 | Time:    210 ms</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Mark-Sweep-Compact Alqoritması</h2>
  <pre><code class='language-java'>// GC-nin 3 əsas mərhələsi:

// 1. MARK — GC roots-dan başlayaraq bütün əlçatan obyektləri işarələ
//    (əlçatılmaz olanlar — "garbage")

// 2. SWEEP — işarələnməmiş obyektlərin yaddaşını azad et
//    (boş deliklər qalır → "fragmentation")

// 3. COMPACT — yaşayan obyektləri bir tərəfə topla
//    (ardıcıl boş yaddaş yaranır → allokasiya sürətlənir)

// Bu konsepti anlamaq üçün aşağıdakı nümunə:
public class GCDemo {
    // Short-lived list — Minor GC tezliklə silir
    static void createGarbage() {
        for (int i = 0; i &lt; 100_000; i++) {
            List&lt;Integer&gt; temp = new ArrayList&lt;&gt;();
            for (int j = 0; j &lt; 100; j++) temp.add(j);
            // temp burada əlçatılmaz olur → GC namizədi
        }
    }

    public static void main(String[] args) {
        long before = Runtime.getRuntime().freeMemory();
        createGarbage();
        System.gc(); // tövsiyə — GC bunu edib-etməmək qərarını özü verir
        long after = Runtime.getRuntime().freeMemory();
        System.out.printf("GC azad etdi: ~%d KB%n", (after - before) / 1024);
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>GC Roots-dan əlçatan olmayan obyektlər toplanır — proqramçı silmir</li>
    <li>Minor GC: tez, qısa; Major/Full GC: nadir, uzun Stop-The-World</li>
    <li>Generational hipotez: əksər obyektlər qısa ömürlüdür — Young Gen tez-tez təmizlənir</li>
    <li>Mark → Sweep → Compact: işarələ, sil, sıxışdır</li>
    <li><code>System.gc()</code> tövsiyədir, qarantiya deyil; production-da istifadə etmə</li>
  </ul>
</div>
`,

  "jvm-3": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>GC Algoritmaları Müqayisəsi</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Serial GC</div>
      <ul>
        <li>Tək thread ilə GC</li>
        <li>Sadə, az overhead</li>
        <li>Kiçik heap / single-core üçün</li>
        <li><code>-XX:+UseSerialGC</code></li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>Parallel GC</div>
      <ul>
        <li>Çox thread ilə GC (throughput)</li>
        <li>Java 8 default</li>
        <li>Yüksək throughput, uzun STW</li>
        <li><code>-XX:+UseParallelGC</code></li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>G1 GC</div>
      <ul>
        <li>Java 9+ default</li>
        <li>Region-based heap</li>
        <li>Pause time hedefi</li>
        <li><code>-XX:+UseG1GC</code></li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>ZGC / Shenandoah</div>
      <ul>
        <li>Java 15+ (production-ready)</li>
        <li>Pause: &lt;1ms — heap ölçüsündən asılı deyil</li>
        <li>Ultra-low latency (trading, real-time)</li>
        <li><code>-XX:+UseZGC</code></li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>// GC seçim nümunələri:

// Batch job / yüksək throughput (pause önəmli deyil)
// java -XX:+UseParallelGC -Xmx4g BatchApp

// Web server / API (düşük latency önəmli)
// java -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -Xmx4g ApiServer

// Real-time / ultra-low latency (Java 15+)
// java -XX:+UseZGC -Xmx8g TradingApp

// Container-da (Docker/K8s)
// java -XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0 -jar app.jar</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>G1 GC — Region Əsaslı</h2>
  <pre><code class='language-java'>// G1 heap-i bərabər ölçülü region-lara bölür (~1-32 MB)
// Region-lar dinamik olaraq Eden / Survivor / Old / Humongous ola bilər
//
//  ┌──┬──┬──┬──┬──┬──┬──┬──┐
//  │E │E │S │O │O │E │H │H │   E=Eden, S=Survivor
//  ├──┼──┼──┼──┼──┼──┼──┼──┤   O=Old, H=Humongous(böyük obj)
//  │O │E │O │O │S │E │O │E │
//  └──┴──┴──┴──┴──┴──┴──┴──┘

// G1 konfiqurasiyası
// -XX:+UseG1GC
// -XX:MaxGCPauseMillis=200        pause time hedefi (ms)
// -XX:G1HeapRegionSize=16m        region ölçüsü
// -XX:InitiatingHeapOccupancyPercent=45  concurrent GC başlama həddi

// Performans izləmə (GC log)
// -Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=20m

// GC hesabatı görmək
import java.lang.management.*;
MemoryMXBean memBean = ManagementFactory.getMemoryMXBean();
MemoryUsage heap = memBean.getHeapMemoryUsage();
System.out.printf("Heap used: %d MB / %d MB (max: %d MB)%n",
    heap.getUsed()      / 1024 / 1024,
    heap.getCommitted() / 1024 / 1024,
    heap.getMax()       / 1024 / 1024);</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>ZGC &amp; Shenandoah — Ultra-Low Latency</h2>
  <pre><code class='language-java'>// ZGC (Java 15+ production-ready)
// - Pause time: &lt; 1ms (heap ölçüsündən asılı olmayaraq)
// - Concurrent mark + relocate
// - Heap: kiçikdən terabyte-lara qədər
// java -XX:+UseZGC -Xmx16g -XX:ZCollectionInterval=5 LowLatencyApp

// Shenandoah GC (OpenJDK, Red Hat)
// - Concurrent compaction — STW demək olar ki yoxdur
// java -XX:+UseShenandoahGC -Xmx8g App

// Hansını seçmeli?
// Throughput önəmli    → Parallel GC
// Balanced             → G1 GC (əksər hallarda)
// &lt;10ms pause          → ZGC / Shenandoah
// Embedded / minimal   → Serial GC

// GC seçimini runtime yoxla
java.lang.management.RuntimeMXBean runtimeBean =
    ManagementFactory.getRuntimeMXBean();
runtimeBean.getInputArguments().stream()
    .filter(arg -> arg.contains("GC"))
    .forEach(System.out::println);</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>Spring Boot mikrosərvislər üçün G1 GC əksər hallarda idealdır. <code>-XX:MaxGCPauseMillis=200</code> ilə pause time hədəfi qoy. ZGC isə trading, gaming kimi ultra-low-latency tətbiqlər üçündür.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Serial: tək thread, kiçik app; Parallel: yüksək throughput batch iş</li>
    <li>G1 GC (Java 9+ default): region-based, pause time hədəfi — əksər tətbiqlər üçün</li>
    <li>ZGC (Java 15+): &lt;1ms pause, böyük heap — ultra-low latency</li>
    <li>Container-da: <code>-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0</code></li>
    <li>GC log-ları analiz et: <code>-Xlog:gc*:file=gc.log</code> — performans problemlərinin mənbəyi</li>
  </ul>
</div>
`,

  "jvm-4": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Əsas JVM Flagları</h2>
  <pre><code class='language-java'>// Heap Memory
-Xms512m              // başlanğıc heap ölçüsü
-Xmx2g                // maksimum heap ölçüsü
// Xms = Xmx etmək tövsiyə edilir — resizing overhead-ından qaçmaq üçün

// GC seçim
-XX:+UseG1GC           // G1 (Java 9+ default)
-XX:+UseZGC            // ZGC (Java 15+)
-XX:+UseParallelGC     // Parallel (throughput)

// G1 tuning
-XX:MaxGCPauseMillis=200           // hədəf pause time
-XX:G1HeapRegionSize=16m           // region ölçüsü
-XX:InitiatingHeapOccupancyPercent=45 // concurrent GC başlama

// GC Logging (Java 9+)
-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=20m

// Thread Stack
-Xss512k               // hər thread üçün stack ölçüsü

// Metaspace
-XX:MetaspaceSize=128m          // başlanğıc metaspace
-XX:MaxMetaspaceSize=512m       // maksimum metaspace

// JIT Compiler
-XX:+TieredCompilation          // C1+C2 kompilyator (default)
-XX:CompileThreshold=10000      // JIT kompilasiya həddi (invoke sayı)

// Diagnostics
-XX:+PrintFlagsFinal            // bütün JVM flaglarını göstər
-XX:+HeapDumpOnOutOfMemoryError // OOM olduqda heap dump yarat
-XX:HeapDumpPath=/tmp/heap.hprof</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>JIT Compiler</h2>
  <p class='lesson-text'>JVM başlanğıcda kodu interpret edir, amma tez-tez çağrılan metodları native koda kompilasiya edir (JIT):</p>
  <pre><code class='language-java'>// JIT Tiered Compilation:
// Level 0: Interpreter — ilk icra, profilləşdirmə
// Level 1-3: C1 (Client) — sürətli kompilasiya, az optimizasiya
// Level 4: C2 (Server)  — yavaş kompilasiya, maksimal optimizasiya

// "Warm up" — JIT kompilasiya zamanı lazımdır
public class JITDemo {
    static int compute(int n) {
        int sum = 0;
        for (int i = 0; i &lt; n; i++) sum += i;
        return sum;
    }

    public static void main(String[] args) {
        // İlk çağrışlar yavaş (interpreted)
        for (int i = 0; i &lt; 100; i++) compute(1000);

        // JIT devreye girdi — sonrakılar çox sürətli
        long start = System.nanoTime();
        for (int i = 0; i &lt; 100_000; i++) compute(1000);
        long elapsed = System.nanoTime() - start;
        System.out.printf("Cəmi: %d ms%n", elapsed / 1_000_000);
    }
}

// JIT kompilasiyasını yoxla
// java -XX:+PrintCompilation MyApp
// Çıxışda: method name + level göstərir</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Docker/Kubernetes-da JVM</h2>
  <pre><code class='language-java'>// Problem: köhnə JVM container memory limitini görmürdü
// (host RAM-ı görürdü, container limit-i yox)

// Həll: Java 8u191+ / Java 11+
-XX:+UseContainerSupport          // default açıqdır Java 11+
-XX:MaxRAMPercentage=75.0         // container RAM-ının 75%-i
-XX:InitialRAMPercentage=50.0     // başlanğıc heap

// Dockerfile nümunəsi
// FROM eclipse-temurin:21-jre
// ENTRYPOINT ["java", \
//   "-XX:+UseContainerSupport", \
//   "-XX:MaxRAMPercentage=75.0", \
//   "-XX:+UseG1GC", \
//   "-XX:MaxGCPauseMillis=200", \
//   "-jar", "app.jar"]

// Runtime memory yoxla
System.out.printf("Available processors: %d%n",
    Runtime.getRuntime().availableProcessors());
System.out.printf("Max heap: %d MB%n",
    Runtime.getRuntime().maxMemory() / 1024 / 1024);

// Spring Boot Actuator ilə JVM metriklər
// GET /actuator/metrics/jvm.memory.used
// GET /actuator/metrics/jvm.gc.pause</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'>Kubernetes-da Pod memory limit = container limit. <code>-Xmx</code> əl ilə verildikdə container limitindən az saxla (min 20% fərq). Əks halda OOMKilled baş verər.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><code>-Xms = -Xmx</code> — heap resizing overhead-ından qaç; production-da tövsiyə</li>
    <li><code>-XX:HeapDumpOnOutOfMemoryError</code> — OOM debug üçün həmişə əlavə et</li>
    <li>JIT: tez-tez çağrılan metodlar native koda çevrilir — "warm-up" lazımdır</li>
    <li>Container: <code>-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0</code></li>
    <li><code>-Xlog:gc*</code> ilə GC log-larını daima əlavə et — production issue-ları üçün vacib</li>
  </ul>
</div>
`,

  "jvm-5": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Memory Leak nədir?</h2>
  <p class='lesson-text'>Java-da memory leak — əlçatan (reachable) amma artıq işlənməyən obyektlər yığılandıqda baş verir. GC bunları silə bilmir — zamanla <code>OutOfMemoryError</code>:</p>
  <pre><code class='language-java'>// Klassik memory leak — static collection
public class UserCache {
    // Static Map heç vaxt GC edilmir!
    private static final Map&lt;String, byte[]&gt; cache = new HashMap&lt;&gt;();

    public static void addUser(String id) {
        cache.put(id, new byte[1024 * 1024]); // 1MB per user
        // silmə yoxdur → cache böyüyür → OOM!
    }
}

// Həll: ölçü məhdudiyyəti + eviction
private static final Map&lt;String, byte[]&gt; fixedCache =
    Collections.synchronizedMap(
        new LinkedHashMap&lt;String, byte[]&gt;(100, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry&lt;String, byte[]&gt; eldest) {
                return size() &gt; 100; // 100-dən çox olduqda köhnəni sil
            }
        }
    );

// Daha yaxşısı: Caffeine / Guava Cache (production-da)
// Cache&lt;String, byte[]&gt; cache = Caffeine.newBuilder()
//     .maximumSize(1000)
//     .expireAfterWrite(10, TimeUnit.MINUTES)
//     .build();</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>OOM Error Növləri</h2>
  <pre><code class='language-java'>// 1. Java heap space — ən çox rast gəlinən
// Heap doldu, GC sonradan da yer açmadı
// java.lang.OutOfMemoryError: Java heap space
// Həll: -Xmx artır; ya da leak-i tap

// 2. GC overhead limit exceeded
// GC vaxtın &gt;98%-ni işləyir, &lt;2% yaddaş azad edir
// java.lang.OutOfMemoryError: GC overhead limit exceeded
// Həll: heap artır; ya da allocation-ı azalt

// 3. Metaspace
// Class metadata doldu (çox class load edildi — classloader leak)
// java.lang.OutOfMemoryError: Metaspace
// Həll: -XX:MaxMetaspaceSize=512m; classloader leak-i tap

// 4. Direct buffer memory
// NIO direct buffer doldu
// java.lang.OutOfMemoryError: Direct buffer memory
// Həll: -XX:MaxDirectMemorySize=512m

// 5. Unable to create new native thread
// OS thread limiti aşıldı
// java.lang.OutOfMemoryError: unable to create new native thread
// Həll: thread pool; -Xss azalt; ulimit -u artır</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>WeakReference, SoftReference, PhantomReference</h2>
  <pre><code class='language-java'>import java.lang.ref.*;

// Strong reference — GC heç vaxt silmir
Object strong = new Object(); // normal reference

// WeakReference — GC istənilən vaxt silir (Minor GC-də belə)
WeakReference&lt;String&gt; weak = new WeakReference&lt;&gt;(new String("data"));
System.gc();
System.out.println(weak.get()); // null (silindi!)
// İstifadə: WeakHashMap — key strong reference yoxdursa silinir

// SoftReference — yaddaş çatışmadıqda silinir (cache üçün ideal)
SoftReference&lt;byte[]&gt; soft = new SoftReference&lt;&gt;(new byte[1024 * 1024]);
// Normal GC-də yaşayır; OOM-dan əvvəl silinir
if (soft.get() != null) {
    // istifadə et
} else {
    // yenidən yüklə
}

// WeakHashMap — memory-sensitive cache
Map&lt;Object, String&gt; weakMap = new WeakHashMap&lt;&gt;();
Object key = new Object();
weakMap.put(key, "dəyər");
key = null; // strong reference yox oldu
System.gc();
System.out.println(weakMap.size()); // 0 (silindi)</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Heap Dump Analizi</h2>
  <pre><code class='language-java'>// Heap dump almaq:

// 1. JVM flag ilə (OOM olduqda avtomatik)
// -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/app.hprof

// 2. jmap ilə (çalışan prosesdən)
// jmap -dump:format=b,file=heap.hprof &lt;PID&gt;

// 3. jcmd ilə
// jcmd &lt;PID&gt; GC.heap_dump /tmp/heap.hprof

// 4. Proqramdan
import com.sun.management.HotSpotDiagnosticMXBean;
HotSpotDiagnosticMXBean bean = ManagementFactory
    .newPlatformMXBeanProxy(
        ManagementFactory.getPlatformMBeanServer(),
        "com.sun.management:type=HotSpotDiagnostic",
        HotSpotDiagnosticMXBean.class);
bean.dumpHeap("/tmp/heap.hprof", true);

// Heap dump analizi:
// Eclipse MAT (Memory Analyzer Tool) — ən çox istifadə edilən
// IntelliJ IDEA profiler (built-in)
// VisualVM → Heap dump tab

// MAT-da axtarılacaqlar:
// - "Leak Suspects" — ən böyük retained heap sahibi
// - OQL sorğusu: SELECT * FROM java.util.HashMap
// - Dominator tree: hansı obyekt nə qədər yaddaş saxlayır</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>Production-da həmişə <code>-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/java/</code> əlavə et. OOM baş verdikdə dump avtomatik yazılır — sonradan analiz edib leak-i tapırsan.</div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Memory leak: əlçatan amma artıq lazım olmayan obyektlər — GC silə bilmir</li>
    <li>Klassik leak-lər: static collection-lar, event listener-lər, unclosed resource-lar</li>
    <li>OOM növü heap dump + MAT ilə müəyyən edilir</li>
    <li>SoftReference: yaddaş çatışmadıqda silinir — in-memory cache üçün; WeakReference: istənilən GC-də</li>
    <li><code>-XX:+HeapDumpOnOutOfMemoryError</code> — production-da mütləq əlavə et</li>
  </ul>
</div>
`,

  "jvm-6": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>JVM Monitoring Alətləri</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Command-line tools</div>
      <ul>
        <li><code>jps</code> — Java proseslərini göstər</li>
        <li><code>jstack &lt;PID&gt;</code> — thread dump</li>
        <li><code>jmap &lt;PID&gt;</code> — heap dump / stat</li>
        <li><code>jstat -gcutil &lt;PID&gt; 1s</code> — GC statistika</li>
        <li><code>jcmd &lt;PID&gt; help</code> — mövcud əmrlər</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-green'>GUI tools</div>
      <ul>
        <li>VisualVM — heap, thread, GC görsel</li>
        <li>Java Mission Control (JMC)</li>
        <li>IntelliJ Profiler (built-in)</li>
        <li>Async Profiler — CPU flame graph</li>
        <li>Eclipse MAT — heap dump analizi</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-java'>// jstat ilə GC monitorinqi (hər saniyə)
// jstat -gcutil &lt;PID&gt; 1000
//  S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT
//   0.00  56.23  43.12  61.45  95.1   92.3     32   0.412     2    0.103   0.515
// S0/S1=Survivor, E=Eden, O=Old, YGC=Young GC sayı, FGC=Full GC sayı

// jstack ilə thread dump (deadlock-u aşkar etmək)
// jstack &lt;PID&gt; | grep -A 20 "deadlock"
// jstack &lt;PID&gt; &gt; thread_dump.txt

// jcmd — ən çox funksiyalı
// jcmd &lt;PID&gt; Thread.print               — thread dump
// jcmd &lt;PID&gt; GC.heap_info               — heap statistika
// jcmd &lt;PID&gt; GC.run                     — GC tetikle
// jcmd &lt;PID&gt; VM.flags                   — JVM flagları
// jcmd &lt;PID&gt; VM.system_properties       — sistem xüsusiyyətlər
// jcmd &lt;PID&gt; JFR.start name=rec duration=60s filename=rec.jfr</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Java Flight Recorder (JFR)</h2>
  <pre><code class='language-java'>// JFR — düşük overhead-lı production profiler (Java 11+ pulsuz)
// Overhead: &lt; 1% (production-da istifadə etmək olar)

// Komanda sətirindən JFR başlat
// java -XX:StartFlightRecording=duration=120s,filename=app.jfr,
//       settings=profile -jar app.jar

// Çalışan prosesdə JFR başlat
// jcmd &lt;PID&gt; JFR.start name=recording1 duration=60s filename=/tmp/app.jfr

// JMC (Java Mission Control) ilə .jfr faylını analiz et:
// - CPU əməliyyatları
// - Memory allokasiyaları  
// - Blocking/locking
// - GC hadisələri
// - I/O əməliyyatları
// - Exception-lar
// - Thread aktivliyi

// Proqramdan JFR (Java 14+)
import jdk.jfr.*;

@Label("Cache Miss")
@Category("Application")
@StackTrace(false)
class CacheMissEvent extends Event {
    @Label("Cache Key")
    String key;
}

// İstifadə
CacheMissEvent event = new CacheMissEvent();
event.begin();
event.key = "user:42";
event.commit();</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Spring Boot Actuator ilə JVM Metriklər</h2>
  <pre><code class='language-java'>// pom.xml
// &lt;dependency&gt;
//   &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
//   &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
// &lt;/dependency&gt;
// &lt;dependency&gt;
//   &lt;groupId&gt;io.micrometer&lt;/groupId&gt;
//   &lt;artifactId&gt;micrometer-registry-prometheus&lt;/artifactId&gt;
// &lt;/dependency&gt;

// application.yml
// management:
//   endpoints:
//     web:
//       exposure:
//         include: health,metrics,prometheus
//   metrics:
//     enable:
//       jvm: true

// Əlçatan endpoint-lər:
// GET /actuator/metrics/jvm.memory.used?tag=area:heap
// GET /actuator/metrics/jvm.gc.pause
// GET /actuator/metrics/jvm.threads.live
// GET /actuator/prometheus  → Prometheus format

// Proqramdan metriklər
import io.micrometer.core.instrument.*;

@Component
public class AppMetrics {
    private final MeterRegistry registry;

    public AppMetrics(MeterRegistry registry) {
        this.registry = registry;
        // Custom gauge — cache ölçüsünü izlə
        Gauge.builder("cache.size", myCache, Map::size)
             .register(registry);
    }

    public void recordCacheMiss(String region) {
        registry.counter("cache.miss", "region", region).increment();
    }
}</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>Production monitoring stack: <strong>Micrometer + Prometheus + Grafana</strong>. Spring Boot Actuator JVM metrikləri avtomatik ixrac edir. Grafana-da hazır JVM dashboard-lar mövcuddur (ID: 4701).</div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Async Profiler — CPU Flame Graph</h2>
  <pre><code class='language-java'>// Async Profiler — samopling-based, çox az overhead
// https://github.com/async-profiler/async-profiler

// CPU profil (30 saniyə)
// ./asprof -d 30 -f cpu_flame.html &lt;PID&gt;

// Allokasiya profil
// ./asprof -e alloc -d 30 -f alloc_flame.html &lt;PID&gt;

// Lock contention profil
// ./asprof -e lock -d 30 -f lock_flame.html &lt;PID&gt;

// Flame graph oxumaq:
// - X oxu: metod adları (sıraya deyil, əlifba)
// - Y oxu: call stack dərinliyi
// - Eninə yer: nisbi CPU vaxtı
// - Ən geniş "plateau"-lar bottleneck-dir

// IntelliJ Profiler (build-in, Java 11+)
// Run → Profile → CPU/Allocation sampling
// Nəticə: call tree, flame graph, timeline</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><code>jstat -gcutil &lt;PID&gt; 1000</code> — real-time GC statistika; Eden/Old/YGC/FGC görünür</li>
    <li><code>jstack &lt;PID&gt;</code> — thread dump; deadlock analizi üçün vacib</li>
    <li>JFR: &lt;1% overhead ilə production profiling — CPU, memory, GC, I/O, lock</li>
    <li>Spring Actuator + Micrometer + Prometheus + Grafana — production monitoring stack</li>
    <li>Async Profiler: CPU flame graph ilə bottleneck tapma — ən effektiv üsul</li>
  </ul>
</div>
`,

  /* ─────────────────────────────────────────
     SECTION 07 — Design Patterns & SOLID
     ───────────────────────────────────────── */

  "dp-1": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>SOLID Prinsipləri</h2>
  <p class='lesson-text'>SOLID — Robert C. Martin tərəfindən formalaşdırılmış, uzunmüddətli dəstəklənə bilən kod üçün 5 prinsip:</p>
  <div class='feature-list'>
    <div class='feature-item'>
      <div class='feature-icon'>🔴</div>
      <div><strong>S — Single Responsibility</strong><p>Bir sinif yalnız bir məsuliyyət daşımalı, bir dəyişmə səbəbi olmalıdır.</p></div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🟠</div>
      <div><strong>O — Open / Closed</strong><p>Genişlənməyə açıq, dəyişməyə qapalı — mövcud kodu dəyişmədən yeni funksionallıq əlavə et.</p></div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🟡</div>
      <div><strong>L — Liskov Substitution</strong><p>Alt sinif ana sinfin bütün davranışlarını qoruyaraq onun yerini almalıdır.</p></div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🟢</div>
      <div><strong>I — Interface Segregation</strong><p>Böyük interface-ləri xırda, ixtisaslaşmış interface-lərə böl — implement edənlər lazımsız metodlarla yüklənməsin.</p></div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🔵</div>
      <div><strong>D — Dependency Inversion</strong><p>Yüksək səviyyəli modullar konkret tiplərə deyil, abstraksiylara (interface) bağlı olmalıdır.</p></div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>S — Single Responsibility</h2>
  <p class='lesson-text'>Bir sinfin yalnız bir dəyişmə səbəbi olmalıdır:</p>
  <pre><code class='language-java'>// ❌ SRP pozulur — User həm data, həm DB, həm email idarə edir
class User {
    String name; String email;
    void save()      { /* DB-yə yaz */ }
    void sendEmail() { /* email göndər */ }
    String toJson()  { /* serialize et */ }
}

// ✅ SRP — hər sinif bir məsuliyyət
class User { String name; String email; }

class UserRepository {
    void save(User user) { /* yalnız DB işi */ }
}

class EmailService {
    void sendWelcome(User user) { /* yalnız email */ }
}

class UserSerializer {
    String toJson(User user) { /* yalnız serialization */ }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>O — Open/Closed &amp; L — Liskov Substitution</h2>
  <pre><code class='language-java'>// O — Open/Closed: genişlənməyə açıq, dəyişməyə qapalı
// ❌ Yeni forma əlavə etdikdə AreaCalculator dəyişməlidir
class AreaCalculator {
    double area(Object shape) {
        if (shape instanceof Circle c)    return Math.PI * c.r * c.r;
        if (shape instanceof Square s)    return s.side * s.side;
        // yeni forma → bu sinfi dəyiş = OCP pozulur
        throw new IllegalArgumentException();
    }
}

// ✅ OCP — abstraksiyon ilə
interface Shape { double area(); }
record Circle(double r)    implements Shape { public double area() { return Math.PI * r * r; } }
record Square(double side) implements Shape { public double area() { return side * side; } }
record Triangle(double b, double h) implements Shape { public double area() { return 0.5 * b * h; } }

class AreaCalculator {
    double totalArea(List&lt;Shape&gt; shapes) {
        return shapes.stream().mapToDouble(Shape::area).sum();
        // yeni forma → Shape implement et; bu sinif dəyişmir!
    }
}

// L — Liskov Substitution: alt sinif ana sinfin yerini ala bilməlidir
// ❌ LSP pozulur — ReadOnlyList yazmaq istədikdə exception
class ReadOnlyList&lt;T&gt; extends ArrayList&lt;T&gt; {
    @Override public boolean add(T e) { throw new UnsupportedOperationException(); }
}

// ✅ LSP — interface ilə davranış müqaviləsi
interface ReadableList&lt;T&gt; { T get(int i); int size(); }
interface WriteableList&lt;T&gt; extends ReadableList&lt;T&gt; { void add(T e); }</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>I — Interface Segregation &amp; D — Dependency Inversion</h2>
  <pre><code class='language-java'>// I — ISP: geniş interface əvəzinə xırda, ixtisaslaşmış interface-lər
// ❌ Fat interface — Robot yemə/yatma metodlarını implement etmək məcburiyyəti
interface Worker {
    void work(); void eat(); void sleep();
}

// ✅ ISP — ayrılmış interface-lər
interface Workable  { void work(); }
interface Eatable   { void eat();  }
interface Sleepable { void sleep(); }

class Human  implements Workable, Eatable, Sleepable { /* hamısı */ }
class Robot  implements Workable { /* yalnız work */ }

// D — DIP: yüksək səviyyəli modullar aşağı səviyyəlilərə deyil,
//          abstraksiylara bağlı olmalıdır
// ❌ DIP pozulur — OrderService birbaşa MySQLDB-yə bağlıdır
class OrderService {
    private MySQLDatabase db = new MySQLDatabase(); // konkret tip!
    void placeOrder(Order o) { db.save(o); }
}

// ✅ DIP — abstraksiyon ilə asılılıq
interface OrderRepository {
    void save(Order order);
    Optional&lt;Order&gt; findById(Long id);
}

class OrderService {
    private final OrderRepository repo; // interface-ə bağlı

    // Constructor injection — Spring tərəfindən inject edilir
    public OrderService(OrderRepository repo) { this.repo = repo; }

    void placeOrder(Order o) { repo.save(o); }
}

// Test zamanı mock, production-da JPA implementation
class InMemoryOrderRepo implements OrderRepository {
    Map&lt;Long, Order&gt; store = new HashMap&lt;&gt;();
    public void save(Order o) { store.put(o.getId(), o); }
    public Optional&lt;Order&gt; findById(Long id) { return Optional.ofNullable(store.get(id)); }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><strong>S</strong>: Bir sinif — bir məsuliyyət; dəyişmə səbəbi tək olmalı</li>
    <li><strong>O</strong>: Interface/abstraksiyon ilə yeni funksionallıq əlavə et, mövcudu dəyişmə</li>
    <li><strong>L</strong>: Alt sinif ana sinfin davranışını pozmamalı — ikame mümkün olmalı</li>
    <li><strong>I</strong>: Böyük interface-ləri xırda, ixtisaslaşmış interface-lərə böl</li>
    <li><strong>D</strong>: Konkret sinfə deyil, interface-ə bağlan — Spring DI bunun əsasıdır</li>
  </ul>
</div>
`,

  "dp-2": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Creational Patterns — Obyekt Yaratma</h2>
  <p class='lesson-text'>Creational pattern-lər obyektlərin necə yaradılacağını idarə edir — birbaşa <code>new</code>-dan asılılığı azaldır.</p>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Singleton</h2>
  <pre><code class='language-java'>// Yalnız bir instansiya — global access point
// Ən etibarlı üsul: static inner class (Bill Pugh idiom)
public class AppConfig {
    private final String dbUrl;
    private final int maxConnections;

    private AppConfig() {
        // konfiqurasiyadan yüklə
        this.dbUrl = System.getenv("DB_URL");
        this.maxConnections = 10;
    }

    private static class Holder {
        // Class yüklənəndə bir dəfə yaranır — thread-safe, lazy
        static final AppConfig INSTANCE = new AppConfig();
    }

    public static AppConfig getInstance() { return Holder.INSTANCE; }

    public String getDbUrl()        { return dbUrl; }
    public int    getMaxConnections(){ return maxConnections; }
}

// İstifadə
AppConfig cfg = AppConfig.getInstance();

// Spring-də: @Component / @Bean default Singleton-dur — əl ilə yazmağa ehtiyac yoxdur
// @Service, @Repository, @Component hamısı Spring container-da Singleton</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Factory Method &amp; Abstract Factory</h2>
  <pre><code class='language-java'>// Factory Method — alt siniflər hansı obyektin yaranacağını müəyyən edir
interface Notification {
    void send(String message);
}

class EmailNotification implements Notification {
    public void send(String msg) { System.out.println("Email: " + msg); }
}

class SmsNotification implements Notification {
    public void send(String msg) { System.out.println("SMS: " + msg); }
}

class PushNotification implements Notification {
    public void send(String msg) { System.out.println("Push: " + msg); }
}

// Factory — yaratma məntiqi mərkəzləşdirilir
class NotificationFactory {
    public static Notification create(String type) {
        return switch (type.toLowerCase()) {
            case "email" -> new EmailNotification();
            case "sms"   -> new SmsNotification();
            case "push"  -> new PushNotification();
            default      -> throw new IllegalArgumentException("Bilinməyən tip: " + type);
        };
    }
}

Notification n = NotificationFactory.create("email");
n.send("Hesabınız aktivdir!");

// Abstract Factory — əlaqəli obyektlər ailəsi
interface Button  { void render(); }
interface TextBox { void render(); }

// Ailə 1: Light tema
class LightButton  implements Button  { public void render() { System.out.println("Light Button");  } }
class LightTextBox implements TextBox { public void render() { System.out.println("Light TextBox"); } }

// Ailə 2: Dark tema
class DarkButton   implements Button  { public void render() { System.out.println("Dark Button");   } }
class DarkTextBox  implements TextBox { public void render() { System.out.println("Dark TextBox");  } }

interface UIFactory {
    Button  createButton();
    TextBox createTextBox();
}

class LightThemeFactory implements UIFactory {
    public Button  createButton()  { return new LightButton();  }
    public TextBox createTextBox() { return new LightTextBox(); }
}

class DarkThemeFactory implements UIFactory {
    public Button  createButton()  { return new DarkButton();  }
    public TextBox createTextBox() { return new DarkTextBox(); }
}

// Tema dəyişdirildikdə yalnız factory dəyişir
UIFactory factory = isDark ? new DarkThemeFactory() : new LightThemeFactory();
factory.createButton().render();
factory.createTextBox().render();</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Builder &amp; Prototype</h2>
  <pre><code class='language-java'>// Builder — mürəkkəb obyekti addım-addım qurmaq
public class HttpRequest {
    private final String method;
    private final String url;
    private final Map&lt;String, String&gt; headers;
    private final String body;
    private final int timeoutMs;

    private HttpRequest(Builder b) {
        this.method    = b.method;
        this.url       = b.url;
        this.headers   = Collections.unmodifiableMap(b.headers);
        this.body      = b.body;
        this.timeoutMs = b.timeoutMs;
    }

    public static class Builder {
        private String method = "GET";
        private String url;
        private Map&lt;String, String&gt; headers = new HashMap&lt;&gt;();
        private String body;
        private int timeoutMs = 5000;

        public Builder url(String url)              { this.url = url; return this; }
        public Builder method(String m)             { this.method = m; return this; }
        public Builder header(String k, String v)   { headers.put(k, v); return this; }
        public Builder body(String body)            { this.body = body; return this; }
        public Builder timeout(int ms)              { this.timeoutMs = ms; return this; }
        public HttpRequest build() {
            if (url == null) throw new IllegalStateException("URL tələb olunur");
            return new HttpRequest(this);
        }
    }
}

// İstifadə — fluent API
HttpRequest req = new HttpRequest.Builder()
    .url("https://api.example.com/users")
    .method("POST")
    .header("Content-Type", "application/json")
    .header("Authorization", "Bearer token123")
    .body("{\"name\":\"Anar\"}")
    .timeout(3000)
    .build();

// Lombok-da: @Builder annotasiyası ilə avtomatik</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Singleton: static inner class (Bill Pugh) — lazy + thread-safe; Spring-də default davranış</li>
    <li>Factory Method: yaratma məntiqini mərkəzləşdir; <code>switch</code>-lə tip seçimi</li>
    <li>Abstract Factory: əlaqəli obyektlər ailəsi — tema, platform, mühit dəyişəndə</li>
    <li>Builder: çox parametrli immutable obyektlər; Lombok <code>@Builder</code> ilə avtomatik</li>
    <li>Prototype: <code>Cloneable.clone()</code> — baha yaratmaq əvəzinə kopyala (nadir istifadə)</li>
  </ul>
</div>
`,

  "dp-3": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Structural Patterns — Quruluş</h2>
  <p class='lesson-text'>Structural pattern-lər sinifləri və obyektləri daha böyük quruluşlara birləşdirməyin üsullarını müəyyən edir.</p>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Adapter</h2>
  <p class='lesson-text'>Uyğunsuz interface-ləri birləşdirir — köhnə kodu yeni sistemə uyğunlaşdırır:</p>
  <pre><code class='language-java'>// Mövcud köhnə sistem (dəyişdirə bilmirik)
class LegacyPaymentGateway {
    String processPayment(String cardNum, double amount, String currency) {
        return "TXN-" + System.currentTimeMillis();
    }
}

// Yeni interface — sistemimizin gözlədiyi
interface PaymentProcessor {
    PaymentResult pay(PaymentRequest request);
}

record PaymentRequest(String cardNumber, double amount, String currency) {}
record PaymentResult(String transactionId, boolean success) {}

// Adapter — köhnəni yeniyə uyğunlaşdırır
class LegacyPaymentAdapter implements PaymentProcessor {
    private final LegacyPaymentGateway legacy;

    public LegacyPaymentAdapter(LegacyPaymentGateway legacy) {
        this.legacy = legacy;
    }

    @Override
    public PaymentResult pay(PaymentRequest req) {
        // Yeni formatı köhnəyə çevir
        String txnId = legacy.processPayment(
            req.cardNumber(), req.amount(), req.currency()
        );
        return new PaymentResult(txnId, txnId != null);
    }
}

// İstifadə — adapter vasitəsilə köhnə sistemi yeni interface ilə çağır
PaymentProcessor processor = new LegacyPaymentAdapter(new LegacyPaymentGateway());
PaymentResult result = processor.pay(new PaymentRequest("4111...", 99.99, "AZN"));</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Decorator</h2>
  <p class='lesson-text'>Obyektə dinamik olaraq davranış əlavə edir — miras almadan:</p>
  <pre><code class='language-java'>// Component interface
interface TextProcessor {
    String process(String text);
}

// Konkret component
class PlainTextProcessor implements TextProcessor {
    public String process(String text) { return text; }
}

// Base decorator
abstract class TextDecorator implements TextProcessor {
    protected final TextProcessor wrapped;
    TextDecorator(TextProcessor wrapped) { this.wrapped = wrapped; }
}

// Konkret decorator-lar
class TrimDecorator extends TextDecorator {
    TrimDecorator(TextProcessor w) { super(w); }
    public String process(String text) { return wrapped.process(text).trim(); }
}

class UpperCaseDecorator extends TextDecorator {
    UpperCaseDecorator(TextProcessor w) { super(w); }
    public String process(String text) { return wrapped.process(text).toUpperCase(); }
}

class HtmlEscapeDecorator extends TextDecorator {
    HtmlEscapeDecorator(TextProcessor w) { super(w); }
    public String process(String text) {
        return wrapped.process(text)
            .replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");
    }
}

// Decorator-ları zəncirləmə
TextProcessor processor = new UpperCaseDecorator(
                            new TrimDecorator(
                              new PlainTextProcessor()));

System.out.println(processor.process("  salam dünya  ")); // SALAM DÜNYA

// Java-da nümunə: InputStream decorator-ları
InputStream raw     = new FileInputStream("data.txt");
InputStream buffered = new BufferedInputStream(raw);       // Decorator!
InputStream gzipped  = new GZIPInputStream(buffered);     // Decorator!</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Proxy &amp; Facade</h2>
  <pre><code class='language-java'>// Proxy — başqa obyektə nəzarətli giriş (caching, logging, security)
interface UserRepository {
    User findById(Long id);
}

class DatabaseUserRepository implements UserRepository {
    public User findById(Long id) {
        System.out.println("DB-dən yüklənir: " + id);
        return new User(id, "User-" + id);
    }
}

class CachingUserRepositoryProxy implements UserRepository {
    private final UserRepository real;
    private final Map&lt;Long, User&gt; cache = new HashMap&lt;&gt;();

    CachingUserRepositoryProxy(UserRepository real) { this.real = real; }

    public User findById(Long id) {
        return cache.computeIfAbsent(id, k -> {
            System.out.println("Cache miss — DB çağrılır");
            return real.findById(k);
        });
    }
}

// İstifadə — Proxy şəffaf şəkildə əsl implementasiyanı əvəz edir
UserRepository repo = new CachingUserRepositoryProxy(new DatabaseUserRepository());
repo.findById(1L); // DB-dən
repo.findById(1L); // Cache-dən

// Spring @Cacheable, @Transactional — hər ikisi Proxy pattern istifadə edir

// Facade — mürəkkəb alt sistemi sadə interface ilə örtür
class OrderFacade {
    private final InventoryService inventory;
    private final PaymentService   payment;
    private final ShippingService  shipping;
    private final EmailService     email;

    // Client yalnız bir metod çağırır — alt sistemin mürəkkəbliyini bilmir
    public OrderResult placeOrder(Cart cart, PaymentInfo payInfo) {
        inventory.reserve(cart.items());
        PaymentResult pr = payment.charge(payInfo, cart.total());
        String trackingNo = shipping.schedule(cart.deliveryAddress());
        email.sendConfirmation(cart.userEmail(), trackingNo);
        return new OrderResult(pr.txnId(), trackingNo);
    }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Composite</h2>
  <pre><code class='language-java'>// Composite — ağac quruluşu; tək obyekt ilə qrup eyni şəkildə işlənir
interface FileSystemItem {
    String getName();
    long   getSize();
    void   print(String indent);
}

class File implements FileSystemItem {
    private final String name;
    private final long   size;

    File(String name, long size) { this.name = name; this.size = size; }
    public String getName() { return name; }
    public long   getSize() { return size; }
    public void   print(String indent) {
        System.out.printf("%s📄 %s (%d KB)%n", indent, name, size / 1024);
    }
}

class Directory implements FileSystemItem {
    private final String name;
    private final List&lt;FileSystemItem&gt; children = new ArrayList&lt;&gt;();

    Directory(String name) { this.name = name; }
    public void add(FileSystemItem item) { children.add(item); }
    public String getName() { return name; }
    public long   getSize() { return children.stream().mapToLong(FileSystemItem::getSize).sum(); }
    public void   print(String indent) {
        System.out.printf("%s📁 %s/%n", indent, name);
        children.forEach(c -> c.print(indent + "  "));
    }
}

// İstifadə
Directory root = new Directory("project");
root.add(new File("README.md", 2048));
Directory src = new Directory("src");
src.add(new File("Main.java", 4096));
src.add(new File("Config.java", 2048));
root.add(src);
root.print("");
System.out.printf("Ümumi: %d KB%n", root.getSize() / 1024);</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Adapter: uyğunsuz interface-ləri birləşdirir — köhnə sistemin inteqrasiyası</li>
    <li>Decorator: miras almadan davranış əlavə edir — Java I/O streams bunu istifadə edir</li>
    <li>Proxy: əsl obyektə nəzarətli giriş — Spring @Cacheable, @Transactional buna əsaslanır</li>
    <li>Facade: mürəkkəb alt sistemi sadə interface ilə örtür — Service layer design</li>
    <li>Composite: ağac quruluşu; tək elementlə qrup eyni interface ilə idarə edilir</li>
  </ul>
</div>
`,

  "dp-4": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Behavioral Patterns — Davranış</h2>
  <p class='lesson-text'>Behavioral pattern-lər obyektlər arasındakı kommunikasiyanı və alqoritm seçimini idarə edir.</p>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Strategy</h2>
  <p class='lesson-text'>Alqoritm ailəsini müəyyən et, hər birini kapsullaşdır, runtime-da dəyişdir — <code>if/else</code> zəncirini ortadan qaldırır:</p>
  <pre><code class='language-java'>// Ödəniş strategiyaları
@FunctionalInterface
interface PaymentStrategy {
    PaymentResult pay(double amount);
}

class CreditCardStrategy implements PaymentStrategy {
    private final String cardNumber;
    CreditCardStrategy(String cardNumber) { this.cardNumber = cardNumber; }
    public PaymentResult pay(double amount) {
        System.out.printf("Kart %s ilə %.2f AZN ödənildi%n", cardNumber, amount);
        return new PaymentResult("CC-TXN-001", true);
    }
}

class PayPalStrategy implements PaymentStrategy {
    private final String email;
    PayPalStrategy(String email) { this.email = email; }
    public PaymentResult pay(double amount) {
        System.out.printf("PayPal %s ilə %.2f AZN ödənildi%n", email, amount);
        return new PaymentResult("PP-TXN-001", true);
    }
}

// Context
class ShoppingCart {
    private PaymentStrategy strategy;
    private double total;

    public void setStrategy(PaymentStrategy s) { this.strategy = s; }
    public void addItem(double price)          { this.total += price; }

    public PaymentResult checkout() {
        if (strategy == null) throw new IllegalStateException("Ödəniş üsulu seçilməyib");
        return strategy.pay(total);
    }
}

// İstifadə
ShoppingCart cart = new ShoppingCart();
cart.addItem(49.99); cart.addItem(29.99);
cart.setStrategy(new CreditCardStrategy("4111-****"));
cart.checkout();

// Lambda ilə (functional interface olduğu üçün)
cart.setStrategy(amount -> { System.out.println("Nağd: " + amount); return new PaymentResult("CASH", true); });</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Observer</h2>
  <p class='lesson-text'>Bir obyektin vəziyyəti dəyişdikdə bütün asılıları avtomatik xəbərdar edir — event-driven sistemlərin əsası:</p>
  <pre><code class='language-java'>// Observer interface
interface OrderObserver {
    void onOrderPlaced(Order order);
}

// Subject (Observable)
class OrderService {
    private final List&lt;OrderObserver&gt; observers = new ArrayList&lt;&gt;();

    public void addObserver(OrderObserver obs)    { observers.add(obs); }
    public void removeObserver(OrderObserver obs) { observers.remove(obs); }

    private void notifyObservers(Order order) {
        observers.forEach(obs -> obs.onOrderPlaced(order));
    }

    public void placeOrder(Order order) {
        // ... sifariş məntiqi ...
        System.out.println("Sifariş verildi: " + order.getId());
        notifyObservers(order); // hamısını xəbərdar et
    }
}

// Konkret observer-lər
class EmailNotificationObserver implements OrderObserver {
    public void onOrderPlaced(Order order) {
        System.out.println("Email göndərildi: " + order.getEmail());
    }
}

class InventoryObserver implements OrderObserver {
    public void onOrderPlaced(Order order) {
        System.out.println("Stok azaldıldı: " + order.getItems());
    }
}

class AnalyticsObserver implements OrderObserver {
    public void onOrderPlaced(Order order) {
        System.out.println("Analytics: yeni sifariş qeydə alındı");
    }
}

// İstifadə
OrderService orderSvc = new OrderService();
orderSvc.addObserver(new EmailNotificationObserver());
orderSvc.addObserver(new InventoryObserver());
orderSvc.addObserver(new AnalyticsObserver());
orderSvc.placeOrder(new Order(1L, "user@test.az", List.of("item1")));
// Spring-də: @EventListener + ApplicationEventPublisher</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Command &amp; Template Method</h2>
  <pre><code class='language-java'>// Command — əməliyyatı obyekt kimi kapsullaşdır (undo/redo, queue)
interface Command {
    void execute();
    void undo();
}

class TextEditor {
    private StringBuilder text = new StringBuilder();
    private Deque&lt;Command&gt; history = new ArrayDeque&lt;&gt;();

    public void executeCommand(Command cmd) {
        cmd.execute();
        history.push(cmd);
    }

    public void undo() {
        if (!history.isEmpty()) history.pop().undo();
    }

    class AppendCommand implements Command {
        private final String toAppend;
        AppendCommand(String s) { this.toAppend = s; }
        public void execute() { text.append(toAppend); }
        public void undo()    { text.delete(text.length() - toAppend.length(), text.length()); }
    }

    public String getText() { return text.toString(); }
}

// Template Method — alqoritmin skeletini müəyyən et, addımları alt sinifə ver
abstract class DataExporter {
    // Template method — sıra dəyişmir
    public final void export(List&lt;?&gt; data) {
        List&lt;?&gt; filtered  = filter(data);    // 1. süz
        List&lt;?&gt; formatted = format(filtered); // 2. format et
        write(formatted);                       // 3. yaz
        sendNotification();                     // 4. xəbər ver (default)
    }

    protected abstract List&lt;?&gt; filter(List&lt;?&gt; data);
    protected abstract List&lt;?&gt; format(List&lt;?&gt; data);
    protected abstract void    write(List&lt;?&gt; data);
    protected void sendNotification() { System.out.println("İxrac tamamlandı!"); } // hook
}

class CsvExporter extends DataExporter {
    protected List&lt;?&gt; filter(List&lt;?&gt; d) { return d.stream().filter(x -> x != null).toList(); }
    protected List&lt;?&gt; format(List&lt;?&gt; d) { return d.stream().map(Object::toString).toList(); }
    protected void write(List&lt;?&gt; d)     { System.out.println("CSV: " + d); }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Chain of Responsibility</h2>
  <pre><code class='language-java'>// Chain of Responsibility — sorğunu işləyə biləcək handler tapana qədər zəncirlə ötür
abstract class AuthHandler {
    protected AuthHandler next;

    public AuthHandler setNext(AuthHandler next) {
        this.next = next;
        return next; // zəncir qurmaq üçün
    }

    public abstract boolean handle(Request request);
}

class AuthenticationHandler extends AuthHandler {
    public boolean handle(Request req) {
        if (!req.hasValidToken()) {
            System.out.println("Auth uğursuz: token yoxdur");
            return false;
        }
        System.out.println("Auth OK");
        return next == null || next.handle(req);
    }
}

class RateLimitHandler extends AuthHandler {
    private Map&lt;String, Integer&gt; counts = new HashMap&lt;&gt;();
    public boolean handle(Request req) {
        int count = counts.merge(req.getIp(), 1, Integer::sum);
        if (count &gt; 100) {
            System.out.println("Rate limit aşıldı: " + req.getIp());
            return false;
        }
        return next == null || next.handle(req);
    }
}

class AuthorizationHandler extends AuthHandler {
    public boolean handle(Request req) {
        if (!req.hasPermission("READ")) {
            System.out.println("Yetki yoxdur");
            return false;
        }
        System.out.println("Authorization OK → sorğu işlənir");
        return true;
    }
}

// Zənciri qur
AuthHandler chain = new AuthenticationHandler();
chain.setNext(new RateLimitHandler())
     .setNext(new AuthorizationHandler());

chain.handle(request);
// Spring Security filter chain da eyni pattern-dir</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Strategy: runtime alqoritm seçimi — if/else zəncirini aradan qaldırır; lambda ilə sadə</li>
    <li>Observer: event-driven; Spring <code>@EventListener</code> + <code>ApplicationEventPublisher</code> buna əsaslanır</li>
    <li>Command: əməliyyatı obyekt kimi kapsullaşdır — undo/redo, job queue, transaction log</li>
    <li>Template Method: alqoritm skeleti abstract class-da; addımlar alt sinifdə — Spring JdbcTemplate</li>
    <li>Chain of Responsibility: Spring Security filter chain, middleware — handler-lər zənciri</li>
  </ul>
</div>
`,

  /* ─────────────────────────────────────────
     SECTION 08 — Build Tools (Maven & Gradle)
     ───────────────────────────────────────── */

  "bt-1": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Maven – POM &amp; Lifecycle</h2>
  <p class='lesson-text'>Maven Java proyektlərini qurmaq, asılılıqları idarə etmək və artifact yayımlamaq üçün ən geniş yayılmış build tool-dur. <strong>POM</strong> (Project Object Model) — <code>pom.xml</code> faylında proyektin tam təsviri saxlanır.</p>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>pom.xml Struktur</h2>
  <pre><code class='language-xml'>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;

  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

  &lt;!-- Proyekt identifikasiyası --&gt;
  &lt;groupId&gt;az.company&lt;/groupId&gt;        &lt;!-- təşkilat / paket prefiksi --&gt;
  &lt;artifactId&gt;my-app&lt;/artifactId&gt;      &lt;!-- proyekt adı --&gt;
  &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;   &lt;!-- SNAPSHOT = inkişaf mərhələsi --&gt;
  &lt;packaging&gt;jar&lt;/packaging&gt;           &lt;!-- jar | war | pom --&gt;

  &lt;properties&gt;
    &lt;java.version&gt;21&lt;/java.version&gt;
    &lt;maven.compiler.source&gt;21&lt;/maven.compiler.source&gt;
    &lt;maven.compiler.target&gt;21&lt;/maven.compiler.target&gt;
    &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
  &lt;/properties&gt;

  &lt;dependencies&gt;
    &lt;!-- asılılıqlar burada --&gt;
  &lt;/dependencies&gt;

  &lt;build&gt;
    &lt;plugins&gt;
      &lt;!-- build pluginləri --&gt;
    &lt;/plugins&gt;
  &lt;/build&gt;

&lt;/project&gt;</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Maven Build Lifecycle</h2>
  <p class='lesson-text'>Maven-in <strong>default lifecycle</strong>-ı ardıcıl fazalardan ibarətdir — hər faza əvvəlkini avtomatik çalışdırır:</p>
  <ol class='steps-list'>
    <li><div><strong>validate</strong> — pom.xml-in düzgünlüyünü yoxla; layihə mükəmməldir?</div></li>
    <li><div><strong>compile</strong> — <code>src/main/java</code> → <code>target/classes</code></div></li>
    <li><div><strong>test</strong> — <code>src/test/java</code> unit testləri (JUnit/TestNG); failure olduqda build dayanır</div></li>
    <li><div><strong>package</strong> — <code>.jar</code> / <code>.war</code> yarat → <code>target/</code> qovluğunda</div></li>
    <li><div><strong>verify</strong> — inteqrasiya testlərini yoxla; artifact keyfiyyətini təsdiq et</div></li>
    <li><div><strong>install</strong> — <code>~/.m2/repository</code> lokal cache-ə yüklə; digər proyektlər istifadə edə bilər</div></li>
    <li><div><strong>deploy</strong> — uzaq Nexus / Artifactory repoya göndər (CI/CD pipeline)</div></li>
  </ol>
  <pre><code class='language-java'>// Ən çox istifadə olunan əmrlər
mvn compile                    // yalnız compile
mvn package                    // compile + test + jar
mvn package -DskipTests        // test-ləri keç, package et
mvn install                    // package + lokal ~/.m2-yə yüklə
mvn clean install -DskipTests  // ən çox istifadə olunan
mvn clean                      // target/ sil

// Xüsusi modul build et (multi-module proyektdə)
mvn -pl my-app-service install -DskipTests</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Repositories &amp; Plugins</h2>
  <pre><code class='language-xml'>&lt;!-- Repositories: Maven asılılıqları haradan yükləyir --&gt;
&lt;repositories&gt;
  &lt;!-- Default: Maven Central (search.maven.org) --&gt;
  &lt;repository&gt;
    &lt;id&gt;central&lt;/id&gt;
    &lt;url&gt;https://repo1.maven.org/maven2&lt;/url&gt;
  &lt;/repository&gt;
  &lt;!-- Korporativ Nexus --&gt;
  &lt;repository&gt;
    &lt;id&gt;company-nexus&lt;/id&gt;
    &lt;url&gt;https://nexus.company.az/repository/maven-public&lt;/url&gt;
  &lt;/repository&gt;
&lt;/repositories&gt;

&lt;build&gt;
  &lt;plugins&gt;
    &lt;!-- Spring Boot executable jar --&gt;
    &lt;plugin&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
      &lt;version&gt;3.3.0&lt;/version&gt;
      &lt;executions&gt;
        &lt;execution&gt;
          &lt;goals&gt;&lt;goal&gt;repackage&lt;/goal&gt;&lt;/goals&gt;
        &lt;/execution&gt;
      &lt;/executions&gt;
    &lt;/plugin&gt;

    &lt;!-- Compiler plugin —Java 21 --&gt;
    &lt;plugin&gt;
      &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
      &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
      &lt;version&gt;3.13.0&lt;/version&gt;
      &lt;configuration&gt;
        &lt;release&gt;21&lt;/release&gt;
        &lt;compilerArgs&gt;&lt;arg&gt;--enable-preview&lt;/arg&gt;&lt;/compilerArgs&gt;
      &lt;/configuration&gt;
    &lt;/plugin&gt;
  &lt;/plugins&gt;
&lt;/build&gt;</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><code>groupId:artifactId:version</code> — Maven koordinatı; hər artifact unikal</li>
    <li>SNAPSHOT = inkişafdakı versiyadır; RELEASE = stabil buraxılış</li>
    <li>Lifecycle fazaları ardıcıldır: <code>compile → test → package → install → deploy</code></li>
    <li><code>mvn clean install -DskipTests</code> — gündəlik ən çox istifadə olunan əmr</li>
    <li>Lokal cache: <code>~/.m2/repository</code> — bir dəfə yüklənir, offlinə da işləyir</li>
  </ul>
</div>
`,

  "bt-2": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Maven – Dependency Management</h2>
  <p class='lesson-text'>Maven-in güclü tərəflərindən biri asılılıqları avtomatik həll etməsidir — dependency tree, version conflict həlli, scope idarəsi.</p>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Dependency Əlavə Etmək &amp; Scope-lar</h2>
  <pre><code class='language-xml'>&lt;dependencies&gt;

  &lt;!-- compile scope (default) — hər yerdə mövcuddur --&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;version&gt;3.3.0&lt;/version&gt;
    &lt;!-- &lt;scope&gt;compile&lt;/scope&gt; — default, yazmasaq da eyni --&gt;
  &lt;/dependency&gt;

  &lt;!-- test scope — yalnız test zamanı, jar-a daxil edilmir --&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;version&gt;3.3.0&lt;/version&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;

  &lt;!-- provided scope — compile zamanı lazım, runtime-da container verir
       (servlet-api, lombok) --&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
    &lt;artifactId&gt;lombok&lt;/artifactId&gt;
    &lt;version&gt;1.18.32&lt;/version&gt;
    &lt;scope&gt;provided&lt;/scope&gt;
  &lt;/dependency&gt;

  &lt;!-- runtime scope — compile-da yox, runtime-da lazım (JDBC driver) --&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.postgresql&lt;/groupId&gt;
    &lt;artifactId&gt;postgresql&lt;/artifactId&gt;
    &lt;version&gt;42.7.3&lt;/version&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
  &lt;/dependency&gt;

&lt;/dependencies&gt;

&lt;!--
  Scope xülasəsi:
  ─────────────────────────────────────────────────────
  compile    │ ✅ compile  │ ✅ test  │ ✅ runtime │ ✅ jar-da
  test       │ ❌ compile  │ ✅ test  │ ❌ runtime │ ❌ jar-da
  provided   │ ✅ compile  │ ✅ test  │ ❌ runtime │ ❌ jar-da
  runtime    │ ❌ compile  │ ✅ test  │ ✅ runtime │ ✅ jar-da
--&gt;</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Dependency Tree &amp; Version Conflicts</h2>
  <pre><code class='language-java'>// Dependency tree-ni görmək
mvn dependency:tree

// Nümunə çıxış:
// [INFO] az.company:my-app:jar:1.0.0
// [INFO] +- org.springframework.boot:spring-boot-starter-web:jar:3.3.0
// [INFO] |  +- org.springframework.boot:spring-boot-starter:jar:3.3.0
// [INFO] |  |  +- org.springframework:spring-core:jar:6.1.8
// [INFO] |  +- org.springframework:spring-webmvc:jar:6.1.8

// Version conflict həlli — "nearest definition wins" qaydası:
// A → B:1.0 və A → C → B:2.0 olduqda B:1.0 seçilir (daha yaxın)
// Problemi həll etmək üçün explicit version qeyd et:
mvn dependency:tree -Dverbose | grep "omitted for conflict"

// Yalnız mətn ilə axtarış
mvn dependency:tree | grep "spring-core"</code></pre>
  <pre><code class='language-xml'>&lt;!-- Version conflict-i həll etmək: dependencyManagement ilə force et --&gt;
&lt;dependencyManagement&gt;
  &lt;dependencies&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-core&lt;/artifactId&gt;
      &lt;version&gt;6.1.8&lt;/version&gt; &lt;!-- bütün transitive dep-lər bu versiyanu istifadə edir --&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;

&lt;!-- Transitive dependency-ni exclude et --&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-logging&lt;/artifactId&gt;
  &lt;exclusions&gt;
    &lt;exclusion&gt;
      &lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;
      &lt;artifactId&gt;log4j-to-slf4j&lt;/artifactId&gt;
    &lt;/exclusion&gt;
  &lt;/exclusions&gt;
&lt;/dependency&gt;</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>BOM (Bill of Materials)</h2>
  <p class='lesson-text'>BOM — bir qrup asılılığın versiyalarını mərkəzləşdirilmiş şəkildə idarə edir. Spring Boot Parent POM bunun klassik nümunəsidir:</p>
  <pre><code class='language-xml'>&lt;!-- Üsul 1: Parent POM kimi — bütün Spring Boot versiyaları idarə olunur --&gt;
&lt;parent&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
  &lt;version&gt;3.3.0&lt;/version&gt;
&lt;/parent&gt;

&lt;!-- İndi version yazmağa ehtiyac yoxdur — BOM-dan avtomatik gəlir --&gt;
&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;!-- version yoxdur! parent BOM-dan götürülür --&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;

&lt;!-- Üsul 2: import scope ilə BOM (öz parent-iniz varsa) --&gt;
&lt;dependencyManagement&gt;
  &lt;dependencies&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-dependencies&lt;/artifactId&gt;
      &lt;version&gt;3.3.0&lt;/version&gt;
      &lt;type&gt;pom&lt;/type&gt;
      &lt;scope&gt;import&lt;/scope&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><strong>compile</strong>: default; <strong>test</strong>: yalnız test; <strong>provided</strong>: Lombok, servlet-api; <strong>runtime</strong>: JDBC driver</li>
    <li><code>mvn dependency:tree</code> ilə tranzitiv asılılıqları və konfliktləri gör</li>
    <li>Version conflict → <code>dependencyManagement</code> ilə force et və ya <code>&lt;exclusion&gt;</code> ilə çıxar</li>
    <li>Spring Boot parent POM — BOM-un ən geniş yayılmış nümunəsi; versiya yazmağa ehtiyac yoxdur</li>
    <li><code>mvn dependency:analyze</code> — istifadə olunmayan asılılıqları tapır</li>
  </ul>
</div>
`,

  "bt-3": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Gradle – Əsaslar</h2>
  <p class='lesson-text'>Gradle — Maven-dən daha çevik, inkremental build dəstəkli, Kotlin/Groovy DSL ilə konfiqurasiya olunan modern build tool-dur. Android, büyük mono-repolar üçün üstün seçimdir.</p>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>build.gradle.kts — Kotlin DSL</h2>
  <pre><code class='language-kotlin'>// build.gradle.kts (Kotlin DSL — tövsiyə olunan)
plugins {
    java
    id("org.springframework.boot") version "3.3.0"
    id("io.spring.dependency-management") version "1.1.5"
}

group   = "az.company"
version = "1.0.0-SNAPSHOT"

java {
    toolchain { languageVersion = JavaLanguageVersion.of(21) }
}

repositories {
    mavenCentral()
    // Korporativ Nexus
    maven { url = uri("https://nexus.company.az/repository/maven-public") }
}

dependencies {
    // BOM-dan versiya gəlir (spring-dependency-management plugin)
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")

    // Explicit versiyanı
    implementation("org.mapstruct:mapstruct:1.5.5.Final")

    // Yalnız compile zamanı (annotation processor)
    annotationProcessor("org.projectlombok:lombok")
    compileOnly("org.projectlombok:lombok")

    // Runtime
    runtimeOnly("org.postgresql:postgresql")

    // Test
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType&lt;Test&gt; {
    useJUnitPlatform()
}

// Xüsusi task nümunəsi
tasks.register("printVersion") {
    doLast { println("Versiyan: $version") }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Gradle Tasks &amp; Əmrlər</h2>
  <pre><code class='language-java'>// Mövcud task-ları gör
./gradlew tasks

// Build et (compile + test + jar)
./gradlew build

// Test-ləri keç
./gradlew build -x test

// Yalnız test çalışdır
./gradlew test

// Spring Boot proqramını başlat
./gradlew bootRun

// Jar/war yarat (build/libs/ qovluğunda)
./gradlew bootJar

// Dependency tree
./gradlew dependencies --configuration compileClasspath

// Inkremental build — dəyişməyən task-lar keçilir (UP-TO-DATE)
// Bu Gradle-in Maven-dən üstünlüyüdür — böyük proyektlərdə çox sürətli

// Gradle wrapper — local Gradle quraşdırmasına ehtiyac yoxdur
// gradlew (Unix) / gradlew.bat (Windows) — proyektlə birlikdə commit edilməlidir
./gradlew wrapper --gradle-version 8.7</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Maven vs Gradle Müqayisəsi</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>⚙️ Maven</div>
      <ul>
        <li>XML konfiqurasiya — verbose amma aydın</li>
        <li>Convention over configuration</li>
        <li>Lifecycle fazaları sabitdir</li>
        <li>Böyük ekosistem, çox plugin</li>
        <li>Enterprise mühitdə standart</li>
        <li>Inkremental build yoxdur</li>
        <li>Spring Boot default seçimi (amma Gradle da var)</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>🐘 Gradle</div>
      <ul>
        <li>Kotlin/Groovy DSL — az kod, daha çevik</li>
        <li>Konfigurasiya tam proqramlaşdırılabilir</li>
        <li>Xüsusi task-lar asanlıqla yazmaq olur</li>
        <li>Inkremental build — yalnız dəyişəni yenidən qur</li>
        <li>Build cache — eyni build-i bir daha çalışdırma</li>
        <li>Android, Kotlin multi-platform standartı</li>
        <li>Böyük mono-repolar üçün daha sürətli</li>
      </ul>
    </div>
  </div>
</div>

<div class='note note-tip'>
  <span class='note-icon'>💡</span>
  <div class='note-body'><strong>Hansını seçmək lazımdır?</strong> Spring Boot proyektlərində hər ikisi işləyir. Yeni proyektdə Gradle Kotlin DSL tövsiyə olunur — daha az boilerplate, IDE autocomplete, daha sürətli build. Mövcud Maven proyektini isə dəyişdirməyə ehtiyac yoxdur.</div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Gradle Kotlin DSL (<code>build.gradle.kts</code>) — type-safe, IDE autocomplete, tövsiyə olunan</li>
    <li>Inkremental build: dəyişməyən task-lar <code>UP-TO-DATE</code> — böyük proyektlərdə çox sürətli</li>
    <li><code>./gradlew</code> wrapper — proyektlə birlikdə commit et; lokal Gradle lazım deyil</li>
    <li>Gradle dependency scopes: <code>implementation</code>, <code>compileOnly</code>, <code>runtimeOnly</code>, <code>testImplementation</code></li>
    <li>Android &amp; Kotlin multiplatform — yalnız Gradle dəstəklənir</li>
  </ul>
</div>
`,

  "bt-4": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Multi-Module Projects</h2>
  <p class='lesson-text'>Böyük proyektlər modullara bölünür — hər modul müstəqil build olunur, modullar arasında asılılıqlar idarə edilir. Microservice monorepo, layered architecture üçün vacibdir.</p>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Maven Multi-Module</h2>
  <pre><code class='language-xml'>&lt;!-- Proyekt quruluşu:
  my-app/                          ← root (parent) POM
  ├── pom.xml                      ← parent POM (packaging=pom)
  ├── my-app-domain/               ← domain/entity modulü
  │   └── pom.xml
  ├── my-app-repository/           ← data access modulü
  │   └── pom.xml
  ├── my-app-service/              ← iş məntiqi modulü
  │   └── pom.xml
  └── my-app-web/                  ← REST API / controller modulü
      └── pom.xml
--&gt;

&lt;!-- root/pom.xml — Parent POM --&gt;
&lt;project&gt;
  &lt;groupId&gt;az.company&lt;/groupId&gt;
  &lt;artifactId&gt;my-app&lt;/artifactId&gt;
  &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
  &lt;packaging&gt;pom&lt;/packaging&gt;  &lt;!-- MÜTLƏQ pom olmalıdır! --&gt;

  &lt;modules&gt;
    &lt;module&gt;my-app-domain&lt;/module&gt;
    &lt;module&gt;my-app-repository&lt;/module&gt;
    &lt;module&gt;my-app-service&lt;/module&gt;
    &lt;module&gt;my-app-web&lt;/module&gt;
  &lt;/modules&gt;

  &lt;!-- Bütün alt modullar bu parent-i miras alır --&gt;
  &lt;dependencyManagement&gt;
    &lt;dependencies&gt;
      &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-dependencies&lt;/artifactId&gt;
        &lt;version&gt;3.3.0&lt;/version&gt;
        &lt;type&gt;pom&lt;/type&gt;
        &lt;scope&gt;import&lt;/scope&gt;
      &lt;/dependency&gt;
    &lt;/dependencies&gt;
  &lt;/dependencyManagement&gt;
&lt;/project&gt;

&lt;!-- my-app-service/pom.xml — alt modul --&gt;
&lt;project&gt;
  &lt;parent&gt;
    &lt;groupId&gt;az.company&lt;/groupId&gt;
    &lt;artifactId&gt;my-app&lt;/artifactId&gt;
    &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
  &lt;/parent&gt;

  &lt;artifactId&gt;my-app-service&lt;/artifactId&gt;

  &lt;dependencies&gt;
    &lt;!-- Modul arası asılılıq --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;az.company&lt;/groupId&gt;
      &lt;artifactId&gt;my-app-domain&lt;/artifactId&gt;
      &lt;version&gt;\${project.version}&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;az.company&lt;/groupId&gt;
      &lt;artifactId&gt;my-app-repository&lt;/artifactId&gt;
      &lt;version&gt;\${project.version}&lt;/version&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/project&gt;

&lt;!-- Root-dan hamısını build et --&gt;
&lt;!-- mvn clean install → hər modulu sıra ilə build edir --&gt;</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Gradle Multi-Project</h2>
  <pre><code class='language-kotlin'>// settings.gradle.kts — root (mütləq lazımdır)
rootProject.name = "my-app"

include(
    "my-app-domain",
    "my-app-repository",
    "my-app-service",
    "my-app-web"
)

// root/build.gradle.kts — ümumi konfiqurasiya
plugins {
    java apply false
    id("org.springframework.boot") version "3.3.0" apply false
    id("io.spring.dependency-management") version "1.1.5" apply false
}

// Bütün alt proyektlərə tətbiq et
subprojects {
    apply(plugin = "java")
    apply(plugin = "io.spring.dependency-management")

    repositories { mavenCentral() }

    dependencies {
        "testImplementation"("org.springframework.boot:spring-boot-starter-test")
    }
}

// my-app-service/build.gradle.kts — alt modul
plugins {
    id("org.springframework.boot")
}

dependencies {
    implementation(project(":my-app-domain"))      // modul arası asılılıq
    implementation(project(":my-app-repository"))
    implementation("org.springframework.boot:spring-boot-starter")
}

// Bütün modulları build et
// ./gradlew build — hamısını inkremental şəkildə qurur
// ./gradlew :my-app-service:build — yalnız bir modulu qur</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Multi-Module Üstünlükləri &amp; Tövsiyələr</h2>
  <div class='note note-tip'>
    <strong>💡 Nə vaxt multi-module istifadə etməli?</strong>
    <ul style='margin-top:8px; padding-left:20px;'>
      <li>Layered architecture: domain, infrastructure, application, presentation qatları</li>
      <li>Shared library: bir neçə microservice-in eyni kodu istifadə etməsi</li>
      <li>Parallel build: modullar müstəqil paralel build oluna bilər</li>
      <li>Circular dependency aşkarlanır — compile zamanı xəta verir</li>
    </ul>
  </div>
  <pre><code class='language-java'>/*
  Tipik Spring Boot Multi-Module Quruluşu:
  ─────────────────────────────────────────────
  my-app-domain
    └── Entity-lər, Value Object-lər, Domain interface-ləri
        Heç bir Spring/framework asılılığı yox — pure Java

  my-app-repository
    └── JPA Repository-lər, DB mapper-lər
        domain-a bağlıdır, spring-data-jpa asılılığı var

  my-app-service
    └── @Service business logic
        domain + repository-yə bağlıdır

  my-app-web
    └── @RestController-lər, DTO-lar, OpenAPI
        yalnız service-ə bağlıdır (repository-yə birbaşa yox!)
        spring-boot-starter-web + executable jar buradadır

  Qaydalar:
  • domain ← heç nəyə bağlı deyil
  • repository ← domain-a bağlıdır
  • service ← domain + repository
  • web ← yalnız service (repository yox!)
*/</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Maven: root POM-da <code>&lt;packaging&gt;pom&lt;/packaging&gt;</code> + <code>&lt;modules&gt;</code>; alt modullar <code>&lt;parent&gt;</code> ilə bağlanır</li>
    <li>Gradle: <code>settings.gradle.kts</code>-də <code>include()</code>; modul asılılığı <code>project(":modul-adı")</code></li>
    <li>Domain modulu heç bir framework-ə bağlı olmamalıdır — pure Java/Kotlin</li>
    <li>Circular dependency build zamanı aşkarlanır — bu multi-module-un böyük üstünlüyüdür</li>
    <li><code>mvn clean install</code> / <code>./gradlew build</code> — root-dan bütün modulları build edir</li>
  </ul>
</div>
`,

  /* ═══════════════════════════════════════════════════
   SECTION 09 — Databases & SQL
   ═══════════════════════════════════════════════════ */

  "db-1": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Relational Database — Əsas Anlayışlar</h2>
  <p class='lesson-text'>
    Relational database (RDB) məlumatları <strong>cədvəllər (table)</strong> şəklində saxlayır.
    Hər cədvəl bir entity-ni (istifadəçi, sifariş, məhsul) təmsil edir.
    Cədvəllər arasındakı əlaqə <strong>Foreign Key</strong> vasitəsilə qurulur.
    SQL (Structured Query Language) bu cədvəlləri yaratmaq, dəyişmək və sorğulamaq üçün ISO/ANSI standartıdır.
  </p>
  <div class='arch-box'>
    <div class='arch-flow' style='gap:10px'>
      <div class='arch-node accent'>
        users
        <small>id · name · email</small>
      </div>
      <div class='arch-arrow'>
        →
        <small>1 → N<br>user_id FK</small>
      </div>
      <div class='arch-node accent'>
        orders
        <small>id · user_id · total</small>
      </div>
      <div class='arch-arrow'>
        →
        <small>1 → N<br>order_id FK</small>
      </div>
      <div class='arch-node accent'>
        order_items
        <small>id · order_id · product_id</small>
      </div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Data Types — Ən Çox İstifadə Olunanlar</h2>
  <p class='lesson-text'>Düzgün data type seçimi həm disk həcmini, həm performansı, həm də məlumat bütövlüyünü birbaşa təsir edir.</p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Ədəd tipləri</div>
      <ul>
        <li><code>SMALLINT</code> — -32 768 .. 32 767 (2 byte)</li>
        <li><code>INT / INTEGER</code> — ±2.1 milyard (4 byte)</li>
        <li><code>BIGINT</code> — ±9.2 × 10¹⁸ (8 byte)</li>
        <li><code>BIGSERIAL</code> — auto-increment BIGINT (ID üçün)</li>
        <li><code>NUMERIC(p, s)</code> — dəqiq onluq, pul üçün ideal</li>
        <li><code>FLOAT / DOUBLE</code> — yuvarlama xətası var, pul üçün işlətmə</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Mətn, Tarix, Digər</div>
      <ul>
        <li><code>CHAR(n)</code> — sabit uzunluq (doldurmaq üçün boşluq əlavə edir)</li>
        <li><code>VARCHAR(n)</code> — dəyişkən uzunluq, maks n simvol</li>
        <li><code>TEXT</code> — limitsiz mətn (VARCHAR(n)-dan fərqi yoxdur demək olar)</li>
        <li><code>BOOLEAN</code> — true / false / null</li>
        <li><code>DATE</code> — YYYY-MM-DD</li>
        <li><code>TIMESTAMP</code> — tarix + vaxt</li>
        <li><code>JSONB</code> — binary JSON (PostgreSQL, indeksləmə dəstəkləyir)</li>
      </ul>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>DDL — Data Definition Language</h2>
  <p class='lesson-text'>
    DDL cədvəl <strong>strukturunu</strong> idarə edir. DDL əmrləri <strong>auto-commit</strong> olur —
    transaction-a ehtiyac yoxdur, amma geri qaytarmaq da olmur.
  </p>
  <pre><code class='language-sql'>-- ── Cədvəl yaratmaq ─────────────────────────────────────────────
CREATE TABLE users (
    id          BIGSERIAL       PRIMARY KEY,
    username    VARCHAR(50)     NOT NULL UNIQUE,
    email       VARCHAR(255)    NOT NULL UNIQUE,
    age         SMALLINT        CHECK (age >= 0 AND age <= 150),
    status      VARCHAR(20)     NOT NULL DEFAULT 'active',
    created_at  TIMESTAMP       NOT NULL DEFAULT NOW()
);

-- Foreign Key ilə cədvəl (ON DELETE CASCADE = parent silinəndə child da silinir)
CREATE TABLE orders (
    id          BIGSERIAL       PRIMARY KEY,
    user_id     BIGINT          NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    total       NUMERIC(10, 2)  NOT NULL DEFAULT 0.00,
    created_at  TIMESTAMP       NOT NULL DEFAULT NOW()
);

-- ── Cədvəl dəyişmək ──────────────────────────────────────────────
ALTER TABLE users ADD COLUMN phone VARCHAR(20);          -- sütun əlavə et
ALTER TABLE users RENAME COLUMN phone TO phone_number;   -- sütun adını dəyiş
ALTER TABLE users ALTER COLUMN age TYPE INT;             -- sütun tipini dəyiş
ALTER TABLE users ALTER COLUMN status SET DEFAULT 'pending'; -- default dəyiş
ALTER TABLE users DROP COLUMN phone_number;              -- sütunu sil

-- ── Cədvəl silmək ────────────────────────────────────────────────
DROP TABLE orders;           -- cədvəli bütün məlumatlarla sil
TRUNCATE TABLE orders;       -- yalnız məlumatları sil, strukturu saxla</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Constraints — Məlumat Bütövlüyü</h2>
  <div class='feature-list'>
    <div class='feature-item'>
      <div class='feature-icon'>🔑</div>
      <div>
        <strong>PRIMARY KEY</strong>
        <p>Hər sıranı unikal tanımlayır. NULL ola bilməz. Avtomatik index yaranır. Adətən <code>BIGSERIAL</code> tipli <code>id</code> sütunu olur.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🔗</div>
      <div>
        <strong>FOREIGN KEY</strong>
        <p>Başqa cədvəlin PRIMARY KEY-inə istinad edir. Referential integrity-ni qoruyur — mövcud olmayan <code>user_id</code>-ni <code>orders</code>-ə yazmağa icazə vermir.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>✨</div>
      <div>
        <strong>UNIQUE</strong>
        <p>Sütundakı bütün dəyərlər fərqli olmalıdır. NULL-a icazə verir (birdən çox NULL ola bilər). Email, username kimi sahələr üçün istifadə olunur.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🚫</div>
      <div>
        <strong>NOT NULL</strong>
        <p>Sütun heç vaxt NULL ola bilməz — dəyər mütləq verilməlidir. Biznes açısından vacib sahələrə tətbiq edin.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>✅</div>
      <div>
        <strong>CHECK</strong>
        <p>İstəyə uyğun şərt: <code>CHECK (age > 0)</code>, <code>CHECK (price >= 0)</code>, <code>CHECK (status IN ('active','inactive'))</code>.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>📋</div>
      <div>
        <strong>DEFAULT</strong>
        <p>Dəyər verilmədikdə avtomatik yazılan standart dəyər: <code>DEFAULT NOW()</code>, <code>DEFAULT 'active'</code>, <code>DEFAULT 0</code>.</p>
      </div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>DML — Data Manipulation Language</h2>
  <p class='lesson-text'>DML mövcud cədvəllərdəki məlumatı əlavə edir, yeniləyir, silir və oxuyur. DML əmrləri transaction içindədir — <code>ROLLBACK</code> ilə geri qaytarmaq mümkündür.</p>
  <pre><code class='language-sql'>-- ── INSERT ───────────────────────────────────────────────────────
INSERT INTO users (username, email, age)
VALUES ('ali', 'ali@example.com', 28);

-- Çoxlu sıra birdən
INSERT INTO users (username, email, age) VALUES
    ('leyla', 'leyla@example.com', 24),
    ('eldar', 'eldar@example.com', 31);

-- Başqa cədvəldən kopyala
INSERT INTO archived_users SELECT * FROM users WHERE status = 'inactive';

-- ── UPDATE ───────────────────────────────────────────────────────
UPDATE users
SET status = 'inactive', age = 29
WHERE username = 'ali';

-- ── DELETE ───────────────────────────────────────────────────────
DELETE FROM users
WHERE status = 'inactive' AND created_at < NOW() - INTERVAL '1 year';

-- ── SELECT ───────────────────────────────────────────────────────
SELECT id, username, email
FROM   users
WHERE  age > 20 AND status = 'active'
ORDER  BY created_at DESC
LIMIT  10
OFFSET 0;     -- səhifə: (page-1)*10</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'>
      <strong>WHERE olmadan UPDATE/DELETE</strong> — bütün sıraları dəyişdirir/silir!
      Production-da həmişə əvvəlcə <code>SELECT</code> ilə nəyi dəyişdirdiyinizi yoxlayın, sonra UPDATE/DELETE icra edin.
    </div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><strong>DDL</strong> (CREATE, ALTER, DROP) cədvəl strukturunu, <strong>DML</strong> (INSERT, UPDATE, DELETE, SELECT) isə məlumatı idarə edir</li>
    <li>ID sütunu üçün <code>BIGSERIAL</code>; pul üçün <code>NUMERIC(10,2)</code>; sonsuz mətn üçün <code>TEXT</code> istifadə edin</li>
    <li><code>ON DELETE CASCADE</code> — parent silinəndə child sıralar da avtomatik silinir; <code>ON DELETE RESTRICT</code> isə buna icazə vermir</li>
    <li><code>TRUNCATE</code> <code>DELETE</code>-dən çox sürətlidir — böyük cədvəlləri təmizləmək üçün istifadə edin</li>
    <li>DML transaction içindədir — <code>BEGIN; ... ROLLBACK;</code> ilə test edib geri qaytara bilərsiniz</li>
  </ul>
</div>
`,

  "db-2": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>JOIN — Cədvəlləri Birləşdirmək</h2>
  <p class='lesson-text'>
    JOIN iki və ya daha çox cədvəli bir şərt əsasında (adətən Foreign Key üzərindən) birləşdirir.
    Hansı JOIN növünü seçmək lazım olduğunu başa düşmək üçün Venn diaqramı kömək edir.
  </p>
  <div class='arch-box'>
    <div style='display:grid;grid-template-columns:1fr 1fr;gap:12px'>
      <div style='background:#1e3a5f;border:1px solid #3b82f6;border-radius:8px;padding:12px'>
        <div style='color:#60a5fa;font-weight:700;margin-bottom:4px'>INNER JOIN</div>
        <div style='color:#94a3b8;font-size:13px'>Hər iki cədvəldə uyğun sıra olduqda qaytarır (kəsişmə)</div>
      </div>
      <div style='background:#1a3d2e;border:1px solid #22c55e;border-radius:8px;padding:12px'>
        <div style='color:#4ade80;font-weight:700;margin-bottom:4px'>LEFT OUTER JOIN</div>
        <div style='color:#94a3b8;font-size:13px'>Sol cədvəlin bütün sıralarını qaytarır; sağda uyğun yoxdursa NULL</div>
      </div>
      <div style='background:#3d2a1a;border:1px solid #f59e0b;border-radius:8px;padding:12px'>
        <div style='color:#fbbf24;font-weight:700;margin-bottom:4px'>RIGHT OUTER JOIN</div>
        <div style='color:#94a3b8;font-size:13px'>Sağ cədvəlin bütün sıralarını qaytarır; solda uyğun yoxdursa NULL</div>
      </div>
      <div style='background:#2d1a3d;border:1px solid #a78bfa;border-radius:8px;padding:12px'>
        <div style='color:#c4b5fd;font-weight:700;margin-bottom:4px'>FULL OUTER JOIN</div>
        <div style='color:#94a3b8;font-size:13px'>Hər iki cədvəlin bütün sıralarını qaytarır; uyğun yoxdursa NULL</div>
      </div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>JOIN Növləri — Kod Nümunələri</h2>
  <p class='lesson-text'>Bütün nümunələrdə <code>users</code> (istifadəçilər) və <code>orders</code> (sifarişlər) cədvəllərini istifadə edirik.</p>
  <pre><code class='language-sql'>-- ── INNER JOIN ───────────────────────────────────────────────────
-- Yalnız sifarişi olan istifadəçiləri göstər
SELECT u.username, o.id AS order_id, o.total
FROM   users u
INNER JOIN orders o ON u.id = o.user_id;

-- ── LEFT JOIN ────────────────────────────────────────────────────
-- Sifarişi olsun ya olmasın bütün istifadəçiləri göstər
SELECT u.username,
       COALESCE(COUNT(o.id), 0) AS order_count
FROM   users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username;

-- ── FULL OUTER JOIN ──────────────────────────────────────────────
-- Qiymətləri olmayan məhsulları VƏ məhsulsuz qiymətləri aşkar et
SELECT p.name, pr.amount
FROM   products p
FULL OUTER JOIN prices pr ON p.id = pr.product_id
WHERE  p.id IS NULL OR pr.product_id IS NULL;

-- ── CROSS JOIN ───────────────────────────────────────────────────
-- Kartezyen hasilat — kombinasiyalar üçün
SELECT s.size, c.color
FROM   sizes s
CROSS JOIN colors c;

-- ── SELF JOIN ────────────────────────────────────────────────────
-- Employees cədvəlindəki hər işçinin menecerini tapmaq
SELECT e.name AS employee, m.name AS manager
FROM   employees e
LEFT JOIN employees m ON e.manager_id = m.id;</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Subqueries — İç-içə Sorğular</h2>
  <p class='lesson-text'>
    Subquery bir SQL ifadəsinin içərisindəki başqa SQL sorğusudur.
    SELECT, FROM, WHERE, HAVING hissələrinin hər birində istifadə edilə bilər.
  </p>
  <pre><code class='language-sql'>-- ── WHERE içində scalar subquery ────────────────────────────────
-- Orta sifarişdən yüksək sifarişləri tap
SELECT id, total
FROM   orders
WHERE  total > (SELECT AVG(total) FROM orders);

-- ── FROM içində subquery (derived table) ─────────────────────────
SELECT dept, avg_salary
FROM (
    SELECT department AS dept, AVG(salary) AS avg_salary
    FROM   employees
    GROUP BY department
) AS dept_stats
WHERE avg_salary > 50000;

-- ── EXISTS — ən az bir sifariş olan istifadəçilər ────────────────
SELECT username
FROM   users u
WHERE  EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- ── NOT EXISTS — heç sifariş etməmiş istifadəçilər ───────────────
SELECT username
FROM   users u
WHERE  NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- ── IN — siyahıda olan ───────────────────────────────────────────
SELECT name FROM products
WHERE  category_id IN (SELECT id FROM categories WHERE active = true);

-- ── Correlated subquery — hər sıra üçün ayrıca işləyir ──────────
-- Hər istifadəçinin ən son sifarişini tap
SELECT u.username, o.total, o.created_at
FROM   users u
JOIN   orders o ON u.id = o.user_id
WHERE  o.created_at = (
    SELECT MAX(o2.created_at)
    FROM   orders o2
    WHERE  o2.user_id = u.id
);</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>
      <strong>EXISTS vs IN:</strong> Böyük cədvəllərdə <code>EXISTS</code> daha sürətlidir
      çünki ilk uyğun sıranı tapan kimi dayanır.
      <code>IN</code> isə bütün alt sorğunu işlədib nəticəni yaddaşda saxlayır.
      Correlated subquery-lər isə hər sıra üçün ayrıca işlədiyi üçün N+1 probleminə yol aça bilər — <code>JOIN</code> ilə əvəz etmək daha yaxşıdır.
    </div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><strong>INNER JOIN</strong> — hər iki tərəfdə uyğunluq tələb edir; <strong>LEFT JOIN</strong> — sol tərəfdəki bütün sıralar (uyğunsuzluq NULL-la doldurulur)</li>
    <li>Praktikada <code>LEFT JOIN</code> ən çox istifadə olunan join növüdür — məsələn, sifarişi olmayan istifadəçiləri də göstərmək lazım olduqda</li>
    <li><code>RIGHT JOIN</code> yazan hər şeyi <code>LEFT JOIN</code> ilə yenidən yazmaq olar — cədvəl sırasını dəyişməklə; kodun oxunabilirliyi artır</li>
    <li>Subquery-dən <code>JOIN</code>-ə keçmək performansı artıra bilər; query planı <code>EXPLAIN</code> ilə yoxlayın</li>
    <li><code>EXISTS (SELECT 1 ...)</code> — mövcudluq yoxlamaq üçün <code>COUNT(*) > 0</code>-dan daha sürətli</li>
  </ul>
</div>
`,

  "db-3": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Aggregate Functions — Toplu Hesablamalar</h2>
  <p class='lesson-text'>
    Aggregate funksiyalar bir çox sıranı bir nəticəyə yığır: cəm, orta, minimum, maksimum.
    <code>GROUP BY</code> olmadan bütün cədvəl bir qrup sayılır.
  </p>
  <pre><code class='language-sql'>-- Bütün cədvəl üzərindən
SELECT
    COUNT(*)            AS total_orders,
    COUNT(DISTINCT user_id) AS unique_customers,
    SUM(total)          AS revenue,
    AVG(total)          AS avg_order,
    MIN(total)          AS min_order,
    MAX(total)          AS max_order
FROM orders;

-- ── GROUP BY — qruplara görə hesabla ─────────────────────────────
-- Hər istifadəçinin sifariş sayını və ümumi xərclərini tap
SELECT   user_id,
         COUNT(*)      AS order_count,
         SUM(total)    AS total_spent,
         ROUND(AVG(total), 2) AS avg_order
FROM     orders
GROUP BY user_id
ORDER BY total_spent DESC;

-- ── HAVING — qrup nəticələrini filter et ─────────────────────────
-- Yalnız 3-dən çox sifariş vermiş istifadəçiləri göstər
SELECT   user_id, COUNT(*) AS order_count
FROM     orders
GROUP BY user_id
HAVING   COUNT(*) > 3;

-- !! WHERE ilə HAVING fərqi:
-- WHERE → GROUP BY-dan ƏVVƏL sıraları filter edir
-- HAVING → GROUP BY-dan SONRA qrupları filter edir
SELECT   status, COUNT(*) AS cnt
FROM     orders
WHERE    created_at >= '2024-01-01'   -- əvvəlcə sıraları filtrə et
GROUP BY status
HAVING   COUNT(*) > 10;               -- sonra qrupları filtrə et</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Window Functions — Sıra Kontekstini Saxla</h2>
  <p class='lesson-text'>
    Window functions <code>GROUP BY</code>-dan fərqli olaraq sıraları birləşdirmir —
    hər sıra öz dəyərini saxlayır, sadəcə əlavə hesablanmış sütun əlavə olunur.
    <code>OVER (PARTITION BY ... ORDER BY ...)</code> ilə işləyir.
  </p>
  <pre><code class='language-sql'>-- ── ROW_NUMBER, RANK, DENSE_RANK ─────────────────────────────────
SELECT
    username,
    total_spent,
    ROW_NUMBER()   OVER (ORDER BY total_spent DESC) AS row_num,  -- unikal nömrə
    RANK()         OVER (ORDER BY total_spent DESC) AS rank,     -- bərabərlikdə boşluq buraxır (1,2,2,4)
    DENSE_RANK()   OVER (ORDER BY total_spent DESC) AS d_rank    -- boşluq buraxmır (1,2,2,3)
FROM user_stats;

-- ── PARTITION BY — qrup daxilindəki sıralama ─────────────────────
-- Hər kateqoriya daxilindəki ən bahalı 3 məhsulu tap
SELECT *
FROM (
    SELECT
        category,
        product_name,
        price,
        RANK() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank
    FROM products
) ranked
WHERE price_rank <= 3;

-- ── SUM, AVG ilə kumulyativ hesablama ────────────────────────────
SELECT
    created_at::DATE            AS day,
    daily_revenue,
    SUM(daily_revenue) OVER (ORDER BY created_at::DATE) AS running_total
FROM (
    SELECT created_at, SUM(total) AS daily_revenue
    FROM   orders
    GROUP BY created_at::DATE
) daily;

-- ── LAG / LEAD — əvvəlki / sonrakı sıraya bax ───────────────────
SELECT
    created_at::DATE        AS day,
    revenue,
    LAG(revenue)  OVER (ORDER BY created_at::DATE) AS prev_day,
    LEAD(revenue) OVER (ORDER BY created_at::DATE) AS next_day,
    revenue - LAG(revenue) OVER (ORDER BY created_at::DATE) AS diff
FROM daily_revenue;</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>String & Date Functions, CASE</h2>
  <pre><code class='language-sql'>-- ── String functions ─────────────────────────────────────────────
SELECT
    UPPER(username)                    AS upper_name,
    LOWER(email)                       AS lower_email,
    LENGTH(username)                   AS name_len,
    TRIM('  boşluq  ')                 AS trimmed,
    SUBSTRING(email FROM 1 FOR 5)      AS email_prefix,
    CONCAT(first_name, ' ', last_name) AS full_name,
    REPLACE(phone, '-', '')            AS clean_phone,
    email LIKE '%@gmail.com'           AS is_gmail
FROM users;

-- ── Date functions ───────────────────────────────────────────────
SELECT
    NOW()                              AS now,
    CURRENT_DATE                       AS today,
    created_at::DATE                   AS date_only,
    EXTRACT(YEAR  FROM created_at)     AS year,
    EXTRACT(MONTH FROM created_at)     AS month,
    DATE_TRUNC('month', created_at)    AS month_start,
    AGE(NOW(), created_at)             AS account_age,
    created_at + INTERVAL '30 days'    AS expires_at
FROM users;

-- ── CASE — şərti dəyər ──────────────────────────────────────────
SELECT
    username,
    total_spent,
    CASE
        WHEN total_spent >= 10000 THEN 'VIP'
        WHEN total_spent >= 1000  THEN 'Premium'
        WHEN total_spent >= 100   THEN 'Standard'
        ELSE 'New'
    END AS customer_tier
FROM user_stats;</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>
      <strong>COALESCE(a, b, c)</strong> — ilk NULL olmayan dəyəri qaytarır.
      <code>COALESCE(phone, email, 'N/A')</code> — phone NULL-dursa email-i, o da NULL-dursa 'N/A'-nı qaytarır.
      NULL-la işləyərkən olduqca faydalıdır.
    </div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><code>WHERE</code> GROUP BY-dan əvvəl sıraları, <code>HAVING</code> isə GROUP BY-dan sonra qrupları filtrə edir</li>
    <li>Window functions (<code>ROW_NUMBER</code>, <code>RANK</code>, <code>LAG</code>) sıraları birləşdirmədən əlavə hesablamalar edir — reporting üçün çox güclüdür</li>
    <li><code>RANK()</code> bərabərlikdə boşluq buraxır (1,2,2,4); <code>DENSE_RANK()</code> buraxmır (1,2,2,3)</li>
    <li><code>DATE_TRUNC('month', ts)</code> — ay bazlı qruplamaq üçün; <code>EXTRACT(YEAR FROM ts)</code> — il almaq üçün</li>
    <li><code>COALESCE</code> NULL dəyərlər üçün fallback vermənin ən səliqəli yoludur</li>
  </ul>
</div>
`,

  "db-4": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Index nədir və Necə İşləyir?</h2>
  <p class='lesson-text'>
    Index — cədvəldəki məlumatı sürətli tapmaq üçün ayrıca saxlanılan məlumat strukturudur.
    Kitabın sonundakı <em>indeks</em> kimi: bütün səhifələri oxumaq əvəzinə birbaşa doğru yerə gedirsən.
    Index olmadan verilənlər bazası <strong>sequential scan</strong> edir — hər sıranı yoxlayır.
  </p>
  <div class='arch-box'>
    <div style='display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:center'>
      <div>
        <div style='color:#f87171;font-weight:700;margin-bottom:8px'>Index YOX (Sequential Scan)</div>
        <ol class='steps-list'>
          <li>Hər sıranı başdan sona yoxla</li>
          <li>100 000 sıra = 100 000 oxuma</li>
          <li>O(N) mürəkkəbliyi</li>
        </ol>
      </div>
      <div style='color:#64748b;font-size:28px'>vs</div>
      <div>
        <div style='color:#4ade80;font-weight:700;margin-bottom:8px'>Index VAR (B-Tree Lookup)</div>
        <ol class='steps-list'>
          <li>B-Tree ağacını naviqasiya et</li>
          <li>100 000 sıra = ~17 addım (log₂N)</li>
          <li>O(log N) mürəkkəbliyi</li>
        </ol>
      </div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Index Yaratmaq</h2>
  <pre><code class='language-sql'>-- Sadə index (B-Tree default olaraq)
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- Unique index
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- Composite index — column sırası vacibdir!
-- (last_name, first_name) indexi:
--   ✅ WHERE last_name = 'Əliyev'
--   ✅ WHERE last_name = 'Əliyev' AND first_name = 'Ali'
--   ❌ WHERE first_name = 'Ali'  ← yalnız sağ tərəf = index işləmir
CREATE INDEX idx_name ON users(last_name, first_name);

-- Partial index — yalnız aktiv istifadəçiləri indeksləmək
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';

-- Expression index
CREATE INDEX idx_lower_email ON users(LOWER(email));

-- Index silmək
DROP INDEX idx_orders_user_id;

-- Mövcud indexlərə baxmaq
SELECT indexname, indexdef FROM pg_indexes
WHERE tablename = 'users';</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>EXPLAIN ANALYZE — Query Planını Oxumaq</h2>
  <p class='lesson-text'>
    <code>EXPLAIN</code> sorğunun necə icra olunacağını göstərir (plan).
    <code>EXPLAIN ANALYZE</code> sorğunu həqiqətən icra edir və real vaxtı bildirir.
  </p>
  <pre><code class='language-sql'>EXPLAIN ANALYZE
SELECT * FROM orders WHERE user_id = 42;

-- Nəticə:
-- Index Scan using idx_orders_user_id on orders
--   (cost=0.42..8.45 rows=3 width=72)
--   (actual time=0.021..0.025 rows=3 loops=1)
-- Planning time: 0.3 ms
-- Execution time: 0.1 ms
--
-- Əsas terminlər:
-- Seq Scan       → bütün cədvəli oxuyur (index yoxdur/işlətmir)
-- Index Scan     → indexi istifadə edir (heap-ə gedir, tam row oxuyur)
-- Index Only Scan→ index sütununu birbaşa qaytarır (heap-ə getmir — ən sürətli)
-- Bitmap Scan    → çoxlu sıra tapdıqda index+heap kombinasiyası
-- Hash Join      → böyük cədvəlləri birləşdirmək üçün</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Index Anti-Patterns — Index İşləmədiyi Hallar</h2>
  <div class='feature-list'>
    <div class='feature-item'>
      <div class='feature-icon'>❌</div>
      <div>
        <strong>Sütuna funksiya tətbiq etmək</strong>
        <p><code>WHERE LOWER(email) = 'ali@...'</code> — index işləmir. Həll: <code>CREATE INDEX ON users(LOWER(email))</code> expression index yarat.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>❌</div>
      <div>
        <strong>LIKE '%söz%' (baş wildcard)</strong>
        <p><code>WHERE name LIKE '%əliyev%'</code> — B-Tree bunu istifadə edə bilmir. Həll: Full-text search (<code>to_tsvector</code>) və ya GIN index.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>❌</div>
      <div>
        <strong>Aşağı cardinality</strong>
        <p><code>status</code> sütununda yalnız 2-3 dəyər varsa (<code>'active'/'inactive'</code>), index planner tərəfindən nəzərə alınmaya bilər. Partial index daha effektivdir.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>❌</div>
      <div>
        <strong>Composite index-in yanlış sırası</strong>
        <p><code>INDEX (a, b)</code> — <code>WHERE a = ?</code> işləyir, <code>WHERE b = ?</code> işləmir. <em>Sol prefiksdən başlanmalıdır.</em></p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>❌</div>
      <div>
        <strong>Həddən çox index</strong>
        <p>Hər index <code>INSERT/UPDATE/DELETE</code>-i yavaşlatır — hər yazma zamanı index də yenilənir. Yalnız sorğuların tələb etdiyi indexlər olsun.</p>
      </div>
    </div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>B-Tree index — <code>=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>BETWEEN</code>, <code>ORDER BY</code>, <code>LIKE 'söz%'</code> üçün işləyir; <code>LIKE '%söz%'</code> üçün işləmir</li>
    <li>Composite index-də sütun sırası kritikdir: <code>(a, b, c)</code> — <code>WHERE a=?</code> ✅, <code>WHERE b=?</code> ❌</li>
    <li>PRIMARY KEY və UNIQUE constraint-lər avtomatik index yaradır — əl ilə yaratmağa ehtiyac yoxdur</li>
    <li><code>EXPLAIN ANALYZE</code> — <em>Seq Scan</em> gördükdə şübhəli olun; <em>Index Only Scan</em> ən sürətlisidir</li>
    <li>Foreign Key sütunlarına index əlavə etmək (<code>orders.user_id</code>) JOIN sürətini kəskin artırır</li>
  </ul>
</div>
`,

  "db-5": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Transaction nədir?</h2>
  <p class='lesson-text'>
    Transaction bir vahid iş kimi icra edilən bir neçə SQL əməliyyatıdır.
    Ya hamısı uğurla tamamlanır (<code>COMMIT</code>), ya da hamısı ləğv edilir (<code>ROLLBACK</code>).
    Klassik misal: bank köçürməsi. Ali-nin hesabından 100₼ çıx, Leylanın hesabına 100₼ əlavə et.
    Bu iki əməliyyat ya ikisi də baş verməlidir, ya da heç biri.
  </p>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>ACID — Transaction-ın 4 Xüsusiyyəti</h2>
  <div class='feature-list'>
    <div class='feature-item'>
      <div class='feature-icon'>⚛️</div>
      <div>
        <strong>Atomicity — Bölünməzlik</strong>
        <p>Transaction ya tamamilə tamamlanır, ya da tamamilə ləğv edilir. Aralıq vəziyyət mümkün deyil. Elektrik kəsildikdə yarımçıq qalan əməliyyat avtomatik geri qaytarılır.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>✅</div>
      <div>
        <strong>Consistency — Ardıcıllıq</strong>
        <p>Transaction bazanı bir etibarlı vəziyyətdən başqa bir etibarlı vəziyyətə aparır. Bütün constraint-lər (NOT NULL, FK, CHECK) hər zaman qorunur.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🔒</div>
      <div>
        <strong>Isolation — Təcrid</strong>
        <p>Paralel işləyən transaction-lar bir-birinin yarımçıq dəyişikliklərini görmür. Isolation level-ə görə görünürlük dərəcəsi fərqlidir.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>💾</div>
      <div>
        <strong>Durability — Davamlılıq</strong>
        <p>COMMIT-dən sonra məlumat diskinə yazılmış sayılır. Sistem çöksə belə məlumat itirilmir (WAL — Write-Ahead Log vasitəsilə).</p>
      </div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Transaction-ı İdarə Etmək</h2>
  <pre><code class='language-sql'>-- ── Sadə transaction nümunəsi ────────────────────────────────────
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;

-- Hər şey qaydasındadırsa saxla
COMMIT;

-- Xəta baş verdikdə ləğv et
-- ROLLBACK;

-- ── SAVEPOINT — qismən geri qayıt ───────────────────────────────
BEGIN;
  INSERT INTO orders (user_id, total) VALUES (1, 500);
  SAVEPOINT after_order;

  INSERT INTO order_items (order_id, product_id) VALUES (currval('orders_id_seq'), 99);
  -- xəta baş verdi, yalnız item-i geri qaytar, order-i saxla
  ROLLBACK TO SAVEPOINT after_order;

COMMIT;  -- order saxlanır, item isə yox</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Isolation Levels — Paralel Transaction Problemləri</h2>
  <p class='lesson-text'>
    Isolation level yüksəldikcə paralellık azalır, amma data doğruluğu artır.
    PostgreSQL default-u <strong>Read Committed</strong>-dir.
  </p>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Problem növləri</div>
      <ul>
        <li><strong>Dirty Read</strong> — başqa transaction-ın hələ commit etmədiyi dəyişikliyi görmək</li>
        <li><strong>Non-repeatable Read</strong> — eyni sorğunu iki dəfə işlədib fərqli nəticə almaq (aralıqda UPDATE baş verdi)</li>
        <li><strong>Phantom Read</strong> — eyni sorğuya yeni sıraların əlavə olunması (aralıqda INSERT baş verdi)</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Isolation Level-lər</div>
      <ul>
        <li><strong>Read Uncommitted</strong> — bütün problemlər mümkündür (PostgreSQL-də Read Committed kimi davranır)</li>
        <li><strong>Read Committed</strong> — Dirty Read yoxdur; default level</li>
        <li><strong>Repeatable Read</strong> — Dirty + Non-repeatable yoxdur; Phantom mümkündür</li>
        <li><strong>Serializable</strong> — heç bir problem yoxdur; ən yavaş</li>
      </ul>
    </div>
  </div>
  <pre><code class='language-sql'>-- Isolation level təyin etmək
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
  SELECT balance FROM accounts WHERE user_id = 1;
  -- ... digər əməliyyatlar
COMMIT;

-- Cari session üçün default-u dəyiş
SET default_transaction_isolation = 'serializable';</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Deadlock</h2>
  <p class='lesson-text'>
    Deadlock — iki transaction-ın bir-birinin kilidlənmiş resurslarını gözlədiyi vəziyyətdir.
    Verilənlər bazası bunu avtomatik aşkar edib birini ləğv edir (<code>ERROR: deadlock detected</code>).
  </p>
  <pre><code class='language-sql'>-- Transaction A:
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;  -- A, 1-i kilidləyir
-- ... gözləyir ki B, 2-ni buraxsın
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Transaction B (eyni anda):
BEGIN;
UPDATE accounts SET balance = balance - 50 WHERE id = 2;   -- B, 2-ni kilidləyir
-- ... gözləyir ki A, 1-i buraxsın
UPDATE accounts SET balance = balance + 50 WHERE id = 1;

-- DB deadlock aşkar edir → B-ni ROLLBACK edir, A tamamlanır</code></pre>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>
      <strong>Deadlock-dan qaçmaq üçün:</strong> Bütün transaction-larda resursları <em>eyni sırada</em> kilidləyin.
      Yuxarıdakı misalda hər ikisi əvvəlcə <code>id = 1</code>, sonra <code>id = 2</code>-ni yeniləsəydi, deadlock baş verməzdi.
    </div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><strong>ACID</strong>: Atomicity (ya hamısı ya heç biri), Consistency (qaydalar qorunur), Isolation (paralel TX bir-birindən görünmür), Durability (COMMIT = disk)</li>
    <li>PostgreSQL default isolation level-i <strong>Read Committed</strong>-dir — çox halda kifayət edir</li>
    <li><code>SAVEPOINT</code> ilə transaction-ın bir hissəsini geri qaytara bilərsiniz (JDBC: <code>conn.setSavepoint()</code>)</li>
    <li>Deadlock-dan qaçmaq üçün bütün transaction-larda resursları eyni sırada kilidləyin</li>
    <li>Bank, ödəniş, inventar kimi kritik əməliyyatlar həmişə explicit transaction içində olmalıdır</li>
  </ul>
</div>
`,

  "db-6": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>JDBC — Java ilə Verilənlər Bazasına Qoşulmaq</h2>
  <p class='lesson-text'>
    JDBC (Java Database Connectivity) Java-nın verilənlər bazası ilə işləmək üçün standart API-dir.
    PostgreSQL, MySQL, Oracle — hansı verilənlər bazasını istifadə etməyinizdən asılı olmayaraq eyni API ilə işləyirsiniz.
    Yalnız JDBC driver dəyişir.
  </p>
  <div class='arch-box'>
    <div class='arch-flow' style='gap:10px'>
      <div class='arch-node accent'>Java App</div>
      <div class='arch-arrow'>→</div>
      <div class='arch-node accent'>JDBC API<br><small>java.sql.*</small></div>
      <div class='arch-arrow'>→</div>
      <div class='arch-node accent'>JDBC Driver<br><small>postgresql-42.x.jar</small></div>
      <div class='arch-arrow'>→</div>
      <div class='arch-node accent'>PostgreSQL<br><small>port 5432</small></div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>JDBC Maven Asılılıqları</h2>
  <pre><code class='language-xml'>&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.postgresql&lt;/groupId&gt;
    &lt;artifactId&gt;postgresql&lt;/artifactId&gt;
    &lt;version&gt;42.7.3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Connection, Statement, ResultSet</h2>
  <pre><code class='language-java'>import java.sql.*;

public class JdbcDemo {

    private static final String URL  = "jdbc:postgresql://localhost:5432/mydb";
    private static final String USER = "postgres";
    private static final String PASS = "secret";

    // ── Bütün istifadəçiləri oxumaq ──────────────────────────────
    public List&lt;User&gt; findAll() throws SQLException {
        List&lt;User&gt; users = new ArrayList&lt;&gt;();

        // try-with-resources — auto-close təmin edir
        try (Connection conn = DriverManager.getConnection(URL, USER, PASS);
             Statement  stmt = conn.createStatement();
             ResultSet  rs   = stmt.executeQuery("SELECT id, username, email FROM users")) {

            while (rs.next()) {
                users.add(new User(
                    rs.getLong("id"),
                    rs.getString("username"),
                    rs.getString("email")
                ));
            }
        }
        return users;
    }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>PreparedStatement — SQL Injection Önləmə</h2>
  <p class='lesson-text'>
    <code>Statement</code> istifadəçi daxil etdiyi dəyəri SQL-ə birbaşa yapışdırır — SQL Injection-a açıqdır.
    <code>PreparedStatement</code> parametrləri ayrıca ötürür — xəta olmaz, performans yüksək olar.
    Production-da <strong>həmişə PreparedStatement</strong> istifadə edin.
  </p>
  <pre><code class='language-java'>// !! YANLIŞ — SQL Injection riski var
String sql = "SELECT * FROM users WHERE email = '" + email + "'";
// email = "' OR '1'='1" → bütün istifadəçiləri qaytarar!

// ✅ DOĞRU — PreparedStatement
public Optional&lt;User&gt; findByEmail(String email) throws SQLException {
    String sql = "SELECT id, username, email FROM users WHERE email = ?";

    try (Connection conn = DriverManager.getConnection(URL, USER, PASS);
         PreparedStatement ps = conn.prepareStatement(sql)) {

        ps.setString(1, email);  // ? yerinə dəyər qoy (1-based index)

        try (ResultSet rs = ps.executeQuery()) {
            if (rs.next()) {
                return Optional.of(new User(
                    rs.getLong("id"),
                    rs.getString("username"),
                    rs.getString("email")
                ));
            }
        }
    }
    return Optional.empty();
}

// INSERT nümunəsi
public long insertUser(String username, String email) throws SQLException {
    String sql = "INSERT INTO users (username, email) VALUES (?, ?) RETURNING id";

    try (Connection conn = DriverManager.getConnection(URL, USER, PASS);
         PreparedStatement ps = conn.prepareStatement(sql)) {

        ps.setString(1, username);
        ps.setString(2, email);

        try (ResultSet rs = ps.executeQuery()) {
            rs.next();
            return rs.getLong("id");
        }
    }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Transaction Management JDBC ilə</h2>
  <pre><code class='language-java'>public void transfer(long fromId, long toId, BigDecimal amount) throws SQLException {
    try (Connection conn = DriverManager.getConnection(URL, USER, PASS)) {

        conn.setAutoCommit(false);  // default true-dur, söndürürük

        try {
            // 1. Çıxar
            try (PreparedStatement ps = conn.prepareStatement(
                    "UPDATE accounts SET balance = balance - ? WHERE id = ?")) {
                ps.setBigDecimal(1, amount);
                ps.setLong(2, fromId);
                ps.executeUpdate();
            }

            // 2. Əlavə et
            try (PreparedStatement ps = conn.prepareStatement(
                    "UPDATE accounts SET balance = balance + ? WHERE id = ?")) {
                ps.setBigDecimal(1, amount);
                ps.setLong(2, toId);
                ps.executeUpdate();
            }

            conn.commit();  // hər şey qaydasındadırsa saxla

        } catch (SQLException e) {
            conn.rollback();  // xəta baş verdisə geri qaytar
            throw e;
        }
    }
}</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Batch Operations — Kütləvi Yazma</h2>
  <pre><code class='language-java'>// Minlərlə sıranı tək-tək INSERT etmək çox yavaşdır.
// Batch ilə hamısını bir gedişdə göndər.
public void insertBatch(List&lt;User&gt; users) throws SQLException {
    String sql = "INSERT INTO users (username, email) VALUES (?, ?)";

    try (Connection conn = DriverManager.getConnection(URL, USER, PASS);
         PreparedStatement ps = conn.prepareStatement(sql)) {

        conn.setAutoCommit(false);

        for (int i = 0; i &lt; users.size(); i++) {
            ps.setString(1, users.get(i).getUsername());
            ps.setString(2, users.get(i).getEmail());
            ps.addBatch();  // batch-ə əlavə et

            if (i % 1000 == 0) {
                ps.executeBatch();  // hər 1000-də bir göndər
                ps.clearBatch();
            }
        }

        ps.executeBatch();  // qalan-ları göndər
        conn.commit();
    }
}</code></pre>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li><strong>PreparedStatement</strong> istifadəçi daxil etdiyi dəyərləri parametr kimi qəbul edir — SQL Injection mümkün deyil; həm də sürətlidir (query plan cache-lənir)</li>
    <li><code>try-with-resources</code> — <code>Connection</code>, <code>PreparedStatement</code>, <code>ResultSet</code> həmişə auto-close olmalıdır; əks halda connection leak yaranır</li>
    <li><code>conn.setAutoCommit(false)</code> ilə manual transaction idarə edin; <code>catch</code> blokunda <code>rollback()</code> çağırmağı unutmayın</li>
    <li>Kütləvi məlumat yazarkən <code>addBatch()</code> + <code>executeBatch()</code> istifadə edin — 10x-100x daha sürətli ola bilir</li>
    <li>Real layihələrdə JDBC-ni birbaşa işlətmək əvəzinə <strong>HikariCP</strong> (connection pool) + <strong>Spring JDBC / JPA</strong> istifadə edin</li>
  </ul>
</div>
`,

  "db-7": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Connection Pool nədir?</h2>
  <p class='lesson-text'>
    Hər JDBC sorğusu üçün yeni TCP connection açmaq baha başa gəlir: authentication, SSL handshake,
    driver init — <strong>50-100 ms</strong> vaxt alır. Yüksək yüklü sistemlərdə bu kabusa çevrilir.
  </p>
  <p class='lesson-text'>
    Connection Pool əvvəlcədən bir neçə connection açır, onları hazır vəziyyətdə saxlayır.
    Sorğu gəldikcə mövcud connection verilir, sorğu bitdikdə geri qaytarılır — <strong>bağlanmır</strong>.
  </p>
  <div class='arch-box'>
    <div class='arch-flow' style='gap:8px;flex-wrap:wrap'>
      <div class='arch-node accent'>Request 1</div>
      <div class='arch-node accent'>Request 2</div>
      <div class='arch-node accent'>Request 3</div>
      <div class='arch-arrow'>→<small>borrow</small></div>
      <div class='arch-node' style='min-width:180px;text-align:center'>
        HikariCP Pool
        <small>conn1 · conn2 · conn3 · conn4 · conn5</small>
      </div>
      <div class='arch-arrow'>→<small>TCP</small></div>
      <div class='arch-node accent'>PostgreSQL<br><small>port 5432</small></div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>HikariCP — Maven &amp; Konfigurasiya</h2>
  <pre><code class='language-xml'>&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.zaxxer&lt;/groupId&gt;
    &lt;artifactId&gt;HikariCP&lt;/artifactId&gt;
    &lt;version&gt;5.1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
  <pre><code class='language-java'>import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class DataSourceFactory {

    public static HikariDataSource createDataSource() {
        HikariConfig config = new HikariConfig();

        config.setJdbcUrl("jdbc:postgresql://localhost:5432/mydb");
        config.setUsername("postgres");
        config.setPassword("secret");

        // Pool ölçüsü — vacib parametrlər
        config.setMaximumPoolSize(10);     // maksimum connection sayı
        config.setMinimumIdle(5);          // boşta saxlanan minimum connection
        config.setConnectionTimeout(30_000);  // 30 san gözlə, sonra xəta ver
        config.setIdleTimeout(600_000);       // boşta olan connection 10 dəqiqədən sonra bağlanır
        config.setMaxLifetime(1_800_000);     // connection 30 dəqiqədən çox yaşamır

        // Performans üçün
        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");

        config.setPoolName("MyAppPool");

        return new HikariDataSource(config);
    }
}

// İstifadə — DataSource-dan connection al
DataSource ds = DataSourceFactory.createDataSource();

try (Connection conn = ds.getConnection();
     PreparedStatement ps = conn.prepareStatement("SELECT 1")) {
    ps.executeQuery();  // connection pool-dan gəlir
}
// try bağlandıqda connection pool-a qayıdır, bağlanmır</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Spring Boot ilə HikariCP</h2>
  <p class='lesson-text'>Spring Boot 2.x+ HikariCP-ni default connection pool kimi gətirir — ayrıca əlavə etməyə ehtiyac yoxdur.</p>
  <pre><code class='language-properties'># application.properties
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=postgres
spring.datasource.password=secret
spring.datasource.driver-class-name=org.postgresql.Driver

# HikariCP konfiqurasiyası
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.connection-timeout=30000
spring.datasource.hikari.idle-timeout=600000
spring.datasource.hikari.max-lifetime=1800000
spring.datasource.hikari.pool-name=SpringAppPool</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Pool Sizing — Neçə Connection Lazımdır?</h2>
  <p class='lesson-text'>
    HikariCP-nin yaradıcısı <strong>Brett Wooldridge</strong>-in formulası:
  </p>
  <div class='arch-box'>
    <div style='text-align:center;padding:8px'>
      <div style='font-size:20px;font-weight:700;color:#60a5fa;margin-bottom:12px'>
        Pool size = T<sub>n</sub> × (C<sub>m</sub> – 1) + 1
      </div>
      <div style='display:grid;grid-template-columns:auto 1fr;gap:6px 16px;text-align:left;max-width:400px;margin:0 auto;font-size:14px;color:#94a3b8'>
        <span style='color:#e2e8f0;font-weight:600'>T<sub>n</sub></span><span>Paralel thread (request) sayı</span>
        <span style='color:#e2e8f0;font-weight:600'>C<sub>m</sub></span><span>Hər request-in eyni anda istifadə etdiyi max connection</span>
      </div>
      <div style='margin-top:12px;color:#64748b;font-size:13px'>
        Misal: 10 thread, hər biri max 2 connection → 10 × (2-1) + 1 = <strong style='color:#4ade80'>11 connection</strong>
      </div>
    </div>
  </div>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'>
      <strong>Böyük pool = yaxşı</strong> — bu yanlış düşüncədir. PostgreSQL hər connection üçün ayrı process işlədir.
      1000 connection = 1000 process = çox RAM + context switch. Kiçik pool + gözlətmə siyasəti daha effektivdir.
    </div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Connection pool olmadan hər request yeni TCP bağlantısı açır — 50-100ms overhead; pool ilə microsecond-lar</li>
    <li>Spring Boot HikariCP-ni default gətirir — <code>spring.datasource.hikari.*</code> ilə konfiqurasiya kifayətdir</li>
    <li><code>maximumPoolSize</code> CPU core sayının 2-4x qədər olması ümumi tövsiyədir; benchmark ilə müəyyənləşdirin</li>
    <li><code>connectionTimeout</code> — connection almaq üçün max gözlə; bu aşılarsa istifadəçiyə 503 göstər</li>
    <li>HikariCP JMX/Micrometer ilə monitoring dəstəkləyir — Spring Boot Actuator vasitəsilə pool statistikasına baxın</li>
  </ul>
</div>
`,

  "db-8": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>NoSQL nədir?</h2>
  <p class='lesson-text'>
    NoSQL (<em>Not Only SQL</em>) — klassik relational modeldən fərqli məlumat saxlama yanaşmalarını ifadə edən ümumi termindir.
    Sabit schema yoxdur, horizontal scaling asandır, spesifik istifadə ssenariləri üçün SQL-dən daha sürətli ola bilər.
    Amma bu, SQL-in zəif olduğu mənasına gəlmir — hər ikisinin öz güclü tərəfləri var.
  </p>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>SQL vs NoSQL — Müqayisə</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>SQL (Relational)</div>
      <ul>
        <li>Sabit schema (cədvəl strukturu)</li>
        <li>ACID transaction dəstəyi</li>
        <li>Güclü JOIN imkanları</li>
        <li>Vertical scaling (daha güclü server)</li>
        <li>Yaxşı normalizasiya — data duplication yoxdur</li>
        <li>Nümunələr: PostgreSQL, MySQL, Oracle, MSSQL</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>NoSQL</div>
      <ul>
        <li>Çevik/schema-less (hər document fərqli ola bilər)</li>
        <li>Adətən eventual consistency (BASE model)</li>
        <li>JOIN yoxdur — embed ya da application-level birləşdirmə</li>
        <li>Horizontal scaling (çox server — sharding)</li>
        <li>Sürətli write/read — denormalizasiya kabul edilir</li>
        <li>Nümunələr: MongoDB, Redis, Cassandra, Neo4j</li>
      </ul>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>NoSQL Tipləri</h2>
  <div class='feature-list'>
    <div class='feature-item'>
      <div class='feature-icon'>📄</div>
      <div>
        <strong>Document — MongoDB, CouchDB</strong>
        <p>Məlumatı JSON/BSON sənəd şəklində saxlayır. Hər sənəd fərqli sahəyə sahib ola bilər. Nested obyektlər, massivlər dəstəklənir. E-commerce kataloq, blog post, istifadəçi profili kimi mürəkkəb obyektlər üçün idealdır.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🗝️</div>
      <div>
        <strong>Key-Value — Redis, DynamoDB</strong>
        <p>Ən sadə model: hər key-in bir value-su var. Redis RAM-da saxladığı üçün nanosecond latency verir. Session idarəetməsi, caching, rate limiting, pub/sub üçün standart seçimdir.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>📊</div>
      <div>
        <strong>Wide-Column — Cassandra, HBase</strong>
        <p>Cədvəl strukturuna bənzəyir amma hər sıranın fərqli sütunları ola bilər. Petabyte məlumat, yüksək write throughput, zaman seriyaları (IoT, log, analitika) üçün istifadə olunur.</p>
      </div>
    </div>
    <div class='feature-item'>
      <div class='feature-icon'>🕸️</div>
      <div>
        <strong>Graph — Neo4j, Amazon Neptune</strong>
        <p>Qovşaqlar (node) və kənarlar (edge) ilə mürəkkəb əlaqə şəbəkələrini saxlayır. Sosial şəbəkə (dostlar), tövsiyə mühərrikləri (Amazon "bu məhsulu alanlar X-i də aldı"), fraud detection üçün idealdır.</p>
      </div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>CAP Teoremi</h2>
  <p class='lesson-text'>
    Distributed sistem üçün Eric Brewer-in teoremi: eyni anda üçündən yalnız ikisini təmin etmək mümkündür.
  </p>
  <div class='arch-box'>
    <div style='display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;text-align:center'>
      <div style='background:#1e3a5f;border:1px solid #3b82f6;border-radius:8px;padding:14px'>
        <div style='font-size:22px'>🔄</div>
        <div style='color:#60a5fa;font-weight:700;margin:6px 0'>Consistency</div>
        <div style='color:#94a3b8;font-size:12px'>Bütün node-lar eyni anda eyni məlumatı görür</div>
      </div>
      <div style='background:#1a3d2e;border:1px solid #22c55e;border-radius:8px;padding:14px'>
        <div style='font-size:22px'>⚡</div>
        <div style='color:#4ade80;font-weight:700;margin:6px 0'>Availability</div>
        <div style='color:#94a3b8;font-size:12px'>Sistem həmişə cavab verir (timeout olmur)</div>
      </div>
      <div style='background:#3d2a1a;border:1px solid #f59e0b;border-radius:8px;padding:14px'>
        <div style='font-size:22px'>🌐</div>
        <div style='color:#fbbf24;font-weight:700;margin:6px 0'>Partition Tolerance</div>
        <div style='color:#94a3b8;font-size:12px'>Şəbəkə kəsilsə belə sistem işləyir</div>
      </div>
    </div>
    <div style='margin-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px'>
      <div style='padding:10px;border:1px solid var(--border);border-radius:6px'>
        <strong style='color:#60a5fa'>CP sistemlər</strong> (C + P): MongoDB, HBase, Zookeeper
        <div style='color:#94a3b8;margin-top:4px'>Şəbəkə bölünəndə availability qurban verilir</div>
      </div>
      <div style='padding:10px;border:1px solid var(--border);border-radius:6px'>
        <strong style='color:#4ade80'>AP sistemlər</strong> (A + P): Cassandra, CouchDB, DynamoDB
        <div style='color:#94a3b8;margin-top:4px'>Şəbəkə bölünəndə consistency qurban verilir (eventual consistency)</div>
      </div>
    </div>
  </div>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>
      <strong>CA sistemlər</strong> (C + A): Klassik RDBMS (PostgreSQL, MySQL) — amma bu yalnız single-node-dur.
      Distributed mühitdə Partition Tolerance olmadan işləmək mümkün deyil, ona görə həmişə CP ya AP seçilir.
    </div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>NoSQL = "SQL əvəzinə" yox, "SQL ilə yanaşı" — çox layihədə hər ikisi birlikdə istifadə olunur (PostgreSQL + Redis)</li>
    <li><strong>Redis</strong> — caching, session, rate limit; <strong>MongoDB</strong> — çevik schema, sənəd; <strong>Cassandra</strong> — böyük yazma yükü; <strong>Neo4j</strong> — əlaqə şəbəkəsi</li>
    <li>CAP teoremi: distributed sistemdə Consistency, Availability, Partition Tolerance-dan yalnız ikisini eyni anda vermək mümkündür</li>
    <li>Backend developer kimi SQL-i dərindən bilin — NoSQL istifadə edəndə belə çox şeyi daha yaxşı anlayırsınız</li>
    <li>Texnologiya seçimi istifadə ssenarisindən asılıdır: dəyişməyən struktur + ACID → SQL; yüksək write + scale → NoSQL</li>
  </ul>
</div>
`,

  "db-9": `
<div class='lesson-section'>
  <h2 class='lesson-h2'>Database Migration nədir?</h2>
  <p class='lesson-text'>
    Layihə böyüdükcə verilənlər bazası sxemi dəyişir: yeni sütun əlavə olunur, indeks yaranır, cədvəl adı dəyişir.
    Bu dəyişiklikləri əl ilə icra etmək risklidir — kimlər etdi, sıra düzgün idimi, test mühitinə tətbiq olundumu?
  </p>
  <p class='lesson-text'>
    <strong>Database migration tool</strong> bu dəyişiklikləri versiyonlaşdırır, ardıcıl icra edir,
    hansı migration-ların tətbiq olunduğunu baza daxilindəki izləmə cədvəlində saxlayır.
    Flyway və Liquibase bu sahənin iki əsas alətdir.
  </p>
  <div class='arch-box'>
    <div class='arch-flow' style='gap:8px'>
      <div class='arch-node accent'>V1__init.sql<br><small>CREATE TABLE users</small></div>
      <div class='arch-arrow'>→</div>
      <div class='arch-node accent'>V2__add_index.sql<br><small>CREATE INDEX</small></div>
      <div class='arch-arrow'>→</div>
      <div class='arch-node accent'>V3__add_phone.sql<br><small>ALTER TABLE</small></div>
      <div class='arch-arrow'>→</div>
      <div class='arch-node'>DB sxemi<br><small>güncel vəziyyət</small></div>
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Flyway — Versiyonlu Migration</h2>
  <p class='lesson-text'>
    Flyway SQL fayllarını adlandırma konvensiyasına görə avtomatik tapıb ardıcıl tətbiq edir.
    Tətbiq olunan migration-lar <code>flyway_schema_history</code> cədvəlindən izlənir.
  </p>
  <pre><code class='language-xml'>&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.flywaydb&lt;/groupId&gt;
    &lt;artifactId&gt;flyway-core&lt;/artifactId&gt;
    &lt;version&gt;10.13.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.flywaydb&lt;/groupId&gt;
    &lt;artifactId&gt;flyway-database-postgresql&lt;/artifactId&gt;
    &lt;version&gt;10.13.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
  <p class='lesson-text'>Migration faylları <code>src/main/resources/db/migration/</code> qovluğuna yerləşdirilir:</p>
  <pre><code class='language-bash'>src/main/resources/db/migration/
├── V1__create_users_table.sql
├── V2__create_orders_table.sql
├── V3__add_phone_to_users.sql
└── V4__create_idx_orders_user_id.sql</code></pre>
  <pre><code class='language-sql'>-- V1__create_users_table.sql
CREATE TABLE users (
    id         BIGSERIAL    PRIMARY KEY,
    username   VARCHAR(50)  NOT NULL UNIQUE,
    email      VARCHAR(255) NOT NULL UNIQUE,
    status     VARCHAR(20)  NOT NULL DEFAULT 'active',
    created_at TIMESTAMP    NOT NULL DEFAULT NOW()
);

-- V2__create_orders_table.sql
CREATE TABLE orders (
    id         BIGSERIAL       PRIMARY KEY,
    user_id    BIGINT          NOT NULL REFERENCES users(id),
    total      NUMERIC(10, 2)  NOT NULL DEFAULT 0,
    created_at TIMESTAMP       NOT NULL DEFAULT NOW()
);

-- V3__add_phone_to_users.sql
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

-- V4__create_idx_orders_user_id.sql
CREATE INDEX idx_orders_user_id ON orders(user_id);</code></pre>
  <pre><code class='language-properties'># application.properties — Spring Boot avtomatik başlanğıcda Flyway işlədir
spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration
spring.flyway.baseline-on-migrate=true   # mövcud DB-yə ilk dəfə tətbiq etmək üçün</code></pre>
  <div class='note note-warn'>
    <span class='note-icon'>⚠️</span>
    <div class='note-body'>
      <strong>Flyway qaydası:</strong> Tətbiq olunan migration faylını dəyişdirmək olmaz — Flyway checksum yoxlayır
      və uyğunsuzluq tapsa xəta verir. Düzəltmə üçün yeni migration faylı yaradın.
    </div>
  </div>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Liquibase — XML/YAML/SQL Dəstəyi</h2>
  <p class='lesson-text'>
    Liquibase migration-ları <code>changeset</code> adlanan bloklarla idarə edir.
    SQL, XML, YAML, JSON formatlarını dəstəkləyir. Hər changeset-in <code>id</code> + <code>author</code> kombinasiyası unikaldır.
  </p>
  <pre><code class='language-xml'>&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.liquibase&lt;/groupId&gt;
    &lt;artifactId&gt;liquibase-core&lt;/artifactId&gt;
    &lt;version&gt;4.27.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
  <pre><code class='language-xml'>&lt;!-- src/main/resources/db/changelog/db.changelog-master.xml --&gt;
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-4.27.xsd"&gt;

    &lt;!-- Digər changelog fayllarını birləşdir --&gt;
    &lt;include file="db/changelog/001-create-users.xml"/&gt;
    &lt;include file="db/changelog/002-create-orders.xml"/&gt;

    &lt;!-- Changeset birbaşa burada da yaza bilərsiniz --&gt;
    &lt;changeSet id="003-add-phone" author="ali"&gt;
        &lt;addColumn tableName="users"&gt;
            &lt;column name="phone" type="VARCHAR(20)"/&gt;
        &lt;/addColumn&gt;
        &lt;rollback&gt;
            &lt;dropColumn tableName="users" columnName="phone"/&gt;
        &lt;/rollback&gt;
    &lt;/changeSet&gt;

&lt;/databaseChangeLog&gt;</code></pre>
  <pre><code class='language-properties'># application.properties
spring.liquibase.change-log=classpath:db/changelog/db.changelog-master.xml
spring.liquibase.enabled=true</code></pre>
</div>

<div class='lesson-section'>
  <h2 class='lesson-h2'>Flyway vs Liquibase — Hansını Seçmək?</h2>
  <div class='compare-grid'>
    <div class='compare-col'>
      <div class='compare-label compare-label-blue'>Flyway</div>
      <ul>
        <li>Sadə, öyrənməsi asan</li>
        <li>Yalnız SQL (və ya Java) formatı</li>
        <li>Fayl adı = versiya (<code>V1__</code>)</li>
        <li>Dəyişdirilmiş fayl aşkarlanır (checksum)</li>
        <li>Rollback yalnız Pro versiyada (pullu)</li>
        <li>Seçin: SQL yetər, sadəlik lazımdır</li>
      </ul>
    </div>
    <div class='compare-col'>
      <div class='compare-label compare-label-orange'>Liquibase</div>
      <ul>
        <li>Daha çevik, geniş imkanlar</li>
        <li>XML, YAML, JSON, SQL formatları</li>
        <li>Changeset = id + author kombinasiyası</li>
        <li>Rollback dəstəyi pulsuz versiyada da var</li>
        <li>DB-agnostic (bir changelog bir neçə DB-yə)</li>
        <li>Seçin: rollback kritikdir, böyük komanda var</li>
      </ul>
    </div>
  </div>
  <div class='note note-tip'>
    <span class='note-icon'>💡</span>
    <div class='note-body'>
      Startup layihələrinin əksəriyyəti <strong>Flyway</strong> seçir — Spring Initializr-dən rahat əlavə olunur,
      SQL bildiyiniz yetər. Böyük enterprise layihələrdə rollback imkanı vacibdirsə <strong>Liquibase</strong> üstünlük qazanır.
    </div>
  </div>
</div>

<div class='summary-box'>
  <div class='summary-box-title'>🎯 Əsas Məqamlar</div>
  <ul class='summary-list'>
    <li>Migration tool olmadan team-də kim nə dəyişdirdi, hansı mühitdə tətbiq olundu — izləmək mümkün deyil</li>
    <li>Flyway: <code>V{versiya}__{açıqlama}.sql</code> adlandırma qaydası; <code>src/main/resources/db/migration/</code> qovluğu</li>
    <li>Tətbiq olunan Flyway faylını <strong>heç vaxt dəyişdirməyin</strong> — checksum xətası verir; yeni versiya faylı əlavə edin</li>
    <li>Liquibase rollback dəstəkləyir — <code>&lt;rollback&gt;</code> bloku yazılırsa migration geri alına bilər</li>
    <li>Spring Boot hər başlanğıcda pending migration-ları avtomatik tətbiq edir — CI/CD pipeli-ndə çox rahatdır</li>
  </ul>
</div>
`,
};
