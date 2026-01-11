import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Replace with your own Navbar component if available */}
      <header className="w-full shadow bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <div className="flex items-center gap-3">
            {/* Placeholder for logo */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0D2C5C] to-[#5BB7E6] flex items-center justify-center">
              {/* Simple human silhouette icon */}
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx={12} cy={8} r={4} />
                <path d="M6 20c0-2.21 3.134-4 6-4s6 1.79 6 4" />
              </svg>
            </div>
            <span className="font-serif text-2xl font-bold text-[#0D2C5C]" style={{ fontFamily: 'Merriweather, serif' }}>
              SSDI Guidance
            </span>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#0D2C5C] mb-6 font-serif" style={{ fontFamily: 'Merriweather, serif' }}>
          Terms and Conditions
        </h1>
        <div className="prose max-w-none text-[#0D2C5C]">
          <p className="mb-4 text-sm text-[#7A7A7A]">Last updated: January 11, 2026</p>
          <p>
            Thank you for visiting the SSDI Guidance™ website located at www.ssdiguidance.com (the “Site“). The Site is an Internet property of SSDI Guidance, LLC (“Company,” “we,” “our” or “us”). Each end-user visitor to the Site (“User,” “you” or “your”) agrees to the SSDI Guidance™ Website Terms and Conditions (“Terms and Conditions”), in their entirety, when she/he:
          </p>
          <ul className="list-disc pl-6">
            <li>accesses or uses the Site;</li>
            <li>accesses or views any resources or information pertaining to Social Security Disability benefits, as well as related products and services (“Third-Party Links” and “Content”);</li>
            <li>accesses Company’s social media pages/accounts featured on third-party social media websites (“Social Media Pages”); and/or</li>
            <li>utilizes the various contact forms and/or contact information made available on the Site (“Contact Services”).</li>
          </ul>
          <p>
            The following Terms and Conditions are inclusive of the SSDI Guidance™ Privacy Policy (“Privacy Policy”) and any and all other applicable operating rules, policies, price schedules and other supplemental terms and conditions or documents that may be published from time to time, which are expressly incorporated herein by reference (collectively, the “Agreement”). By using and/or accessing the Site Offerings, Users agree to comply with and be bound by the Agreement in its entirety.
          </p>
          <div className="border-l-4 border-[#D8A627] pl-4 my-5 bg-[#FFFBEB] text-[#7A7A7A]">
            <strong>PLEASE REVIEW THE TERMS OF THE AGREEMENT CAREFULLY.</strong> IF YOU DO NOT AGREE WITH THE TERMS OF THE AGREEMENT IN THEIR ENTIRETY, YOU ARE NOT AUTHORIZED TO USE THE SITE OFFERINGS IN ANY MANNER OR FORM.
          </div>
          <div className="font-semibold text-[#C22C2C] my-5">
            THE AGREEMENT CONTAINS DISCLAIMERS OF WARRANTIES, LIMITATIONS OF LIABILITY, RELEASES, A CLASS-ACTION WAIVER, AND THE REQUIREMENT TO ARBITRATE ANY AND ALL CLAIMS THAT MAY ARISE HEREUNDER AGAINST COMPANY, AS WELL AS ITS PARENT, SUBSIDIARIES, RELATED PARTIES, THIRD-PARTY SERVICE PROVIDERS AND MARKETING PARTNERS (COLLECTIVELY, “COVERED PARTIES”), WHO ARE EXPRESS THIRD-PARTY BENEFICIARIES OF THE MANDATORY ARBITRATION PROVISION. THE AFOREMENTIONED PROVISIONS ARE AN ESSENTIAL BASIS OF THE AGREEMENT.
          </div>
          <p>
            <span className="font-bold text-[#C22C2C]">New Jersey State residents</span> are encouraged to review their rights under the Agreement, as provided under the New Jersey Truth-in-Consumer Contract Warranty and Notice Act (“TCCWNA”).
          </p>
          <p>
            <span className="font-bold">HIPAA Notice:</span> Company is not a covered entity for purposes of the Health Insurance Portability and Accountability Act of 1996 (“HIPAA”), nor is the information provided by you to Company considered protected health information under HIPAA. Therefore, Company does not need to comply with HIPAA privacy or security rules.
          </p>
          <p>
            <span className="font-bold">No Government Affiliation:</span> Company is in no way affiliated with the United States Social Security Administration or any other governmental entity. The Site Offerings are in no way authorized, sponsored or endorsed by the United States Social Security Administration or any other governmental entity.
          </p>
          <p>
            Company does not itself provide Social Security Disability benefits-related products and/or services, and the ultimate terms and conditions of any Social Security Disability benefits-related products and/or services made available via the Contact Services, or otherwise by and through the Site Offerings, will be determined by the applicable Third-Party Service Providers. Company is not engaged in rendering advice associated with any legal and/or financial matter and nothing we do, and no element of the Site Offerings, should be construed as such. Any use of the Site Offerings by you, including information submitted by you to Company, is not intended to, and will not create, an attorney-client relationship (or advocate-client relationship) between you and Company or any of the Third-Party Service Providers. The Site Offerings are not a substitute for professional legal and/or financial advice. You should always check with your attorney, accountant and/or other financial services providers to be sure that any advice, products and/or services offered by and/or through the Site Offerings are appropriate for you. Reliance on any information made available to you by and through the Site Offerings, including the Content, is solely at your own risk. Company disclaims any and all liability for any loss, damage or injury based on information directly or indirectly obtained through the Site Offerings.
          </p>
          <p>
            Facebook® is a registered trademark of Facebook, Inc. (“Facebook”). Company is not affiliated with Facebook, nor are the Site Offerings endorsed, administered or sponsored by Facebook.
          </p>

          {/* --- Sectioned Terms --- */}
          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">1. Scope; Modification of Agreement</h2>
          <p>
            The Agreement constitutes the entire and only agreement between Users and Company with respect to Users’ use of the Site Offerings, and supersedes all prior or contemporaneous agreements, representations, warranties and/or understandings with respect to same. Company may amend the Agreement from time to time in its sole discretion, without specific notice to Users; provided, however, that any amendment or modification to the arbitration provisions, prohibition on class action provisions or any other provisions applicable to dispute resolution (“Dispute Resolution Provisions“) shall not apply to any disputes incurred prior to the applicable amendment or modification. The latest Agreement will be posted on the Site, and Users should review the Agreement prior to using any Site Offerings. By a User’s continued use of the Site Offerings, that User hereby agrees to comply with all of the terms and conditions contained within the Agreement effective at that time (other than with respect to disputes arising prior to the amendment or modification of the Dispute Resolution Provisions, which shall be governed by the Dispute Resolution Provisions then in effect at the time of the subject dispute).
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">2. Requirements; Termination of Access</h2>
          <p>
            The Site Offerings are available only to individuals who can enter into legally binding contracts under applicable law. The Site Offerings are not intended for use by individuals under eighteen (18) years of age (or the applicable age of majority, if greater than eighteen (18) years of age in their respective jurisdictions). If you are under eighteen (18) years of age (or the applicable age of majority, if greater in your jurisdiction) and/or if you are unable to enter into legally binding contracts under applicable law, you do not have permission to use and/or access the Site Offerings. Company may terminate a User’s access to the Site Offerings at any time and for any reason, in its sole discretion.
          </p>
          <p>
            You are responsible for ensuring you have an Internet connection, computer or mobile device, up-to-date Internet browser versions, a functioning e-mail account, applicable software, hardware and/or other equipment necessary to access the Site Offerings. Company does not guarantee the quality, speed or availability of the Internet connection associated with your mobile device and/or computer.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">3. Contact Services; Third-Party Service Providers</h2>
          <p>
            Where a User attempts to utilize the Contact Services, that User may be required to submit, and Company may collect, certain information (“User Data”). Upon entering User Data and clicking on the applicable submission button on the Site, Company may pass your User Data along to one or more of its Third-Party Service Providers. Each User agrees to provide true, accurate, current and complete User Data. Company’s use of User Data shall be governed by the Privacy Policy.
          </p>
          <p>
            Company does not itself provide any underlying Social Security Disability benefits-related products and/or services, and the ultimate terms and conditions of any such products and/or services will be determined by the applicable Third-Party Service Provider(s). Company shall not be liable to you or any third-party for any products and/or services offered by any Third-Party Service Provider.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">4. Non-Endorsement</h2>
          <p>
            Company does not sponsor, recommend or endorse any Third-Party Service Provider accessible by or through the Contact Services and/or other Site Offerings. Please use caution and common sense when using the Site Offerings. Company does not involve itself in the contractual arrangements between Users and Third-Party Service Providers or the actual provision of Social Security Disability benefits-related products and/or services in connection with the relationships created thereby.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">5. Content; Third-Party Links</h2>
          <p>
            The Site contains Content (including text, video and other information) pertaining to Social Security Disability benefits-related products and/or services, as well as regularly updated Third-Party Links. The Content is offered for informational purposes only and is at all times subject to the disclaimers contained herein, and on the Site.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">6. Social Media Pages</h2>
          <p>
            The Site contains links to various Company Social Media Pages. Your use of Social Media Pages and Social Media Websites shall be governed by those Social Media Websites’ applicable agreements, terms and conditions. Company shall not be liable to you or any third-party for any claim in connection with your use of, or inability to use, the Social Media Pages and/or Social Media Websites.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">7. Interactions</h2>
          <p>
            Users are solely responsible for their interactions with Third-Party Service Providers. In the event that you have a dispute with one or more Third-Party Service Providers or other Users, you hereby release Company from any and all claims, demands and/or damages of every kind and nature arising out of, or in any way connected with, such disputes.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">8. Representations and Warranties</h2>
          <p>
            Each User represents and warrants to Company that: (a) the Agreement constitutes the legal, valid and binding obligation of User; (b) User has independently evaluated the desirability of utilizing the Site Offerings; (c) the execution, delivery and performance of the Agreement by User will not conflict with or violate any order, judgment, decree, agreement or other instrument applicable to User; and (d) the use of the Site Offerings will not violate any applicable laws, rules or regulations.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">9. Indemnification</h2>
          <p>
            Each User agrees to indemnify, defend and hold Company, its members, officers, directors, employees, agents, affiliates and attorneys, harmless from and against any and all liabilities, claims, actions, suits, proceedings, judgments, fines, damages, costs, losses and/or expenses arising from and/or related to: (a) any dispute between that User and any other User, Third-Party Service Provider or third-party; (b) that User’s breach of the Agreement; and/or (c) that User’s unauthorized and/or improper use of the Site Offerings.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">10. License Grant</h2>
          <p>
            Each User is granted a non-exclusive, non-transferable, revocable and limited license to access and use the Site Offerings for their own personal, non-commercial use. Company may terminate this license at any time for any reason. No part of the Site Offerings may be reproduced in any form or incorporated into any information retrieval system, electronic or mechanical.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">11. Proprietary Rights</h2>
          <p>
            The Site Offerings and all related materials are protected under applicable copyrights, trademarks and other proprietary rights. The “SSDI Guidance” name and logo, and all associated graphics, icons and service names, are trademarks of SSDI Guidance, LLC. All other trademarks are the property of their respective owners.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">12. Legal Warning</h2>
          <p>
            Any attempt by any individual to damage, tamper with, vandalize and/or otherwise interfere with the operation of the Site Offerings is a violation of law and Company will pursue all remedies to the fullest extent permissible.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">13. Disclaimer of Warranties</h2>
          <p>
            THE SITE OFFERINGS AND ANY OTHER PRODUCTS AND/OR SERVICES OFFERED BY AND/OR THROUGH SAME ARE PROVIDED TO USERS ON AN “AS IS” AND “AS AVAILABLE” BASIS AND ALL WARRANTIES, EXPRESS AND IMPLIED, ARE DISCLAIMED TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">14. Limitation of Liability</h2>
          <p>
            EACH USER EXPRESSLY UNDERSTANDS AND AGREES THAT COMPANY SHALL NOT BE LIABLE TO THAT USER OR ANY THIRD-PARTY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL AND/OR EXEMPLARY DAMAGES INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, TO THE FULLEST EXTENT PERMISSIBLE BY LAW.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">15. Third-Party Websites</h2>
          <p>
            The Site Offerings contain links to other websites that are owned and operated by third-parties. Company does not control the information, products or services made available on, by or through these third-party websites and shall not be responsible or liable for the availability or the operation of such external websites.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">16. Editing, Deleting and Modification</h2>
          <p>
            Company reserves the right in its sole discretion to edit and/or delete any documents, information or Content appearing on the Site.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">17. Use of User Information</h2>
          <p>
            All material submitted by Users through or in association with the Site Offerings including, without limitation, the User Data, shall be subject to the Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">18. Dispute Resolution Provisions</h2>
          <p>
            The Agreement shall be treated as though it were executed and performed in New York, NY and shall be governed by and construed in accordance with the laws of the State of New York. The parties (and Covered Parties) agree to arbitrate all claims that may arise under and/or relate to the Site Offerings and/or the Agreement according to the rules described above.
          </p>
          <p>
            To the extent permitted by law, you agree not to bring, join or participate in any class action lawsuit as to any claim, dispute or controversy that you may have against any of the Covered Parties. You may opt-out of these dispute resolution provisions by providing written notice of your decision within thirty (30) days of the date that you first access the Site.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">19. Miscellaneous</h2>
          <p>
            To the extent that anything in or associated with the Site Offerings is in conflict or inconsistent with the Agreement, the Agreement shall take precedence. Company’s failure to enforce any provision of the Agreement shall not be deemed a waiver. The Agreement may not be assigned by you, and you may not delegate your duties under it.
          </p>

          <h2 className="text-2xl font-bold text-[#0D2C5C] mt-8 mb-4">20. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <address className="not-italic mb-3">
            SSDI Guidance, LLC<br />
            890 Winter Street, Suite 230<br />
            Waltham, MA 02451<br />
            PO Box 15023, Worcester, MA 01615-0023<br />
            <span className="block">Call: <a href="tel:1-800-492-3260" className="text-[#C22C2C]">1-800-492-3260</a></span>
            <span className="block">Email: <a href="mailto:terms@ssdiguidance.com" className="text-[#0D2C5C] underline">terms@ssdiguidance.com</a></span>
            <span className="block">Hours: Monday – Friday, 9 AM – 5:30 PM EDT</span>
          </address>
        </div>
      </main>
      {/* Replace with your own Footer component if available */}
      <footer className="w-full py-6 bg-[#0D2C5C] text-white text-sm">
        <div className="container mx-auto flex flex-col md:flex-row gap-2 md:justify-between items-center px-4">
          <div>
            &copy; 2026 SSDI Guidance. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:underline font-semibold text-[#D8A627]">Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;