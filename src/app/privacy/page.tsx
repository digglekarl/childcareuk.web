import styles from "../page.module.css";


export default function PrivacyPolicy() {
  return (
    <>
      <div className={styles.page}>
          <main className={styles.main}>
            <h1>Privacy Policy</h1>
            <p><strong>Effective Date:</strong> May 11, 2025</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information such as child profiles, logs, and carer information to support daily care operations.</p>

            <h2>2. How We Use Information</h2>
            <p>To improve care, support collaboration, and ensure safety and well-being.</p>

            <h2>3. Security</h2>
            <p>All information is securely stored and encrypted.</p>

            <h2>4. Children's Privacy</h2>
            <p>This app is used under carer supervision only. We don’t collect direct data from children without permission.</p>

            <h2>5. Your Rights</h2>
            <p>You may access, update, or delete your data at any time.</p>

            <h2>6. Contact Us</h2>
            <p>Email: privacy@yourdomain.com</p>
          </main>
        </div>
    </>
  );
}
