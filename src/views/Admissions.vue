<template>
  <div class="admissions">
    <section class="page-hero">
      <div class="container">
        <h1>Admissions</h1>
        <p>Join our community of learners</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Application Process</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Submit Application</h3>
            <p>Complete our online application form with required documents</p>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <h3>Assessment</h3>
            <p>Participate in our entrance assessment and interview</p>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <h3>Review</h3>
            <p>Our admissions team reviews your application</p>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <h3>Enrollment</h3>
            <p>Receive your decision and complete enrollment</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-light)">
      <div class="container">
        <h2 class="section-title">Requirements</h2>
        <div class="requirements">
          <div class="req-card">
            <h3>📄 Documents</h3>
            <ul>
              <li>Birth certificate</li>
              <li>Previous school records</li>
              <li>Medical records</li>
              <li>Proof of residence</li>
            </ul>
          </div>
          
          <div class="req-card">
            <h3>📝 Application Form</h3>
            <ul>
              <li>Student information</li>
              <li>Parent/guardian details</li>
              <li>Emergency contacts</li>
              <li>Educational background</li>
            </ul>
          </div>
        </div>
        
        <div class="cta-box">
          <h3>Ready to Apply?</h3>
          <p>Start your application today</p>
          <button class="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 180px 0 100px;
  
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.step {
  text-align: center;
  padding: 30px;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 20px;
}

.step h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--text);
}

.step p {
  color: var(--text-light);
}

.requirements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.req-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.req-card h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--text);
}

.req-card ul {
  list-style: none;
}

.req-card li {
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  color: var(--text-light);
}

.req-card li:last-child {
  border-bottom: none;
}

.req-card li::before {
  content: "✓ ";
  color: var(--secondary);
  font-weight: 700;
  margin-right: 8px;
}

.cta-box {
  background: white;
  padding: 60px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid var(--primary);
}

.cta-box h3 {
  font-size: 2rem;
  margin-bottom: 12px;
}

.cta-box p {
  font-size: 1.125rem;
  color: var(--text-light);
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 140px 0 80px;
  }
  
  .page-hero h1 {
    font-size: 2.5rem;
  }
  
  .cta-box {
    padding: 40px 20px;
  }
}
</style>
