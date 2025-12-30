import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-primary-900">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold text-neutral-900 mb-12 border-b border-neutral-200 pb-6">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-a:text-gold-600 prose-strong:text-neutral-900">
                    <p className="text-sm uppercase tracking-widest text-neutral-500 mb-8">Last updated: 2024</p>

                    <p>Your privacy is of utmost importance to Gents Barber Shop. This policy outlines our commitment to protecting your personal data.</p>

                    <h3>Data Collection</h3>
                    <p>We collect minimal information necessary to facilitate your appointment booking. This typically includes your name, phone number, and email address provided during the scheduling process.</p>

                    <h3>Usage of Information</h3>
                    <p>The data collected is used strictly for:</p>
                    <ul>
                        <li>Managing your appointments and sending confirmations.</li>
                        <li>Contacting you regarding schedule changes or service updates.</li>
                        <li>Improving our service based on client history.</li>
                    </ul>

                    <h3>Third-Party Integration</h3>
                    <p>We utilize Setmore as our scheduling partner. Interaction with the booking widget is subject to Setmore&apos;s privacy practices. We do not sell or share your data with other third parties.</p>

                    <h3>Contact</h3>
                    <p>If you have questions regarding your data, please contact us at privacy@gentsbarber.om.</p>
                </div>
            </div>
        </main>
    );
}
