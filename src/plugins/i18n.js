import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const messages = {
  en: {
    dashboarMainTitle: 'Certificate Management System',
    customerChartTitleCard: 'customers condition',
    usersChartTitleCard: 'users condition',
    projectChartTitleCard: 'projects condition ',
    dashboard: 'dashboard',
    user: 'user',
    licenses: 'licenses',
    project: 'project',
    customer: 'customer',
    refreshingTable: 'refresh table',
    UsersActiveStatus: 'Active Users',
    UsersInActiveStatus: 'InActive Users',
    ActiveStatusProject: 'Active Project',
    InActiveStatusProject: 'InActive Project',
    customersRateChartSubtitle: 'customers',
    TodaysProfit: `Today's Profit`,
    Messages: 'Messages',
    support: 'Support',
    AddCustomerBtn: 'Add Customer',
    AddLicenseBtn: 'Add License',
    AddUserBtn: 'Add User',
    AddProjectBtn: 'Add Project',
    CutomersTable: 'Cutomers Table',
    UsersTable: 'Users Table',
    ProjectsTable: 'Projects Table',
    LicensesTable: 'Licenses Table',
    Username: 'username',
    email: 'email',
    phoneNumber: 'phoneNumber',
    Password: 'password',
    modalCustomerTitleForm: 'Enter the desired customer information',
    modalUserTitleForm: 'Enter the desired user information',
    modalProjectTitleForm: 'Enter the desired project information',
    modalLicenseTitleForm: 'Enter the desired license information',
    enterToPannel: 'enter to the pannel',
    Entry: 'Log In',
    Add: 'Add',
    close: 'close',
    description: 'description',
    name: 'name',
    validityDuration: 'validity duration',
    customerName: 'customer name',
    projectName: 'project name',
    address: 'address',
  },
  fa: {
    dashboarMainTitle: 'سامانه مدیریت گواهی',
    customerChartTitleCard: 'وضعیت مشتری ها',
    usersChartTitleCard: 'وضعیت کاربران',
    projectChartTitleCard: 'وضعیت پروژه ها',
    dashboard: 'داشبورد',
    user: 'کاربر',
    licenses: 'لایسنس ها',
    project: 'پروژه',
    customer: 'مشتری',
    refreshingTable: ' رفرش جدول',
    UsersActiveStatus: 'کاربران فعال',
    UsersInActiveStatus: 'کاربران غیر فعال',
    ActiveStatusProject: 'پروژه فعال',
    InActiveStatusProject: 'پروژه غیر فعال',
    customersRateChartSubtitle: 'مشتری ها',
    TodaysProfit: 'سود امروز',
    Messages: 'پیام ها',
    support: 'پشتیبانی',
    AddCustomerBtn: 'افزودن مشتری',
    AddLicenseBtn: 'افزودن لایسنس',
    AddUserBtn: 'افزودن کاربر',
    AddProjectBtn: 'افزودن پروژه',
    CutomersTable: 'جدول مشتری ها',
    UsersTable: 'جدول کاربران',
    ProjectsTable: 'جدول پروژه ها',
    LicensesTable: 'جدول لایسنس ها',
    Username: 'نام کاربری',
    email: 'ایمیل',
    phoneNumber: 'شماره تلفن',
    Password: 'رمز عبور',
    modalCustomerTitleForm: 'اطلاعات مورد نیاز مشتری را وارد کنید',
    modalUserTitleForm: 'اطلاعات مورد نیاز کاربر را وارد کنید',
    modalProjectTitleForm: 'اطلاعات مورد نیاز پروژه را وارد کنید',
    modalLicenseTitleForm: 'اطلاعات مورد نیاز لایسنس را وارد کنید',
    enterToPannel: 'ورود به پنل',
    Entry: 'ورود',
    Add: 'افزودن',
    close: 'بستن',
    description: 'توضیحات',
    name: 'اسم',
    validityDuration: 'مدت اعتبار',
    customerName: 'اسم مشتری',
    projectName: 'اسم پروژه',
    address: 'آدرس',
  },
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});
export default i18n;
