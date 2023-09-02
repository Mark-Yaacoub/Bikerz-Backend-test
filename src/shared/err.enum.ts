export enum ErrorEnum {
    ERROR_EN = 'You can not delete this item as it is in use',
    ERROR_AR = 'لا يمكنك حذف هذا العنصر لأنه مستخدم بالفعل',

    MESSAGE_EN = 'Sucessfully deleted',
    MESSAGE_AR = 'تم الحذف بنجاح',

    ENABLED_ERROR_EN = 'You can not delete enabled item',
    ENABLED_ERROR_AR = 'لا يمكنك حذف عنصر متاح',


    CHANGE_STATUS_EN = 'Change completed successfully',
    CHANGE_STATUS_AR = 'تم التغير بنجاح',


    LOGIN_ERROR_EN = 'Invalid user_name or password !',
    LOGIN_ERROR_AR = 'الرقم السرى أو اسم المستخدم غير صحيح',

    MOBILE_LOGIN_ERROR_EN = 'Invalid mobile number or password !',
    MOBILE_LOGIN_ERROR_AR = 'الرقم السرى أو رقم الهاتف غير صحيح',

    VERIFICATION_ERROR_EN = 'Please verify your phone number to login',
    VERIFICATION_ERROR_AR = 'من فضلك قم بتأكيد رقم الهاتف لتسجيل الدخول',

    LOGIN_PROVIDER_ERROR_EN = 'Please, enter correct data !',
    LOGIN_PROVIDER_ERROR_AR = 'من فضلك ادخل بيانات صحيحه',

    RULE_ERR_EN = 'This user doesn not have a rule, please contact system administrator!',
    RULE_ERR_AR = 'هذا المستخدم ليس لديه صلاحية دخول، برجاء التواصل مع المدير المسؤول',

    NOT_FOUND_EN = 'Please enter an exsiting values',
    NOT_FOUND_AR = 'من فضلك ادخل قيم موجوده',

    DUPLICATE_VALUE_EN = 'This value is existing, please enter another values',
    DUPLICATE_VALUE_AR = 'من فضلك ادخل قيم ليست موجوده',

    DUPLICATE_DOCUMENT_NUMBER_EN = 'This document number is used before',
    DUPLICATE_DOCUMENT_NUMBER_AR = 'رقم المستند هذا تم استخدامه من قبل',


    DUPLICATE_USERS_EN = 'This user already exists',
    DUPLICATE_USER_AR = 'هذا المستخدم موجوده بالفعل',

    DUPLICATE_CUSTOMER_EN = 'This user already exists',
    DUPLICATE_CUSTOMER_AR = 'هذا المستخدم موجوده بالفعل',

    NOT_ADMIN_EN = 'Sorry, you should be super admin to login',
    NOT_ADMIN_AR = 'عفواً، يجب أن تكون لديك صلاحة مشرف حتى تستطيع الدخول',

    VALIDATE_NOT_FOUND_EN = 'NOT FOUND',
    VALIDATE_NOT_FOUND_ar = 'غير موجود',

    SP_LOGIN_Error_EN = 'Admin did not enable this user yet',
    SP_LOGIN_Error_AR = 'المدير المسئول لم يقم بتفعيل هذا المستخدم',

    SP_LOGIN_REJECT_EN = 'Your request has been rejected',
    SP_LOGIN_REJECT_AR = 'تم رفض طلبك',


    ERROR_OCCURED_EN = 'An error occured',
    ERROR_OCCURED_AR = 'حدث خطأ',


    CUSTOMER_NAME_CHECK_EN = 'This customer name already exists before',
    CUSTOMER_NAME_CHECK_AR = 'اسم العميل موجود بالفعل',


    DUP_CUSTOMER_ADDRESS_EN = 'There is address already exists for this customer',
    DUP_CUSTOMER_ADDRESS_AR = 'هذا العنوان موجود بالفعل لهذا العميل',

    EMAIL_CHECK_EN = 'This email already exists before',
    EMAIL_CHECK_AR = 'البريد الإلكترونى موجود بالفعل',

    CUSTOMER_TYPE_CHECK_EN = "This customer type can't be changed ",
    CUSTOMER_TYPE_CHECK_AR = 'لا يمكن تغيير نوع العميل ',


    MISSION_SUCCESS_EN = 'The user has been created successfully',
    MISSION_SUCCESS_AR = 'تم إنشاء المستخدم بنجاح',

    // User status 

    ACTIVEUserEN = 'This user account has been activated',
    ACTIVEUserAR = 'تم تنشيط حساب هذا المستخدم',


    N0T_ACTIVEUserEN = 'The account has been suspended successfully',
    N0T_ACTIVEUserAR = 'تم ايقاف الحساب بنجاح',

    LABORS_SUCCESS_EN = 'The Labors has been created successfully',
    LABORS_SUCCESS_AR = 'تم إنشاء العامل بنجاح',

    TRACK_ID_ERROR_EN = '`This ${dto.track_id} already exists`',
    TRACK_ID_ERROR_AR = 'هذا ${dto.track_id} مجود بالفعل',


}