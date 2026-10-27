/* Sugan Damodaran — static cybersecurity portfolio
   Replace every clearly marked placeholder with your real profile details and evidence. */
const projects = {
  phishing: {
    number: 'PROJECT / 001', category: 'THREAT ANALYSIS', title: 'Phishing Email Investigation & IOC Analysis',
    intro: 'A practical investigation brief for examining a suspicious email, identifying potential indicators of compromise (IOCs), and recording a reasoned assessment. Complete this page with the details of your actual investigation before presenting it as finished work.',
    purpose: 'Phishing messages can use impersonation, suspicious links, and misleading attachments to trick recipients. This project can demonstrate a repeatable, evidence-led approach to assessing an email safely.',
    objective: 'Document the investigation process, explain why individual indicators matter, and communicate a clear conclusion with supporting evidence.',
    tools: ['Add the tools you actually used', 'Email/header inspection utility', 'Reputation or sandbox services (if used)'],
    actions: ['Preserve a sanitised sample or screenshots without exposing personal data.', 'Review sender details, message headers, URLs, and attachments using safe methods.', 'Record and research relevant IOCs, such as domains, URLs, hashes, or IP addresses where appropriate.', 'Explain the evidence, limitations, assessment, and recommended defensive actions.'],
    skills: ['Email threat analysis', 'IOC research and validation', 'Evidence handling and documentation', 'Risk communication'],
    outcome: 'Add your actual findings here: what indicators you identified, what conclusion the evidence supported, and what defensive recommendations you made. Do not claim a detection rate or result unless you measured it.',
    relevance: 'Security operations teams investigate suspicious messages, assess indicators, and communicate findings to help reduce phishing risk. A well-documented write-up demonstrates analytical reasoning as well as tool familiarity.',
    evidence: [{label:'GitHub repository',url:'',placeholder:true},{label:'Investigation write-up',url:'',placeholder:true},{label:'Screenshots / evidence',url:'',placeholder:true},{label:'Technical documentation',url:'',placeholder:true}]
  },
  soc: {
    number: 'PROJECT / 002', category: 'SECURITY OPERATIONS', title: 'Home SOC / Threat Detection Lab',
    intro: 'A home-lab project for learning how security events can be collected, reviewed, and investigated. Use this project view to show your real lab architecture, detection exercises, and observations.',
    purpose: 'Security operations relies on turning event data into useful context. A home lab provides a controlled place to practise monitoring concepts and learn how analysts review suspicious activity.',
    objective: 'Describe the lab environment, demonstrate at least one repeatable investigation or detection exercise, and explain what the observed events mean.',
    tools: ['Add your actual operating systems and lab platform', 'Add your actual log / SIEM tools', 'Add data sources and test utilities you used'],
    actions: ['Document the lab architecture and how its components communicate.', 'Identify the log sources and events collected in the lab.', 'Run a safe, authorised test or use sample data to create an observable event.', 'Review relevant events, record the investigation steps, and explain any detection logic used.'],
    skills: ['Log analysis', 'Security monitoring concepts', 'Alert investigation', 'Lab documentation'],
    outcome: 'Add verified outcomes: which event you observed, what evidence you captured, whether your detection worked as expected, and what you would tune or investigate next.',
    relevance: 'SOC analysts triage alerts, investigate event context, and document findings. A reproducible home-lab write-up can show how you reason through a detection rather than merely naming tools.',
    evidence: [{label:'Lab repository',url:'',placeholder:true},{label:'Architecture diagram',url:'',placeholder:true},{label:'Screenshots / detection',url:'',placeholder:true},{label:'Lab write-up',url:'',placeholder:true}]
  },
  automation: {
    number: 'PROJECT / 003', category: 'SECURITY ENGINEERING', title: 'Security Automation',
    intro: 'A project space for a small security workflow that reduces repetitive manual steps. Replace this starter brief with the exact task, script or workflow you built, and the results you measured.',
    purpose: 'Repeatable workflows can improve consistency and save time on routine security tasks. Small, clearly scoped automation is a useful way to practise problem-solving and safe scripting.',
    objective: 'Automate one defined task, document the inputs and outputs, handle expected errors, and compare the result with the manual process where possible.',
    tools: ['Add the programming language you used', 'Add libraries or command-line utilities actually used', 'Add version-control or testing tools if applicable'],
    actions: ['Define a specific task and its expected input/output.', 'Build the workflow in a test environment using sample or authorised data.', 'Add basic validation and clear handling for invalid input or errors.', 'Test normal and edge cases, document limitations, and record measured results if available.'],
    skills: ['Scripting and logical problem-solving', 'Workflow design', 'Input validation and error handling', 'Technical documentation'],
    outcome: 'State what the automation does, how you tested it, and any measured time or consistency improvement. If you did not measure an improvement, describe the demonstrated behaviour instead of inventing a metric.',
    relevance: 'Security teams use automation to make routine tasks more consistent and support scalable workflows. Clear scope, testing, and limitations are as important as the script itself.',
    evidence: [{label:'GitHub repository',url:'',placeholder:true},{label:'Demo',url:'',placeholder:true},{label:'Screenshots',url:'',placeholder:true},{label:'Technical documentation',url:'',placeholder:true}]
  }
};

const cards = document.querySelectorAll('[data-project]');
const details = document.getElementById('projectDetails');
const detailContent = document.getElementById('detailContent');
const closeProject = document.getElementById('closeProject');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const toTop = document.getElementById('toTop');

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function listMarkup(items) {
  return `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
}
function evidenceMarkup(items) {
  return `<div class="evidence-actions">${items.map(item => item.url && !item.placeholder
    ? `<a class="evidence-button" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.label)} ↗</a>`
    : `<span class="evidence-button placeholder" title="Replace with a real link when available">${escapeHTML(item.label)} · link to add</span>`).join('')}</div>`;
}
function renderProject(key) {
  const project = projects[key];
  if (!project) return;
  detailContent.innerHTML = `
    <div class="detail-hero">
      <div><div class="eyebrow">${escapeHTML(project.number)} / ${escapeHTML(project.category)}</div><h2>${escapeHTML(project.title)}</h2><p>${escapeHTML(project.intro)}</p></div>
      <aside class="detail-side"><h3>Project snapshot</h3><p>This is a structured starter brief. Replace all tool suggestions and example workflow steps with what you actually did. Add evidence links only when you have real, shareable material.</p></aside>
    </div>
    <div class="detail-grid">
      <article class="detail-block"><h3>01 / What was it?</h3><p>${escapeHTML(project.purpose)}</p></article>
      <article class="detail-block"><h3>02 / Objective</h3><p>${escapeHTML(project.objective)}</p></article>
      <article class="detail-block"><h3>03 / Tools & technologies</h3>${listMarkup(project.tools)}</article>
      <article class="detail-block"><h3>04 / What I did</h3>${listMarkup(project.actions)}</article>
      <article class="detail-block"><h3>05 / Skills developed</h3>${listMarkup(project.skills)}</article>
      <article class="detail-block"><h3>06 / Outcome</h3><p>${escapeHTML(project.outcome)}</p></article>
      <article class="detail-block"><h3>07 / Real-world relevance</h3><p>${escapeHTML(project.relevance)}</p></article>
      <article class="detail-block"><h3>08 / Evidence & documentation</h3><p>Use these placeholders for real repositories, screenshots, write-ups, demos, or technical documents. Never link to private or sensitive information.</p>${evidenceMarkup(project.evidence)}</article>
    </div>`;
  details.hidden = false;
  details.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'});
}
function hideProject() {
  details.hidden = true;
  document.getElementById('projects').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'});
}
cards.forEach(card => {
  card.addEventListener('click', () => renderProject(card.dataset.project));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); renderProject(card.dataset.project); }
  });
});
closeProject.addEventListener('click', hideProject);
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}));
window.addEventListener('scroll', () => toTop.classList.toggle('visible', window.scrollY > 500), {passive:true});
toTop.addEventListener('click', () => window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}));
document.getElementById('year').textContent = new Date().getFullYear();
