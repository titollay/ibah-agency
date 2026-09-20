export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface EmailTemplateParams {
  fullName: string;
  businessEmail: string;
  serviceType: string;
  estimatedBudget: string;
  projectDescription: string;
  reply_to: string;
  attachments?: EmailAttachment[];
}

export interface EmailAttachment {
  name: string;
  data: string;
  type: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  serviceType: string;
  budget: number;
  projectDescription: string;
  agreedToPrivacy: boolean;
}
