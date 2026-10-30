import React from 'react';
import { Shield, Mail, MapPin } from 'lucide-react';
import { GREEN, GOLD, CREAM } from '../ui/theme';
import { PageSeo } from '../seo/PageSeo';
import {
  LegalDoc, LegalHero, P, Sub, MinorHeading, Bullets, Callout,
  type LegalSectionDef,
} from '../ui/LegalDoc';

const BG = CREAM;

interface PrivacyPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const MAIL = (
  <a href="mailto:hello@myblissmi.com" style={{ color: GREEN, fontWeight: 600, textDecoration: 'underline' }}>
    hello@myblissmi.com
  </a>
);

const SECTIONS: LegalSectionDef[] = [
  {
    id: 'about',
    number: '1',
    title: 'About Blissmi and this Policy',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>1.1 Who we are</Sub>
        <P>
          Blissmi provides digital health and wellbeing services, including assessments, wellbeing scores,
          personalised content and program recommendations, optional integrations and access to selected service
          providers. This Policy describes how personal information is collected, used, disclosed, stored and
          otherwise handled when you use our app, website and related services (the “Services”).
        </P>
        <P style={{ marginTop: '1rem' }}>
          “Blissmi”, “we”, “us” and “our” mean <strong>Blissmi Limited (Hong Kong)</strong> and{' '}
          <strong>Blissmi Holdings Pte. Ltd. (Singapore)</strong>, as applicable. The entity responsible for your
          information may depend on your contract, location and service arrangement. We will identify the responsible
          entity, its contact details and its role in the relevant onboarding or customer notice.
        </P>

        <Sub>1.2 Our role</Sub>
        <P>
          For direct-to-consumer accounts, the relevant Blissmi entity generally determines the purposes and means of
          processing. Where access is provided through an employer, insurer, broker, clinic, hospitality organisation
          or other client, the allocation of controller/processor or equivalent responsibilities depends on the actual
          arrangement and applicable law. Blissmi may act in different capacities for different processing activities.
          We do not assume an enterprise customer controls an individual’s health information merely because the
          customer purchases access to the Services.
        </P>

        <Sub>1.3 Scope and other notices</Sub>
        <P>
          This Policy applies to personal information handled through the Services. Additional short-form collection
          notices, permissions or consents may appear when you register, connect a wearable, upload a laboratory
          report, book a service or enable a new feature. If another party provides professional healthcare or operates
          its own website or service, its privacy notice may also apply to information it independently collects. This
          Policy does not replace medical advice or our Terms of Service.
        </P>

        <Sub>1.4 Applicable standards</Sub>
        <P>
          We seek to handle personal information in accordance with the privacy and data protection laws applicable to
          the relevant activity, including laws in Hong Kong, Singapore, Malaysia, Thailand and Australia. Rights,
          legal bases, notices and transfer requirements vary by country; where a country-specific notice is necessary,
          it supplements this Policy.
        </P>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    number: '2',
    title: 'Information we collect and its sources',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>2.1 Account and identification information</Sub>
        <P>
          We may collect your name, email address, phone number, date of birth or age, country or region, account
          identifier, authentication information and communications preferences. We collect only account details
          reasonably required for the Services or a particular feature.
        </P>

        <Sub>2.2 Health, wellbeing and other sensitive information</Sub>
        <P>
          With the appropriate consent or other valid legal basis where available, we may collect information you
          choose to provide about your health, symptoms, conditions, medication or treatment history where relevant to
          the feature, goals, lifestyle, exercise, nutrition, sleep, stress, mental wellbeing, reproductive or
          menstrual health, fertility or life stage, questionnaires and assessments, biometric or physiological
          readings, laboratory documents and health information obtained through authorised integrations. Not every
          feature collects every category. Certain categories may constitute sensitive personal data, health
          information or special-category data under applicable law.
        </P>

        <Sub>2.3 Activity, preference and recommendation data</Sub>
        <P>
          We may collect or generate information about your interactions with the Blissmi platform, including completed
          assessments, wellbeing scores, program recommendations and priorities, saved preferences, content viewed,
          challenges, check-ins, bookings, feedback, completed activities and previous interactions.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We use this information to personalise your experience, track your wellbeing progress, identify relevant
          programs and services, adapt recommendations over time, and maintain continuity across sessions.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where necessary to provide these personalised services, relevant information may be processed using
          artificial intelligence, algorithms or authorised external technology providers, subject to the data
          protection safeguards and disclosures described in Sections 3, 4 and 6 of this Privacy Policy.
        </P>

        <Sub>2.4 Technical and usage data</Sub>
        <P>
          Depending on your device and settings, we may collect device and app identifiers, operating-system and app
          versions, internet protocol addresses, timestamps, diagnostic events, session information, performance
          measurements, approximate location inferred from technical information and security logs. Precise location
          and optional analytics or tracking will be collected only where implemented and permitted by applicable law
          and device settings.
        </P>

        <Sub>2.5 Data obtained from other sources</Sub>
        <P>
          At your direction, information may come from connected wearable or health-data services, uploaded reports,
          providers you engage or other authorised integrations. Where an employer or enterprise partner sponsors
          access, we may receive eligibility and administration details, such as a work email or membership status. We
          do not assume that enterprise partners supply identifiable clinical records.
        </P>

        <Sub>2.6 Required versus optional data</Sub>
        <P>
          We will distinguish information necessary to create or protect an account from optional health data or
          integrations. If you decline information essential to a particular personalised function, that function may
          not operate or may produce less tailored results. Where legally required, we will explain whether collection
          is obligatory or voluntary and the consequences of not providing information. We do not require consent to
          unnecessary processing as a condition of accessing unrelated Services.
        </P>

        <Sub>2.7 Accuracy and user responsibility</Sub>
        <P>
          Please keep your details current and supply information that is accurate to the best of your knowledge. You
          may request correction of inaccurate personal information. Wellness insights depend partly on the accuracy
          and completeness of the information provided.
        </P>
      </>
    ),
  },
  {
    id: 'why-we-use-your-information',
    number: '3',
    title: 'Why we use your information',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>3.1 Service provision and account management</Sub>
        <P>
          We use relevant personal information to create and authenticate accounts, deliver requested app
          functionality, communicate service information, support members, maintain records, process bookings or
          purchases, manage subscriptions and resolve issues.
        </P>

        <Sub>3.2 Health and wellbeing personalisation</Sub>
        <P>
          We use health, lifestyle, assessment, behavioural and engagement information to calculate or update wellbeing
          scores, identify relevant wellbeing patterns, prioritise suitable content and programs, tailor
          recommendations and provide continuity across sessions. This is individual wellbeing profiling. We may use
          rule-based systems and AI to perform this analysis.
        </P>

        <Sub>3.3 AI and automated processing</Sub>
        <P>
          External AI providers support scoring, ranking, program prioritisation, personalised recommendations and
          related user experiences. Where individual health information is submitted to such providers, we use
          pseudonymous identifiers instead of direct identifiers such as names or email addresses. The health data and
          other content sent to them may nonetheless be personal information. AI outputs can be incorrect, incomplete
          or inappropriate and do not constitute diagnosis, treatment or medical advice. Users decide whether to follow
          recommendations; currently, recommendation scores do not independently decide eligibility for healthcare,
          insurance benefits or wellness services.
        </P>

        <Sub>3.4 Model training and system improvement</Sub>
        <P>
          We do not use identifiable or pseudonymised individual health information to train or fine-tune AI models and
          do not authorise external AI providers to do so. We may evaluate service performance and improve algorithms
          using genuinely anonymised information where lawful. Ordinary inference using an existing model is different
          from training or fine-tuning it.
        </P>

        <Sub>3.5 Security, integrity and compliance</Sub>
        <P>
          We may process relevant account, device and usage information to prevent misuse, authenticate access, detect
          or investigate incidents, comply with legal obligations, protect rights and maintain operational resilience.
        </P>

        <Sub>3.6 Research, analytics and product improvement</Sub>
        <P>
          We may analyse service use and outcomes to improve usability, performance, program quality and population
          insights. Where information remains personal or could identify a person, appropriate legal bases and
          safeguards continue to apply. Any secondary use materially different from the original purpose will be
          assessed for further notice or consent.
        </P>

        <Sub>3.7 Legal bases and consent</Sub>
        <P>
          Depending on the jurisdiction and purpose, we rely on consent (including explicit consent where required for
          health or other sensitive information), contractual necessity, compliance with legal duties, or another
          lawful basis recognised by applicable law. We will not assume that a contractual relationship or general
          acceptance of this Policy replaces a legally required separate consent. Where consent is the applicable
          basis, you may withdraw it, subject to legal limits and consequences explained in Section 8.
        </P>

        <Sub>3.8 Human review and consequential decisions</Sub>
        <P>
          You may contact us to raise concerns about an AI-generated result and request human review. Requests will be
          handled in accordance with applicable law and available processes; this statement does not mean each
          recommendation is pre-approved by a clinician. If Blissmi later uses automated outputs to make decisions that
          significantly affect rights or interests, we will review legal requirements, safeguards and disclosures
          before doing so.
        </P>
      </>
    ),
  },
  {
    id: 'data-sharing',
    number: '4',
    title: 'Data sharing and disclosure',
    content: (
      <>
        <P>Blissmi is committed to protecting the confidentiality and security of your personal and health information.</P>
        <Callout>
          <P style={{ color: '#111827', fontWeight: 600 }}>
            We do not sell your personal information or health data.
          </P>
          <P style={{ marginTop: '0.625rem' }}>
            We only share personal information where necessary to provide our services, support authorised platform
            functionality, fulfil your requests, comply with legal obligations, or for other purposes permitted by
            applicable data protection laws.
          </P>
        </Callout>
        <P style={{ marginTop: '1.25rem' }}>
          Where personal information is shared, we seek to limit disclosure to the information reasonably necessary for
          the relevant purpose and apply appropriate contractual, technical and organisational safeguards.
        </P>

        <Sub>4.1 Technology and operational service providers</Sub>
        <P>
          We engage trusted third-party service providers to operate, maintain, secure and improve the Blissmi
          platform. These may include:
        </P>
        <Bullets items={[
          'Cloud infrastructure, hosting and data storage providers.',
          'Software development, maintenance and technical support providers.',
          'Data analytics, monitoring and platform performance providers.',
          'Payment processing and transaction management providers.',
          'Communication and notification service providers.',
          'Security, authentication and infrastructure management providers.',
        ]} />
        <P style={{ marginTop: '1rem' }}>
          These providers may access or process personal information where necessary to perform their authorised
          services.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We require applicable service providers to handle personal information in accordance with relevant data
          protection requirements and contractual obligations, including confidentiality, security and restrictions on
          unauthorised use or disclosure.
        </P>

        <Sub>4.2 Artificial intelligence and algorithmic processing providers</Sub>
        <P>
          Blissmi uses external artificial intelligence (AI) and technology providers to support personalised wellbeing
          insights, health and lifestyle scoring, program prioritisation and recommendations.
        </P>
        <P style={{ marginTop: '1rem' }}>
          To deliver these functions, relevant health, lifestyle, preference and interaction information may be
          processed through external AI systems.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where individual health information is submitted to external AI providers, Blissmi uses pseudonymous user
          identifiers rather than directly identifying information such as names or email addresses.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Pseudonymised information remains subject to applicable data protection requirements where an individual may
          be identified or re-identified.
        </P>
        <P style={{ marginTop: '1rem' }}>External AI providers process information to support:</P>
        <Bullets items={[
          'Personalised health and wellbeing scores and insights.',
          'Identification and prioritisation of relevant wellbeing programs.',
          'Recommendations for content, services and wellness activities.',
          'Personalisation based on individual goals, preferences and previous interactions.',
          'Adaptation of recommendations as users update their information or engage with the platform.',
        ]} />
        <P style={{ marginTop: '1rem' }}>
          We do not authorise external AI providers to use our users’ identifiable or pseudonymised personal or health
          information to train or fine-tune their AI models.
        </P>
        <P style={{ marginTop: '1rem' }}>
          To minimise the information shared with external AI providers, we exclude direct personal identifiers from AI
          requests and limit the information submitted to what is reasonably necessary for the relevant functionality.
          Previous activities, preferences and progress information are maintained within Blissmi’s systems and may be
          included in individual AI requests where relevant to personalisation. External AI providers do not maintain
          persistent member-specific conversation histories or profiles on Blissmi’s behalf through these requests.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We require appropriate safeguards governing the confidentiality, security, authorised processing, retention
          and deletion of information processed by external AI providers.
        </P>
        <P style={{ marginTop: '1rem' }}>
          AI-generated outputs are informational and advisory. They do not independently determine a user’s eligibility
          for, or restrict access to, healthcare, insurance benefits or wellness services.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Additional information about AI-assisted processing and profiling is provided in Section 3 of this Privacy
          Policy.
        </P>

        <Sub>4.3 Healthcare, wellness and marketplace providers</Sub>
        <P>
          Blissmi provides access to selected healthcare, wellbeing and wellness service providers through its platform
          and marketplace.
        </P>
        <P style={{ marginTop: '1rem' }}>
          These may include healthcare professionals, clinics, hospitals, nutritionists, mental health practitioners,
          fitness and rehabilitation specialists, and other wellness providers.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where you choose to book, purchase or participate in a service through Blissmi, we may share information
          reasonably necessary to facilitate your request. Depending on the service, this may include:
        </P>
        <Bullets items={[
          'Your name and contact information.',
          'Booking details and appointment preferences.',
          'Relevant service selections and transaction details.',
          'Additional health or personal information that you specifically authorise us to share.',
        ]} />
        <P style={{ marginTop: '1rem' }}>
          We do not automatically provide marketplace providers with access to your full Blissmi health profile, health
          assessments, personalised scores or other sensitive information solely because you book a service.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where the disclosure of sensitive health information requires additional consent, we will request that
          consent before sharing the relevant information.
        </P>

        <MinorHeading>Independent provider registration and data collection</MinorHeading>
        <P>
          Blissmi facilitates bookings with independent healthcare and wellness service providers. When you request a
          booking, we share only the personal information reasonably necessary to facilitate that booking, such as your
          name, contact details, selected service and appointment information.
        </P>
        <P style={{ marginTop: '1rem' }}>
          The service provider may subsequently require you to complete its own registration, provide additional
          personal or health information, and accept its own terms and privacy notice.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where the provider independently determines how and why it collects and processes this additional
          information, the provider is responsible for that processing under applicable data protection laws.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Blissmi does not automatically transfer your full health profile, wellbeing assessments or personalised
          recommendations to the provider solely because you make a booking.
        </P>

        <Sub>4.4 Employers, insurers and enterprise partners</Sub>
        <P>
          Where Blissmi is provided through an employer, insurer, insurance broker or other enterprise partner, we may
          share aggregated and de-identified information to support population wellbeing analysis, program evaluation
          and service improvement. This information may include:
        </P>
        <Bullets items={[
          'Aggregated health and wellbeing trends.',
          'Population-level risk and wellbeing indicators.',
          'Platform engagement and participation statistics.',
          'Program utilisation and effectiveness measures.',
          'Aggregated outcomes and insights concerning wellbeing initiatives.',
        ]} />
        <P style={{ marginTop: '1rem' }}>
          Blissmi does not disclose identifiable individual health profiles, individual health scores, medical
          histories or personalised health recommendations to enterprise partners.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We apply data minimisation, access restrictions and aggregation safeguards designed to reduce the risk of
          identifying individuals from population-level information. The level of information made available to
          enterprise partners is determined by the nature of the dataset, the intended reporting purpose and the
          reasonably foreseeable risk of re-identification.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Enterprise partners may separately receive administrative information necessary to manage their contracted
          services, such as account eligibility, membership activation or subscription administration, where permitted
          by applicable law.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Enterprise partners are not granted unrestricted access to individual users’ sensitive health information.
        </P>

        <Sub>4.5 Payments and transactions</Sub>
        <P>
          Where you make a payment or purchase through Blissmi, relevant transaction information may be processed by
          authorised third-party payment service providers. This may include information necessary to:
        </P>
        <Bullets items={[
          'Process and confirm payments.',
          'Manage purchases, refunds and cancellations.',
          'Prevent fraudulent transactions.',
          'Maintain financial and transaction records.',
        ]} />
        <P style={{ marginTop: '1rem' }}>
          Payment information is processed using appropriate security safeguards and in accordance with applicable
          payment processing and data protection requirements.
        </P>

        <Sub>4.6 Professional advisers and corporate operations</Sub>
        <P>
          We may disclose personal information to authorised professional advisers, including legal, accounting, audit,
          insurance and regulatory advisers, where reasonably necessary for legitimate business operations, legal
          compliance, dispute resolution or protection of our legal rights.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Such disclosures are subject to applicable confidentiality and data protection obligations.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where permitted by applicable law, personal information may also be disclosed to authorised parties involved
          in an actual or proposed merger, acquisition, investment, financing, restructuring or sale of all or part of
          our business, where reasonably necessary for due diligence or completion of the transaction. Such disclosures
          will be subject to appropriate confidentiality, security and data protection safeguards, including any
          required notices, consents or other lawful conditions.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where necessary for the operation of the Blissmi group, information may also be processed by Blissmi Limited
          (Hong Kong) and Blissmi Holdings Pte. Ltd. (Singapore), subject to applicable data protection requirements,
          authorised purposes and appropriate safeguards.
        </P>

        <Sub>4.7 Legal, regulatory and safety-related disclosures</Sub>
        <P>
          We may disclose personal information where required or authorised by applicable law, regulation, court order
          or lawful request from a competent regulatory or government authority.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We may also disclose information where reasonably necessary and legally permitted to:
        </P>
        <Bullets items={[
          'Comply with legal or regulatory obligations.',
          'Investigate suspected fraud, security incidents or unlawful activities.',
          'Establish, exercise or defend legal claims.',
          'Protect the rights, safety and security of users, Blissmi or others.',
          'Respond to a serious and imminent threat to an individual’s life, health or safety.',
        ]} />
        <P style={{ marginTop: '1rem' }}>
          Where required by applicable law, we will limit disclosures to information reasonably necessary for the
          relevant purpose.
        </P>

        <Sub>4.8 International data processing and transfers</Sub>
        <P>
          Blissmi operates across multiple jurisdictions and may engage service providers that process information in
          countries other than your country of residence.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where personal information is transferred, accessed or processed internationally, we apply safeguards
          appropriate to the nature of the information and applicable data protection requirements.
        </P>
        <P style={{ marginTop: '1rem' }}>
          These may include contractual protections, access restrictions, encryption, vendor due diligence and measures
          to restrict unauthorised processing.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Additional information concerning international data processing and transfers is provided in Section 6 of
          this Privacy Policy.
        </P>

        <Sub>4.9 Anonymised and aggregated information</Sub>
        <P>
          Blissmi may use and disclose genuinely anonymised and aggregated information for legitimate purposes
          including:
        </P>
        <Bullets items={[
          'Population health and wellbeing analytics.',
          'Research and service improvement.',
          'Program performance measurement.',
          'Product development and evaluation.',
          'Statistical reporting and commercial insights.',
        ]} />
        <P style={{ marginTop: '1rem' }}>
          We apply measures designed to prevent the identification or re-identification of individuals from information
          represented as anonymous.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Information that remains reasonably capable of identifying an individual, including pseudonymised
          information, continues to be treated as personal information and protected accordingly.
        </P>

        <Sub>4.10 Our commitment to responsible data sharing</Sub>
        <P>Blissmi does not:</P>
        <Bullets items={[
          'Sell personal or health information.',
          'Share identifiable individual health profiles or personalised health recommendations with employers or insurers.',
          'Authorise external AI providers to use identifiable or pseudonymised personal health information to train their AI models.',
          'Use sensitive personal health information for third-party behavioural advertising or advertising targeting.',
        ]} />
        <P style={{ marginTop: '1rem' }}>
          We only permit access to personal information for authorised purposes and seek to apply appropriate
          safeguards proportionate to the sensitivity of the information.
        </P>
        <P style={{ marginTop: '1rem' }}>
          You may contact us at {MAIL} with questions about how your personal information is shared or processed.
        </P>
      </>
    ),
  },
  {
    id: 'pseudonymisation',
    number: '5',
    title: 'Pseudonymisation, anonymisation and aggregation',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>5.1 Different forms of information</Sub>
        <P>
          Pseudonymised information replaces direct identifiers with codes or similar references but can remain linked
          to individuals; we protect it as personal information. Aggregated information combines records and is not
          automatically anonymous. Truly anonymised information is information from which individuals cannot reasonably
          be identified in the circumstances, taking account of other information reasonably available.
        </P>

        <Sub>5.2 Safeguards and limitations</Sub>
        <P>
          Our approaches may include separating identity-mapping information, limiting access, minimising data fields,
          suppressing small groups, assessing combinations of data and periodically reviewing re-identification risk.
          The appropriateness of each control depends on the data and use case. We do not promise that all aggregate
          statistics are necessarily anonymous.
        </P>

        <Sub>5.3 Use and retention</Sub>
        <P>
          We may retain genuinely anonymised information for statistical and product purposes while it remains
          non-identifying and lawful to do so. Personal, pseudonymised or insufficiently de-identified information
          remains subject to the other provisions of this Policy, including retention and rights.
        </P>
      </>
    ),
  },
  {
    id: 'international-transfers',
    number: '6',
    title: 'International access, storage and transfers',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>6.1 Where data may be handled</Sub>
        <P>
          Blissmi serves users in multiple countries and may use hosting, AI, software and support providers with
          international operations. Data may be stored, accessed or processed outside your country, subject to the
          actual system configuration and lawful transfer arrangements.
        </P>

        <Sub>6.2 How transfers are assessed</Sub>
        <P>
          Before a relevant transfer, we assess legal restrictions and, as required, implement suitable contractual
          terms, recipient due diligence, access controls, encryption, security standards, risk assessments or other
          lawful mechanisms. We seek to ensure overseas processors protect information to the level required by
          applicable law. Different markets have distinct notification, consent, adequacy, contractual and transfer
          assessment rules.
        </P>

        <Sub>6.3 Customer or regional hosting</Sub>
        <P>
          Where a business customer has agreed data-residency terms, those terms will govern within the relevant legal
          and technical scope. A primary hosting region does not, by itself, establish that all backups, support
          access, logs, AI requests or subprocessors remain in that region; these pathways are separately assessed.
        </P>

        <Sub>6.4 Further information</Sub>
        <P>
          We provide information about relevant overseas processing locations and applicable data protection safeguards
          through this Policy and any additional notices required by law.
        </P>
        <P style={{ marginTop: '1rem' }}>
          You may contact us using the details in Section 15 to request further information about international
          processing arrangements relevant to your personal information.
        </P>

        <Sub>6.5 Data storage and processing locations</Sub>
        <P>
          Blissmi uses cloud infrastructure and authorised technology service providers to securely store and process
          personal information. Our primary data-hosting locations are determined by the infrastructure in use, with
          Singapore and Australia designated as our intended primary hosting regions.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Depending on the Services you use, your personal information may also be accessed or processed by authorised
          Blissmi entities, technology providers, AI service providers and other contracted service providers located
          in Hong Kong, Singapore, Australia and other countries identified in our applicable privacy notices or
          processing-location disclosures.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where personal information is transferred, accessed or processed internationally, we apply appropriate
          contractual, technical and organisational safeguards in accordance with applicable data protection laws and
          any agreed data residency requirements. We identify the countries in which overseas recipients are likely to
          be located where required by applicable law and practicable.
        </P>

        <MinorHeading>Independent healthcare and wellness providers</MinorHeading>
        <P>
          Where you request a booking with an independent healthcare or wellness provider through Blissmi, we may
          disclose the personal information reasonably necessary to facilitate your booking, including your name,
          contact information, selected service and appointment details, to the provider in the country where the
          service is delivered.
        </P>
        <P style={{ marginTop: '1rem' }}>
          The provider may subsequently require you to register separately and provide additional personal or health
          information directly to them. Where the provider independently determines the purposes and means of
          processing such information, it is responsible for that processing under its own privacy notice and
          applicable legal obligations.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Blissmi does not automatically share your full health profile, health assessments or personalised wellbeing
          recommendations with independent providers solely because you make a booking.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where these arrangements involve international disclosures, we comply with applicable cross-border disclosure
          requirements and provide additional information or notices where required by law.
        </P>
      </>
    ),
  },
  {
    id: 'retention',
    number: '7',
    title: 'Retention, deletion and backups',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>7.1 AI processing and retention</Sub>
        <P>
          Blissmi uses external AI service providers to generate personalised wellbeing insights and recommendations.
          These providers may temporarily retain AI requests and responses for up to 30 days under their standard API
          retention arrangements, including for safety, security and misuse monitoring.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Certain information may be retained for longer where necessary to investigate suspected misuse, enforce
          applicable service policies or comply with legal obligations.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Blissmi does not retain AI request and response content in its application logs. AI-generated recommendations
          and responses made available to users may be stored within Blissmi’s own systems to provide continuity,
          maintain relevant records and personalise subsequent experiences, subject to our retention and deletion
          policies.
        </P>

        <Sub>7.2 Typical categories</Sub>
        <P>
          Account and subscription records may be kept while an account is active and for an applicable lawful period
          thereafter. Health and personalisation data is generally kept for continuity while the feature is enabled,
          unless deleted sooner or subject to another lawful requirement. Booking, payment and financial records may be
          kept to meet transactional or statutory obligations. Operational and security logs are maintained under
          defined schedules.
        </P>
        <P style={{ marginTop: '1rem' }}>
          AI requests, responses and associated processing records may be retained by Blissmi or authorised service
          providers for periods necessary to provide the Services, support security and operational requirements, and
          comply with applicable legal obligations, subject to appropriate retention and deletion controls.
        </P>

        <Sub>7.3 Account deletion and withdrawal</Sub>
        <P>
          On receiving a valid deletion request, we will assess and erase, de-identify or restrict relevant information
          within the periods applicable to that request, subject to legal exceptions. Withdrawal of consent stops
          further processing dependent on that consent after it becomes effective but does not necessarily require
          deletion of every record where a separate lawful retention duty applies.
        </P>

        <Sub>7.4 Backups and service providers</Sub>
        <P>
          Deleted information may remain temporarily in protected backups until scheduled expiration or secure
          overwrite, subject to applicable retention controls. We will seek to prevent restored data from being
          reintroduced into active processing and communicate deletion obligations to relevant processors where
          required.
        </P>
      </>
    ),
  },
  {
    id: 'your-rights',
    number: '8',
    title: 'Your rights',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>8.1 Rights available</Sub>
        <P>
          Depending on the applicable law, you may have rights to information, access, correction, withdrawal of
          consent, erasure, restriction, objection, data portability, explanations or human review in relevant
          automated decision scenarios, and complaints to regulators. The availability and scope of each right differ
          by country.
        </P>

        <Sub>8.2 Making a request</Sub>
        <P>
          Contact {MAIL} or use available in-app controls. Please describe the request and the account involved. We may
          reasonably verify your identity and request information needed to locate records. We will respond within the
          period required under applicable law and explain any lawful limits or exceptions.
        </P>

        <Sub>8.3 Withdrawal of consent</Sub>
        <P>
          You may withdraw consent for relevant consent-based health-data processing using available product settings
          or by contacting us. We will explain material service consequences, including loss of personalised features,
          and cease consent-dependent future processing as required by law. Other essential account processing may
          continue where separately lawful.
        </P>

        <Sub>8.4 Account and integration controls</Sub>
        <P>
          Where available, you may edit profile details, disconnect wearable integrations, manage communication choices
          or request account deletion. Disconnecting an integration generally stops new collection from that source but
          does not by itself erase information already collected; use deletion controls for that purpose.
        </P>

        <Sub>8.5 Complaints and appeals</Sub>
        <P>
          If you have concerns, contact our privacy team first so we can investigate. You may also contact an
          applicable supervisory or privacy authority. We will not claim that every privacy right applies identically
          in all jurisdictions.
        </P>
      </>
    ),
  },
  {
    id: 'how-we-protect-information',
    number: '9',
    title: 'How we protect information',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>9.1 Security programme</Sub>
        <P>
          Because health information is sensitive, we aim to use measures proportionate to its nature and risk,
          including access restrictions, encryption where implemented, secure authentication, staff confidentiality
          obligations, vendor assessment, incident management and periodic reviews. Security arrangements are tested
          and improved over time. No technology provides absolute protection.
        </P>

        <Sub>9.2 Access management</Sub>
        <P>
          We apply role-based access controls and authorisation measures designed to restrict access to personal and
          health information according to operational responsibilities and legitimate processing purposes.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Access to sensitive information is limited to authorised personnel and service providers where necessary for
          their assigned functions. Enterprise clients are not provided with unrestricted access to identifiable
          individual health information.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We manage access permissions throughout the account and employment lifecycle, including reviewing access
          requirements and revoking permissions when access is no longer authorised.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Additional safeguards, including multi-factor authentication, access logging and monitoring, are applied
          where implemented and appropriate to the relevant system and level of risk.
        </P>

        <Sub>9.3 Data encryption and secure storage</Sub>
        <P>
          Blissmi uses cloud infrastructure and technical security measures designed to protect personal and sensitive
          health information against unauthorised access, disclosure, alteration and loss.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Our approach to data encryption and secure storage includes the following safeguards:
        </P>

        <MinorHeading>Encryption in transit</MinorHeading>
        <P>
          Blissmi uses secure communication protocols, including HTTPS and Transport Layer Security (TLS), to protect
          personal information transmitted between users, our platform and supported backend services.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We use cloud infrastructure that supports encrypted connections and implement appropriate transport security
          measures to protect information during transmission.
        </P>

        <MinorHeading>Encryption at rest</MinorHeading>
        <P>
          Blissmi uses cloud storage and database services that support encryption at rest to protect personal and
          sensitive health information.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Depending on the infrastructure and storage services used, these protections may include industry-standard
          encryption technologies, such as Advanced Encryption Standard (AES) and encrypted storage volumes.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We apply security measures appropriate to the sensitivity of information and the technical capabilities of
          the infrastructure on which it is stored.
        </P>

        <MinorHeading>Backups and data recovery</MinorHeading>
        <P>
          Blissmi maintains or uses backup and recovery arrangements designed to support data availability, integrity
          and restoration following technical failures, security incidents or other disruptions.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Backup security measures may include encryption, restricted access, infrastructure-level protections and
          retention controls, depending on the backup technology used.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where backup services do not provide encryption by default, we assess the associated risks and apply
          appropriate supplementary security measures or restrict the storage of sensitive personal information within
          those services.
        </P>

        <MinorHeading>Access controls and infrastructure security</MinorHeading>
        <P>
          We use access restrictions and appropriate security controls designed to limit access to personal and health
          information to authorised individuals, systems and service providers.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We work with cloud infrastructure providers that operate under shared security responsibility arrangements,
          under which the provider is responsible for specified infrastructure safeguards and Blissmi is responsible
          for implementing and maintaining applicable application-level, configuration and access security controls.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We periodically review our security arrangements and seek to enhance them in response to changes in
          technology, identified risks and applicable regulatory requirements.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Although we take reasonable steps to protect personal information, no method of electronic transmission or
          storage can guarantee absolute security.
        </P>

        <Sub>9.4 Third parties</Sub>
        <P>
          We assess relevant vendors for data access, security, confidentiality, subcontracting, incident reporting and
          retention arrangements appropriate to their services. Contracts and practical controls are reviewed according
          to risk.
        </P>
      </>
    ),
  },
  {
    id: 'security-incidents',
    number: '10',
    title: 'Data security incidents',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>10.1 Response</Sub>
        <P>
          If we identify a suspected personal-data incident, we will investigate, contain and assess it, take
          reasonable remediation steps and preserve appropriate evidence.
        </P>

        <Sub>10.2 Notifications</Sub>
        <P>
          Where applicable law requires regulator, affected-individual or client notification, we will assess the
          relevant threshold and timing and provide required information. Notification obligations differ among the
          jurisdictions we serve and depend on the event and our role.
        </P>

        <Sub>10.3 Assistance</Sub>
        <P>
          Users concerned about suspicious account activity can contact {MAIL}. We may provide protective guidance and
          take necessary account-security measures.
        </P>
      </>
    ),
  },
  {
    id: 'cookies',
    number: '11',
    title: 'Cookies, SDKs and app analytics',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>11.1 What we use</Sub>
        <P>
          Our websites and applications may use cookies, local storage, software development kits (SDKs), device
          identifiers and similar technologies to support essential functionality, account security, user preferences,
          performance monitoring, diagnostics and analytics.
        </P>
        <P style={{ marginTop: '1rem' }}>
          These technologies may collect technical and usage information as described in Section 2.4.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Where third-party providers process information collected through these technologies, the applicable
          safeguards and disclosure arrangements are described in Sections 4 and 6.
        </P>

        <Sub>11.2 Choices</Sub>
        <P>
          Where required, we provide notice and obtain consent for non-essential tracking and give applicable opt-out
          controls. You may also use device or browser controls, though blocking essential functionality may affect
          service performance.
        </P>

        <Sub>11.3 Health-data restrictions</Sub>
        <P>
          We do not use health or sensitive personal information for third-party behavioural advertising or advertising
          targeting. We will not deploy analytics or advertising SDKs that transmit sensitive data inconsistently with
          this commitment.
        </P>
      </>
    ),
  },
  {
    id: 'profiling-advertising',
    number: '12',
    title: 'Profiling and advertising',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>12.1 Wellbeing profiling</Sub>
        <P>
          We undertake wellbeing profiling to tailor assessments, scores, programs, content and recommendations, as
          explained in Section 3. This is different from third-party behavioural advertising profiling.
        </P>

        <Sub>12.2 Marketing communications</Sub>
        <P>
          If we send promotional communications, we will do so in compliance with applicable notice, consent and
          opt-out requirements and will provide an appropriate unsubscribe mechanism. Transactional account or safety
          communications may continue where necessary and lawful.
        </P>

        <Sub>12.3 No sale or advertising targeting with health data</Sub>
        <P>
          We do not sell personal or health data and do not use sensitive health information for third-party
          behavioural advertising or advertising targeting. If future products materially change these purposes, we
          will review the legal basis and give any required new disclosures and choices before implementation.
        </P>
      </>
    ),
  },
  {
    id: 'children',
    number: '13',
    title: 'Children and age limits',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>13.1 Adults-only Services</Sub>
        <P>
          Our Services are not intended for people under 18. We do not knowingly seek to provide accounts to children
          below that age. If we learn that an under-18 individual has registered or submitted information contrary to
          this limitation, we will review the circumstances and take appropriate steps, including suspension or
          deletion where legally appropriate.
        </P>

        <Sub>13.2 Reporting</Sub>
        <P>
          If you believe an under-18 person has provided information through the Services, please contact {MAIL}.
        </P>
      </>
    ),
  },
  {
    id: 'changes',
    number: '14',
    title: 'Changes to this Policy',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>14.1 Updates</Sub>
        <P>
          We may update this Policy to reflect changes in law, services, vendors or data handling. The latest effective
          date and current version will be displayed. We will keep appropriate historical versions for accountability.
        </P>

        <Sub>14.2 Material changes</Sub>
        <P>
          Where a change materially affects the purposes of processing or requires a new legal basis or consent, we
          will provide appropriate notice and seek new consent where legally required before the relevant processing
          begins. Continued use alone will not be treated as a substitute for legally required express consent.
        </P>
      </>
    ),
  },
  {
    id: 'contact',
    number: '15',
    title: 'Contact and complaints',
    content: (
      <>
        <Sub style={{ marginTop: 0 }}>15.1 Privacy contact</Sub>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
          <Mail size={20} style={{ color: GREEN, flexShrink: 0 }} />
          <a
            href="mailto:hello@myblissmi.com"
            style={{ color: GREEN, fontSize: '1.0625rem', fontWeight: 600, textDecoration: 'none' }}
          >
            hello@myblissmi.com
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem' }}>
          {[
            {
              name: 'Blissmi Limited (Hong Kong)',
              address: 'Unit 1603, 16F, The L Plaza, 367–375 Queen’s Road Central, Sheung Wan, Hong Kong.',
            },
            {
              name: 'Blissmi Holdings Pte. Ltd. (Singapore)',
              address: '68 Circular Road, #02-01, Singapore 049422.',
            },
          ].map(entity => (
            <div
              key={entity.name}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                backgroundColor: CREAM, borderRadius: '0.625rem', padding: '1rem 1.125rem',
              }}
            >
              <MapPin size={18} style={{ color: GOLD, flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <div style={{ fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>{entity.name}</div>
                <div style={{ color: '#374151', lineHeight: '1.6' }}>{entity.address}</div>
              </div>
            </div>
          ))}
        </div>
        <P style={{ marginTop: '1rem' }}>Address the letter to the Data Privacy Officer.</P>

        <Sub>15.2 Privacy complaints and requests</Sub>
        <P>
          If you believe that we have mishandled your personal information or failed to comply with an applicable
          privacy or data protection obligation, you may submit a complaint to {MAIL}.
        </P>
        <P style={{ marginTop: '1rem' }}>
          Please provide sufficient information for us to identify the matter and investigate your concerns. We may
          request additional details or reasonable identity verification where necessary.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We will acknowledge and investigate privacy complaints, assess the relevant circumstances, and communicate
          our findings and any appropriate corrective action within applicable legal timeframes.
        </P>
        <P style={{ marginTop: '1rem' }}>
          If you are dissatisfied with our response, or where otherwise permitted by law, you may refer the matter to
          the privacy or data protection authority having jurisdiction over your complaint.
        </P>
        <P style={{ marginTop: '1rem' }}>
          We will not prevent you from exercising any statutory right to contact a regulator directly.
        </P>
      </>
    ),
  },
];

export function PrivacyPage({ onNavigate: _onNavigate, currentPage: _currentPage }: PrivacyPageProps) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: BG }}>
      <PageSeo
        path="/privacy"
        title="Privacy Policy | Blissmi"
        description="How Blissmi collects, uses, stores and protects personal and health data, the choices available to you, and how to get in touch about your information."
        ogTitle="Blissmi Privacy Policy"
      />

      <LegalHero
        icon={<Shield size={44} style={{ color: GOLD }} />}
        title="Privacy Policy"
        updated="Last Updated: 25th October 2026"
        intro="This Privacy Policy explains how Blissmi collects, uses, discloses, stores and protects your personal and health information across our app, website and related services."
      />

      <section style={{ padding: '3.5rem 1rem 5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <LegalDoc sections={SECTIONS} />
        </div>
      </section>
    </div>
  );
}
