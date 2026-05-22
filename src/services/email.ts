/**
 * VisitChina.au - Email Dispatch Service
 * 
 * Integrated with Formspree to send lead notifications directly to sales@visitchina.au.
 */

export interface EnquiryData {
  name: string;
  email: string;
  mobile: string;
  comment: string;
  requestCall: boolean;
  bookingDate?: string;
  bookingTime?: string;
  aiContext?: string | null;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeeqrzd";

export const sendEmailEnquiry = async (data: EnquiryData): Promise<boolean> => {
  console.log("VisitChina API: Dispatching Lead to sales@visitchina.au...");
  
  // Format data for email readability and Formspree compatibility
  const payload = {
    subject: `[VisitChina.au Enquiry] ${data.name}`,
    name: data.name,
    email: data.email,
    phone: data.mobile,
    message: data.comment || "No specific comments provided.",
    preferred_date: data.bookingDate || 'Anytime',
    preferred_time: data.bookingTime || 'Anytime',
    ai_consultant_notes: data.aiContext || 'No AI notes generated.',
    _replyto: data.email
  };

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log("VisitChina: Email successfully dispatched.");
      return true;
    } else {
      const errorData = await response.json();
      console.error("VisitChina: Mail server rejected request:", errorData);
      return false;
    }
  } catch (error) {
    console.error("VisitChina: Network Error in Email Service:", error);
    return false;
  }
};
