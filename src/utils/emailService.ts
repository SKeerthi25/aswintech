import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_d363uia';
const EMAILJS_TEMPLATE_ID = 'template_zrnjxeb';
const EMAILJS_PUBLIC_KEY = 'DIGdYIcY3GGkoqshy';

export interface EmailParams {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message?: string;
  serviceRequired?: string;
  propertyType?: string;
  preferredDate?: string;
  preferredTime?: string;
  companyName?: string;
  fileName?: string;
}

export const sendContactEmail = async (params: EmailParams) => {
  const templateParams = {
    from_name: params.name,
    from_email: params.email,
    phone: params.phone,
    user_phone: params.phone,
    subject: params.subject || params.serviceRequired || 'Website Inquiry',
    service_required: params.serviceRequired || 'General Contact',
    property_type: params.propertyType || 'N/A',
    preferred_date: params.preferredDate || 'N/A',
    preferred_time: params.preferredTime || 'N/A',
    company_name: params.companyName || 'N/A',
    file_name: params.fileName || 'None',
    message: params.message || 'No additional details provided.',
    to_name: 'ASWIN TECH LTD'
  };

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );
};
