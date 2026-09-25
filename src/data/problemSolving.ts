import { ProblemSolvingStory } from '../types';

/**
 * =======================================================================
 * PROBLEM-SOLVING ENGINEERING CASE STUDY
 * =======================================================================
 * Demonstrates systematic engineering thinking:
 * PROBLEM → EXPERIMENT → ITERATION → SOLUTION → LESSON
 * =======================================================================
 */

export const engineeringProblemStory: ProblemSolvingStory = {
  title: 'SIH 2023 Gujarat Grand Finale: The 2:00 PM False-Positive Emergency Sprint',
  context: '6 hours before the 8:00 PM national jury presentation, our fine-tuned AI classifier misclassified X.com and educational domains as adult content. Retraining was impossible in time; we engineered an emergency real-time asynchronous crawler fallback.',
  steps: [
    {
      phase: 'PROBLEM',
      title: 'The 2:00 PM Grand Finale Crisis',
      description: 'At 2:00 PM during the SIH 2023 Grand Finale in Gujarat, final test runs revealed a catastrophic flaw: the fine-tuned DNS domain classification model misclassified high-traffic domains like X.com (Twitter) and university research portals as adult/blocked content due to character entropy and noisy token boundaries. A false positive on stage would result in immediate jury disqualification.',
      metricsBefore: 'False Positive Rate: 4.8% | Critical Whitelist Failures: 12 Top Domains | Time to Jury: 6 Hours',
      codeSnippet: `// Flawed inference: Classified domains purely by string entropy
def predict_domain_category(domain: str) -> str:
    # Model mistakenly flagged "x.com" and short domains as high-risk adult content
    features = extract_lexical_features(domain)
    prediction = fine_tuned_model.predict([features])[0]
    return prediction  # Returned "ADULT_CONTENT" for x.com!`
    },
    {
      phase: 'EXPERIMENT',
      title: 'Testing Model Retraining vs. Live Content Validation',
      description: 'We evaluated retraining the machine learning classifier with curated negative samples. However, re-compiling feature vectors and fine-tuning on our competition laptops was projected to take 5+ hours, leaving zero buffer for deployment testing. We needed an architectural layer that bypassed model limitations without touching model weights.',
      codeSnippet: `// Feasibility calculation under strict competition deadline:
# Retraining pipeline: 4.5 hours (High risk of regression on other classes)
# Deadline: 8:00 PM Final Evaluation (6 hours remaining)
# Conclusion: Model retraining is non-viable. Pivot to real-time verification.`
    },
    {
      phase: 'ITERATION',
      title: 'Designing an Asynchronous Content Scraping Fallback Engine',
      description: 'We conceived a dual-tier verification architecture: keep the high-speed DNS model as an initial filter, but introduce an asynchronous background crawler. When the model flagged a domain with borderline confidence, the background crawler immediately scraped the live destination webpage to inspect HTML <title>, <meta description>, and visible text tokens.',
      codeSnippet: `async def verify_domain_content(domain: str) -> bool:
    try:
        async with httpx.AsyncClient(timeout=1.5, verify=False) as client:
            resp = await client.get(f"https://{domain}", follow_redirects=True)
            soup = BeautifulSoup(resp.text, "html.parser")
            meta_text = " ".join([tag.get("content", "") for tag in soup.find_all("meta")])
            return is_whitelisted_semantic_content(meta_text)
    except Exception:
        return False  # Graceful fallback`
    },
    {
      phase: 'SOLUTION',
      title: 'Live Content Inspection & Automated Sinkhole Override',
      description: 'In an intense 3-hour coding sprint, we built the asynchronous crawler using httpx and BeautifulSoup, connected to our Unbound DNS sinkhole. When X.com was queried, the crawler fetched the live metadata in under 350ms, identified legitimate social media and news semantics, and dynamically injected an override rule into the DNS cache before the jury test.',
      metricsAfter: 'False Positive Rate: 0.0% on Top 1,000 Domains | Verification Latency: <350ms | Result: National Finalist Accolade',
      codeSnippet: `// Dynamic DNS sinkhole override injection
if is_legitimate_content:
    dns_cache.set(domain, "RESOLVE_NORMAL", ttl=3600)
    audit_logger.info(f"OVERRIDE_APPLIED: {domain} verified via live crawler")
else:
    sinkhole.block_domain(domain, reason="CONFIRMED_MALICIOUS")`
    },
    {
      phase: 'LESSON',
      title: 'Resilient Systems Need Deterministic Fallbacks Over Pure AI',
      description: 'Never rely on a single probabilistic model for binary security decisions. When AI models encounter out-of-distribution inputs under extreme deadlines, engineering a deterministic secondary fallback pipeline turns an imminent project disaster into a winning production architecture.'
    }
  ]
};
