<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Geeth Senavirathna — Portfolio</title>
  <meta name="description" content="Portfolio of Geeth Senavirathna — Software Engineering student and developer." />
  <meta name="theme-color" content="#0ea5e9" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg: #0b0f14;
      --panel:#0f1720;
      --card:#111927;
      --text:#e5eef8;
      --muted:#9fb3c8;
      --brand:#0ea5e9;
      --ring: rgba(14,165,233,.35);
      --border:#1e293b;
      --shadow: 0 10px 25px rgba(0,0,0,.35);
    }
    :root.light{
      --bg:#f8fafc;
      --panel:#ffffff;
      --card:#ffffff;
      --text:#0b1220;
      --muted:#475569;
      --brand:#0ea5e9;
      --ring: rgba(14,165,233,.25);
      --border:#e2e8f0;
      --shadow: 0 10px 25px rgba(2,6,23,.08);
    }

    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0; font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,"Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji";
      color:var(--text); background:linear-gradient(180deg,var(--bg) 0%, #0e1623 100%);
    }

    /* Layout */
    .container{max-width:1100px;margin:0 auto;padding:0 20px}
    header{
      position:sticky; top:0; z-index:50; backdrop-filter:saturate(140%) blur(6px);
      background:color-mix(in oklab, var(--panel) 82%, transparent);
      border-bottom:1px solid var(--border);
    }
    .nav{display:flex;align-items:center;justify-content:space-between; height:64px}
    .brand{display:flex;align-items:center;gap:.65rem;font-weight:800;letter-spacing:.2px}
    .brand .logo{width:28px;height:28px;border-radius:8px; background:linear-gradient(135deg,#22d3ee,#0ea5e9); box-shadow:0 6px 18px rgba(14,165,233,.45)}
    .nav a{color:var(--text); text-decoration:none; font-weight:600; opacity:.9}
    .nav ul{list-style:none; display:flex; gap:1.2rem; margin:0; padding:0}
    .theme-btn{
      border:1px solid var(--border); background:var(--card); color:var(--text);
      padding:.5rem .7rem; border-radius:.8rem; cursor:pointer; box-shadow:var(--shadow)
    }
    .theme-btn:focus{outline:3px solid var(--ring); outline-offset:2px}

    /* Hero */
    .hero{padding:80px 0 30px}
    .hero-inner{
      display:grid; grid-template-columns:1.2fr .8fr; align-items:center; gap:40px
    }
    .chip{display:inline-flex; gap:.5rem; align-items:center; padding:.35rem .6rem; border-radius:999px;
      background:color-mix(in oklab, var(--brand) 18%, var(--card));
      border:1px solid var(--border); font-size:.85rem; color:var(--text); opacity:.95}
    h1{font-size:clamp(1.9rem, 2.9vw + 1rem, 3.2rem); margin:.4rem 0 0; line-height:1.1}
    .subtitle{font-size:1.05rem; color:var(--muted); max-width:60ch}
    .cta{display:flex; gap:12px; margin-top:18px}
    .btn{
      display:inline-flex; align-items:center; gap:.5rem; border:none; cursor:pointer;
      padding:.8rem 1rem; border-radius:12px; font-weight:700; letter-spacing:.2px
    }
    .btn-primary{background:var(--brand); color:#041017; box-shadow:0 10px 25px rgba(14,165,233,.4)}
    .btn-ghost{background:var(--card); color:var(--text); border:1px solid var(--border)}
    .mock{
      width:100%; aspect-ratio:1/1; border-radius:20px; background:linear-gradient(135deg,#1f2a3d 0%, #0f1720 100%);
      border:1px solid var(--border); box-shadow:var(--shadow); display:grid; place-items:center; overflow:hidden
    }
    .mock img{width:100%; height:100%; object-fit:cover}

    /* Sections */
    section{padding:70px 0}
    .section-title{font-size:1.6rem; margin:0 0 18px}
    .section-sub{color:var(--muted); margin:0 0 26px}

    /* Skills */
    .skills{display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:16px}
    .card{
      background:var(--card); border:1px solid var(--border); border-radius:16px; padding:18px; box-shadow:var(--shadow)
    }
    .taglist{display:flex; flex-wrap:wrap; gap:8px; margin-top:8px}
    .tag{padding:.35rem .6rem; border-radius:999px; background:color-mix(in oklab, var(--panel) 60%, transparent); border:1px solid var(--border); font-size:.85rem}

    /* Projects */
    .projects{display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:18px}
    .project{overflow:hidden}
    .thumb{aspect-ratio:16/10; border-radius:14px; border:1px solid var(--border); background:#0f1720; overflow:hidden}
    .thumb img{width:100%; height:100%; object-fit:cover; display:block}
    .project h3{margin:.7rem 0 .2rem}
    .project p{color:var(--muted); margin:0 0 .6rem}
    .links{display:flex; gap:.6rem}
    .link{padding:.5rem .7rem; border-radius:10px; border:1px solid var(--border); background:var(--panel); text-decoration:none; color:var(--text); font-weight:600}

    /* Contact */
    form{
      display:grid; gap:12px; max-width:680px
    }
    input, textarea{
      width:100%; padding:12px 14px; border-radius:12px; border:1px solid var(--border); background:var(--panel);
      color:var(--text)
    }
    input:focus, textarea:focus{outline:3px solid var(--ring); border-color:var(--brand)}
    textarea{min-height:140px; resize:vertical}

    footer{padding:30px 0 60px; color:var(--muted); text-align:center; border-top:1px solid var(--border); background:color-mix(in oklab, var(--panel) 70%, transparent)}

    /* Mobile */
    @media (max-width:900px){
      .hero-inner{grid-template-columns:1fr; text-align:center}
      .cta{justify-content:center}
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <div class="container nav">
      <div class="brand">
        <div class="logo" aria-hidden="true"></div>
        <a href="#home" aria-label="Go to home">Geeth Senavirathna</a>
      </div>
      <nav aria-label="Primary">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button class="theme-btn" id="themeToggle" title="Toggle theme">🌗</button></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <main id="home" class="hero">
    <div class="container hero-inner">
      <div>
        <span class="chip">Software Engineering Undergraduate • SLIIT</span>
        <h1>Hi, I’m Geeth — I build clean, fast web apps.</h1>
        <p class="subtitle">
          Passionate about React, modern UX, and reliable systems.
          Currently exploring AI-driven features and real-time apps.
        </p>
        <div class="cta">
          <a class="btn btn-primary" href="#projects">View Projects</a>
          <a class="btn btn-ghost" href="#contact">Contact Me</a>
        </div>
      </div>
      <div class="mock" aria-hidden="true">
        <!-- Replace with a real screenshot -->
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop" alt="Portfolio preview">
      </div>
    </div>
  </main>

  <!-- About -->
  <section id="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <p class="section-sub">
        I’m a Software Engineering student specializing in modern web development.
        I enjoy crafting UIs, designing APIs, and shipping features that matter.
        Recently, I’ve worked on a gym management system, a food ordering flow, and an HCI
        project for a Sri Lankan SME.
      </p>
      <div class="card">
        <strong>What I’m focusing on now:</strong>
        <ul>
          <li>React + Vite apps with clean component architecture</li>
          <li>Type-safe APIs and database design</li>
          <li>Performance, accessibility, and delightful UX</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <p class="section-sub">A snapshot of tools I use regularly.</p>
      <div class="skills">
        <div class="card">
          <h3>Frontend</h3>
          <div class="taglist">
            <span class="tag">React</span>
            <span class="tag">Vite</span>
            <span class="tag">JavaScript (ES6+)</span>
            <span class="tag">Styled-Components</span>
            <span class="tag">Tailwind</span>
          </div>
        </div>
        <div class="card">
          <h3>Backend & DB</h3>
          <div class="taglist">
            <span class="tag">Node.js</span>
            <span class="tag">Express</span>
            <span class="tag">REST APIs</span>
            <span class="tag">MongoDB / MySQL</span>
          </div>
        </div>
        <div class="card">
          <h3>Tools</h3>
          <div class="taglist">
            <span class="tag">Git & GitHub</span>
            <span class="tag">Figma</span>
            <span class="tag">Vercel / Netlify</span>
            <span class="tag">Postman</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <p class="section-sub">Some things I’ve designed, built, and shipped.</p>

      <div class="projects">
        <!-- Project 1 -->
        <article class="card project">
          <div class="thumb">
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" alt="Gym management system UI">
          </div>
          <h3>KDF Gym Fitness — Management System</h3>
          <p>Full-stack web app for memberships, trainer schedules, class booking, and payments.</p>
          <div class="taglist">
            <span class="tag">React</span><span class="tag">Node</span><span class="tag">MongoDB</span>
          </div>
          <div class="links">
            <a class="link" href="#" target="_blank" rel="noopener">Live</a>
            <a class="link" href="#" target="_blank" rel="noopener">Code</a>
          </div>
        </article>

        <!-- Project 2 -->
        <article class="card project">
          <div class="thumb">
            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop" alt="Food ordering customization page">
          </div>
          <h3>Food Ordering — Customize & Cart</h3>
          <p>Customizable product page (pizza, chicken, seafood), cart, and checkout with clean UX.</p>
          <div class="taglist">
            <span class="tag">React</span><span class="tag">Styled-Components</span><span class="tag">API</span>
          </div>
          <div class="links">
            <a class="link" href="#" target="_blank" rel="noopener">Live</a>
            <a class="link" href="#" target="_blank" rel="noopener">Code</a>
          </div>
        </article>

        <!-- Project 3 -->
        <article class="card project">
          <div class="thumb">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" alt="HCI mobile app mock">
          </div>
          <h3>Refresh Restaurant — HCI Mobile App</h3>
          <p>Advanced ordering & reservations prototype focused on customer engagement.</p>
          <div class="taglist">
            <span class="tag">Figma</span><span class="tag">Usability</span><span class="tag">Prototyping</span>
          </div>
          <div class="links">
            <a class="link" href="#" target="_blank" rel="noopener">Case Study</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact">
    <div class="container">
      <h2 class="section-title">Contact</h2>
      <p class="section-sub">Want to collaborate or say hello? Drop a message.</p>
      <form id="contactForm" novalidate>
        <div class="grid">
          <input type="text" id="name" name="name" placeholder="Your name" required>
        </div>
        <input type="email" id="email" name="email" placeholder="Email address" required>
        <textarea id="message" name="message" placeholder="Your message" required></textarea>
        <button class="btn btn-primary" type="submit">Send Message</button>
        <p id="formStatus" class="section-sub" role="status" aria-live="polite" style="margin:6px 0 0"></p>
      </form>
    </div>
  </section>

  <footer>
    <div class="container">
      © <span id="year"></span> Geeth Senavirathna · Built with love and lots of coffee.
    </div>
  </footer>

  <script>
    // Theme toggle (persisted)
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    if(saved === "light"){ root.classList.add("light"); }
    const btn = document.getElementById("themeToggle");
    btn.addEventListener("click", ()=>{
      root.classList.toggle("light");
      localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
    });

    // Contact form (front-end only demo)
    const form = document.getElementById("contactForm");
    const statusEl = document.getElementById("formStatus");
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if(!name || !email || !message){
        statusEl.textContent = "Please fill in all fields.";
        return;
      }
      const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if(!emailOK){
        statusEl.textContent = "Please enter a valid email.";
        return;
      }

      // Replace with your backend/API or email service
      statusEl.textContent = "Thanks! Your message has been queued.";
      form.reset();
    });

    // Year
    document.getElementById("year").textContent = new Date().getFullYear();
  </script>
</body>
</html>
