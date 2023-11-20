export interface IProfileDetails {
  senderid: string
  smsContent: string | number | readonly string[] | undefined
  avatar: string
  fName: string
  lName: string
  company: string
  contactPhone: string
  companySite: string
  language: string
  timeZone: string
  currency: string
  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
}

export interface IUpdateEmail {
  newEmail: string
  confirmPassword: string
}

export interface IUpdatePassword {
  currentPassword: string
  newPassword: string
  passwordConfirmation: string
}

export interface IConnectedAccounts {
  google: boolean
  github: boolean
  stack: boolean
}

export interface IEmailPreferences {
  successfulPayments: boolean
  payouts: boolean
  freeCollections: boolean
  customerPaymentDispute: boolean
  refundAlert: boolean
  invoicePayments: boolean
  webhookAPIEndpoints: boolean
}

export interface INotifications {
  notifications: {
    email: boolean
    phone: boolean
  }
  billingUpdates: {
    email: boolean
    phone: boolean
  }
  newTeamMembers: {
    email: boolean
    phone: boolean
  }
  completeProjects: {
    email: boolean
    phone: boolean
  }
  newsletters: {
    email: boolean
    phone: boolean
  }
}

export interface IDeactivateAccount {
  confirm: boolean
}

// ==============

export interface QuickSmsForm {
  // senderId: string | object | number | readonly string[] | undefined
  cm_name: string
  senderId: any
  mobile: string | number | readonly string[] | undefined
  sms_type: string | number | null,
  sms_content: string
  sms_schedule: string
  schedule_date: any,
}


export const QuickSmsFormInitValues: QuickSmsForm = {
  cm_name: '',
  senderId: null,
  mobile: '',
  sms_type: '1',
  sms_content: '',
  sms_schedule: 'now',
  schedule_date: new Date(),
}

export interface options {
  value: string|number,
  label: string,
}

export const optionsValue: options = {
  value: '',
  label: '',
}




// ===============
export const profileDetailsInitValues: IProfileDetails = {
  senderid: '',
  avatar: '/media/avatars/300-1.jpg',
  fName: 'Max',
  lName: 'Smith',
  company: 'Keenthemes',
  contactPhone: '044 3276 454 935',
  companySite: 'keenthemes.com',
  language: '',
  timeZone: '',
  currency: '',
  communications: {
    email: false,
    phone: false,
  },
  allowMarketing: false,
  smsContent: undefined
}



export const updateEmail: IUpdateEmail = {
  newEmail: 'support@keenthemes.com',
  confirmPassword: '',
}

export const updatePassword: IUpdatePassword = {
  currentPassword: '',
  newPassword: '',
  passwordConfirmation: '',
}

export const connectedAccounts: IConnectedAccounts = {
  google: true,
  github: true,
  stack: false,
}

export const emailPreferences: IEmailPreferences = {
  successfulPayments: false,
  payouts: true,
  freeCollections: false,
  customerPaymentDispute: true,
  refundAlert: false,
  invoicePayments: true,
  webhookAPIEndpoints: false,
}

export const notifications: INotifications = {
  notifications: {
    email: true,
    phone: true,
  },
  billingUpdates: {
    email: true,
    phone: true,
  },
  newTeamMembers: {
    email: true,
    phone: false,
  },
  completeProjects: {
    email: false,
    phone: true,
  },
  newsletters: {
    email: false,
    phone: false,
  },
}

export const deactivateAccount: IDeactivateAccount = {
  confirm: false,
}

// =================
export interface QuickSms {
  senderId: string | number | readonly string[] | undefined,
  // name: string
}
