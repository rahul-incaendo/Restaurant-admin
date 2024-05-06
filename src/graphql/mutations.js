/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const uploadFile = /* GraphQL */ `
  mutation UploadFile($input: FileUploadInput!) {
    uploadFile(input: $input) {
      url
      __typename
    }
  }
`;
export const addRestaurant = /* GraphQL */ `
  mutation AddRestaurant($input: AddRestaurantInput!) {
    addRestaurant(input: $input) {
      id
      restaurant_name
      slug
      city
      area
      restaurant_address
      owner_name
      owner_email
      owner_number
      invoicing_email
      longitude
      latitude
      pin_code
      fssai_firm_name
      fssai_register_number
      fssai_licence_number
      fssai_address
      fssai_expiration_date
      gst_category
      pan_number
      account_number
      ifsc_code
      status
      reject_message
      parent_id
      Menus {
        nextToken
        startedAt
        __typename
      }
      Promotions {
        nextToken
        startedAt
        __typename
      }
      Stores {
        nextToken
        startedAt
        __typename
      }
      tax_id
      tax {
        id
        title
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const addPromotion = /* GraphQL */ `
  mutation AddPromotion($input: AddPromotionInput!) {
    addPromotion(input: $input) {
      id
      coupon_code
      title
      description
      Restaurants {
        nextToken
        startedAt
        __typename
      }
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      start_date
      end_date
      status
      promotion_type
      image_path
      visibility
      device_detects
      period_days
      base_promotion_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateRestaurantStatus = /* GraphQL */ `
  mutation UpdateRestaurantStatus($input: UpdateResInput!) {
    updateRestaurantStatus(input: $input) {
      id
      restaurant_name
      slug
      city
      area
      restaurant_address
      owner_name
      owner_email
      owner_number
      invoicing_email
      longitude
      latitude
      pin_code
      fssai_firm_name
      fssai_register_number
      fssai_licence_number
      fssai_address
      fssai_expiration_date
      gst_category
      pan_number
      account_number
      ifsc_code
      status
      reject_message
      parent_id
      Menus {
        nextToken
        startedAt
        __typename
      }
      Promotions {
        nextToken
        startedAt
        __typename
      }
      Stores {
        nextToken
        startedAt
        __typename
      }
      tax_id
      tax {
        id
        title
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateOrderStatus = /* GraphQL */ `
  mutation UpdateOrderStatus($input: UpdateOrderStatusInput!) {
    updateOrderStatus(input: $input) {
      id
      order_id
      customer_id
      restaurant_id
      order_date
      total_amount
      status
      orderItems {
        nextToken
        startedAt
        __typename
      }
      delivery_address
      payment_method
      delivery_time
      special_instructions
      delivery_fee
      tax_amount
      discount_amount
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      order_type
      customer_mobile_no
      customer_name
      is_favourite
      applied_coupon_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const addMenu = /* GraphQL */ `
  mutation AddMenu($input: MenuInput!) {
    addMenu(input: $input) {
      id
      title
      description
      restaurant_id
      categories {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const addCategory = /* GraphQL */ `
  mutation AddCategory($input: CategoryInput!) {
    addCategory(input: $input) {
      id
      title
      description
      image_path
      parent_id
      menu_id
      products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const addProduct = /* GraphQL */ `
  mutation AddProduct($input: AddProductInput!) {
    addProduct(input: $input) {
      id
      name
      description
      price
      sku
      status
      in_stock
      stock_alert
      image_path
      tax_id
      tax {
        id
        title
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      category_id
      default_toppings
      productOptionTypes {
        nextToken
        startedAt
        __typename
      }
      Stores {
        nextToken
        startedAt
        __typename
      }
      Tags {
        nextToken
        startedAt
        __typename
      }
      favourites {
        nextToken
        startedAt
        __typename
      }
      orderItems {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const offlinePlaceOrder = /* GraphQL */ `
  mutation OfflinePlaceOrder($input: OrderInput!) {
    offlinePlaceOrder(input: $input) {
      id
      order_id
      customer_id
      restaurant_id
      order_date
      total_amount
      status
      orderItems {
        nextToken
        startedAt
        __typename
      }
      delivery_address
      payment_method
      delivery_time
      special_instructions
      delivery_fee
      tax_amount
      discount_amount
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      order_type
      customer_mobile_no
      customer_name
      is_favourite
      applied_coupon_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile($input: ProfileInput!) {
    updateUserProfile(input: $input) {
      id
      email
      isEmailVerified
      createdAt
      name
      phoneNumber
      profileImage
      isPhoneNumberVerified
      groupName
      status
      isEnabled
      customRestaurantId
      birthdate
      address
      __typename
    }
  }
`;
export const addUserAddress = /* GraphQL */ `
  mutation AddUserAddress($input: AddressInput!) {
    addUserAddress(input: $input) {
      id
      uname
      phone_number
      user_id
      address_1
      address_2
      city
      state
      pin_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onlinePlaceOrder = /* GraphQL */ `
  mutation OnlinePlaceOrder($input: PlaceOrderInput) {
    onlinePlaceOrder(input: $input) {
      id
      order_id
      customer_id
      restaurant_id
      order_date
      total_amount
      status
      orderItems {
        nextToken
        startedAt
        __typename
      }
      delivery_address
      payment_method
      delivery_time
      special_instructions
      delivery_fee
      tax_amount
      discount_amount
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      order_type
      customer_mobile_no
      customer_name
      is_favourite
      applied_coupon_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAddressById = /* GraphQL */ `
  mutation DeleteAddressById($input: DeleteAddressInput) {
    deleteAddressById(input: $input) {
      success
      message
      error
      __typename
    }
  }
`;
export const addRemoveFavourites = /* GraphQL */ `
  mutation AddRemoveFavourites($userId: ID!, $products: [EntityInput!]!) {
    addRemoveFavourites(userId: $userId, products: $products) {
      id
      user_id
      product_id
      favourite_type
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const removeFavouriteOrder = /* GraphQL */ `
  mutation RemoveFavouriteOrder($input: removeFavouriteOrderInput!) {
    removeFavouriteOrder(input: $input) {
      id
      order_id
      customer_id
      restaurant_id
      order_date
      total_amount
      status
      orderItems {
        nextToken
        startedAt
        __typename
      }
      delivery_address
      payment_method
      delivery_time
      special_instructions
      delivery_fee
      tax_amount
      discount_amount
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      order_type
      customer_mobile_no
      customer_name
      is_favourite
      applied_coupon_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const addOptionData = /* GraphQL */ `
  mutation AddOptionData($input: AddOptionInput) {
    addOptionData(input: $input) {
      id
      option_name
      option_code
      option_description
      image_path
      option_price
      status
      option_type_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const addProductOptions = /* GraphQL */ `
  mutation AddProductOptions($input: [AddProductOptionInput]) {
    addProductOptions(input: $input) {
      id
      product_id
      option_data
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const demoTest = /* GraphQL */ `
  mutation DemoTest($input: TestVoucherInput!) {
    demoTest(input: $input) {
      id
      title
      description
      voucher_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const uploadVouchers = /* GraphQL */ `
  mutation UploadVouchers($input: VoucherUploadInput!) {
    uploadVouchers(input: $input) {
      response
      __typename
    }
  }
`;
export const uploadBulkMenu = /* GraphQL */ `
  mutation UploadBulkMenu($input: FileUploadInput!) {
    uploadBulkMenu(input: $input) {
      url
      __typename
    }
  }
`;
export const addProductTagMapping = /* GraphQL */ `
  mutation AddProductTagMapping($input: [ProductTagMappingInput!]!) {
    addProductTagMapping(input: $input) {
      id
      name
      description
      price
      sku
      status
      in_stock
      stock_alert
      image_path
      tax_id
      tax {
        id
        title
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      category_id
      default_toppings
      productOptionTypes {
        nextToken
        startedAt
        __typename
      }
      Stores {
        nextToken
        startedAt
        __typename
      }
      Tags {
        nextToken
        startedAt
        __typename
      }
      favourites {
        nextToken
        startedAt
        __typename
      }
      orderItems {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const generateBaseCoupon = /* GraphQL */ `
  mutation GenerateBaseCoupon($input: BaseCouponInput!) {
    generateBaseCoupon(input: $input) {
      id
      coupon_code
      coupon_value
      coupon_type
      description
      min_cart_value
      usage_limit
      service_method
      status
      Coupons {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const addStore = /* GraphQL */ `
  mutation AddStore($input: StoreInput!) {
    addStore(input: $input) {
      id
      restaurant_id
      store_mapping_code
      store_title_en
      store_title_idn
      store_phone
      store_slug
      store_minimum_order_amount
      ws_url
      ws_user
      ws_password
      store_published
      store_allow_internet
      store_allow_order_tracker
      store_allow_forward_status
      qr_code_link
      service_method
      store_street
      store_area
      store_city
      store_zipcode
      store_location_long
      store_location_lat
      store_open_at
      store_close_at
      Products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createChildCoupons = /* GraphQL */ `
  mutation CreateChildCoupons($input: ChildCouponInput!) {
    createChildCoupons(input: $input) {
      response
      __typename
    }
  }
`;
export const createDashboardMenus = /* GraphQL */ `
  mutation CreateDashboardMenus(
    $input: CreateDashboardMenusInput!
    $condition: ModelDashboardMenusConditionInput
  ) {
    createDashboardMenus(input: $input, condition: $condition) {
      id
      title
      description
      image_path
      user_type
      user_group_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateDashboardMenus = /* GraphQL */ `
  mutation UpdateDashboardMenus(
    $input: UpdateDashboardMenusInput!
    $condition: ModelDashboardMenusConditionInput
  ) {
    updateDashboardMenus(input: $input, condition: $condition) {
      id
      title
      description
      image_path
      user_type
      user_group_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteDashboardMenus = /* GraphQL */ `
  mutation DeleteDashboardMenus(
    $input: DeleteDashboardMenusInput!
    $condition: ModelDashboardMenusConditionInput
  ) {
    deleteDashboardMenus(input: $input, condition: $condition) {
      id
      title
      description
      image_path
      user_type
      user_group_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createRestaurants = /* GraphQL */ `
  mutation CreateRestaurants(
    $input: CreateRestaurantsInput!
    $condition: ModelRestaurantsConditionInput
  ) {
    createRestaurants(input: $input, condition: $condition) {
      id
      restaurant_name
      slug
      city
      area
      restaurant_address
      owner_name
      owner_email
      owner_number
      invoicing_email
      longitude
      latitude
      pin_code
      fssai_firm_name
      fssai_register_number
      fssai_licence_number
      fssai_address
      fssai_expiration_date
      gst_category
      pan_number
      account_number
      ifsc_code
      status
      reject_message
      parent_id
      Menus {
        nextToken
        startedAt
        __typename
      }
      Promotions {
        nextToken
        startedAt
        __typename
      }
      Stores {
        nextToken
        startedAt
        __typename
      }
      tax_id
      tax {
        id
        title
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateRestaurants = /* GraphQL */ `
  mutation UpdateRestaurants(
    $input: UpdateRestaurantsInput!
    $condition: ModelRestaurantsConditionInput
  ) {
    updateRestaurants(input: $input, condition: $condition) {
      id
      restaurant_name
      slug
      city
      area
      restaurant_address
      owner_name
      owner_email
      owner_number
      invoicing_email
      longitude
      latitude
      pin_code
      fssai_firm_name
      fssai_register_number
      fssai_licence_number
      fssai_address
      fssai_expiration_date
      gst_category
      pan_number
      account_number
      ifsc_code
      status
      reject_message
      parent_id
      Menus {
        nextToken
        startedAt
        __typename
      }
      Promotions {
        nextToken
        startedAt
        __typename
      }
      Stores {
        nextToken
        startedAt
        __typename
      }
      tax_id
      tax {
        id
        title
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteRestaurants = /* GraphQL */ `
  mutation DeleteRestaurants(
    $input: DeleteRestaurantsInput!
    $condition: ModelRestaurantsConditionInput
  ) {
    deleteRestaurants(input: $input, condition: $condition) {
      id
      restaurant_name
      slug
      city
      area
      restaurant_address
      owner_name
      owner_email
      owner_number
      invoicing_email
      longitude
      latitude
      pin_code
      fssai_firm_name
      fssai_register_number
      fssai_licence_number
      fssai_address
      fssai_expiration_date
      gst_category
      pan_number
      account_number
      ifsc_code
      status
      reject_message
      parent_id
      Menus {
        nextToken
        startedAt
        __typename
      }
      Promotions {
        nextToken
        startedAt
        __typename
      }
      Stores {
        nextToken
        startedAt
        __typename
      }
      tax_id
      tax {
        id
        title
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      title
      description
      restaurant_id
      categories {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      title
      description
      restaurant_id
      categories {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      title
      description
      restaurant_id
      categories {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      description
      image_path
      parent_id
      menu_id
      products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      description
      image_path
      parent_id
      menu_id
      products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      description
      image_path
      parent_id
      menu_id
      products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      sku
      status
      in_stock
      stock_alert
      image_path
      tax_id
      tax {
        id
        title
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      category_id
      default_toppings
      productOptionTypes {
        nextToken
        startedAt
        __typename
      }
      Stores {
        nextToken
        startedAt
        __typename
      }
      Tags {
        nextToken
        startedAt
        __typename
      }
      favourites {
        nextToken
        startedAt
        __typename
      }
      orderItems {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      sku
      status
      in_stock
      stock_alert
      image_path
      tax_id
      tax {
        id
        title
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      category_id
      default_toppings
      productOptionTypes {
        nextToken
        startedAt
        __typename
      }
      Stores {
        nextToken
        startedAt
        __typename
      }
      Tags {
        nextToken
        startedAt
        __typename
      }
      favourites {
        nextToken
        startedAt
        __typename
      }
      orderItems {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      sku
      status
      in_stock
      stock_alert
      image_path
      tax_id
      tax {
        id
        title
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      category_id
      default_toppings
      productOptionTypes {
        nextToken
        startedAt
        __typename
      }
      Stores {
        nextToken
        startedAt
        __typename
      }
      Tags {
        nextToken
        startedAt
        __typename
      }
      favourites {
        nextToken
        startedAt
        __typename
      }
      orderItems {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createProductOptionType = /* GraphQL */ `
  mutation CreateProductOptionType(
    $input: CreateProductOptionTypeInput!
    $condition: ModelProductOptionTypeConditionInput
  ) {
    createProductOptionType(input: $input, condition: $condition) {
      id
      product_id
      option_data
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateProductOptionType = /* GraphQL */ `
  mutation UpdateProductOptionType(
    $input: UpdateProductOptionTypeInput!
    $condition: ModelProductOptionTypeConditionInput
  ) {
    updateProductOptionType(input: $input, condition: $condition) {
      id
      product_id
      option_data
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteProductOptionType = /* GraphQL */ `
  mutation DeleteProductOptionType(
    $input: DeleteProductOptionTypeInput!
    $condition: ModelProductOptionTypeConditionInput
  ) {
    deleteProductOptionType(input: $input, condition: $condition) {
      id
      product_id
      option_data
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCoupon = /* GraphQL */ `
  mutation CreateCoupon(
    $input: CreateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    createCoupon(input: $input, condition: $condition) {
      id
      base_coupon_id
      title
      description
      coupon_code
      coupon_type
      coupon_value
      expiration_date
      minimum_cart_value
      is_active
      max_times_used
      tnc
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCoupon = /* GraphQL */ `
  mutation UpdateCoupon(
    $input: UpdateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    updateCoupon(input: $input, condition: $condition) {
      id
      base_coupon_id
      title
      description
      coupon_code
      coupon_type
      coupon_value
      expiration_date
      minimum_cart_value
      is_active
      max_times_used
      tnc
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCoupon = /* GraphQL */ `
  mutation DeleteCoupon(
    $input: DeleteCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    deleteCoupon(input: $input, condition: $condition) {
      id
      base_coupon_id
      title
      description
      coupon_code
      coupon_type
      coupon_value
      expiration_date
      minimum_cart_value
      is_active
      max_times_used
      tnc
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCouponUsage = /* GraphQL */ `
  mutation CreateCouponUsage(
    $input: CreateCouponUsageInput!
    $condition: ModelCouponUsageConditionInput
  ) {
    createCouponUsage(input: $input, condition: $condition) {
      id
      coupon_code
      user_id
      times_used
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCouponUsage = /* GraphQL */ `
  mutation UpdateCouponUsage(
    $input: UpdateCouponUsageInput!
    $condition: ModelCouponUsageConditionInput
  ) {
    updateCouponUsage(input: $input, condition: $condition) {
      id
      coupon_code
      user_id
      times_used
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCouponUsage = /* GraphQL */ `
  mutation DeleteCouponUsage(
    $input: DeleteCouponUsageInput!
    $condition: ModelCouponUsageConditionInput
  ) {
    deleteCouponUsage(input: $input, condition: $condition) {
      id
      coupon_code
      user_id
      times_used
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      order_id
      customer_id
      restaurant_id
      order_date
      total_amount
      status
      orderItems {
        nextToken
        startedAt
        __typename
      }
      delivery_address
      payment_method
      delivery_time
      special_instructions
      delivery_fee
      tax_amount
      discount_amount
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      order_type
      customer_mobile_no
      customer_name
      is_favourite
      applied_coupon_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      order_id
      customer_id
      restaurant_id
      order_date
      total_amount
      status
      orderItems {
        nextToken
        startedAt
        __typename
      }
      delivery_address
      payment_method
      delivery_time
      special_instructions
      delivery_fee
      tax_amount
      discount_amount
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      order_type
      customer_mobile_no
      customer_name
      is_favourite
      applied_coupon_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      order_id
      customer_id
      restaurant_id
      order_date
      total_amount
      status
      orderItems {
        nextToken
        startedAt
        __typename
      }
      delivery_address
      payment_method
      delivery_time
      special_instructions
      delivery_fee
      tax_amount
      discount_amount
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      order_type
      customer_mobile_no
      customer_name
      is_favourite
      applied_coupon_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
      order_id
      quantity
      price
      name
      product_id
      total_price
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      id
      order_id
      quantity
      price
      name
      product_id
      total_price
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      id
      order_id
      quantity
      price
      name
      product_id
      total_price
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createAssignedOrders = /* GraphQL */ `
  mutation CreateAssignedOrders(
    $input: CreateAssignedOrdersInput!
    $condition: ModelAssignedOrdersConditionInput
  ) {
    createAssignedOrders(input: $input, condition: $condition) {
      id
      order_id
      restaurant_id
      item_id
      assign_to
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateAssignedOrders = /* GraphQL */ `
  mutation UpdateAssignedOrders(
    $input: UpdateAssignedOrdersInput!
    $condition: ModelAssignedOrdersConditionInput
  ) {
    updateAssignedOrders(input: $input, condition: $condition) {
      id
      order_id
      restaurant_id
      item_id
      assign_to
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAssignedOrders = /* GraphQL */ `
  mutation DeleteAssignedOrders(
    $input: DeleteAssignedOrdersInput!
    $condition: ModelAssignedOrdersConditionInput
  ) {
    deleteAssignedOrders(input: $input, condition: $condition) {
      id
      order_id
      restaurant_id
      item_id
      assign_to
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createTax = /* GraphQL */ `
  mutation CreateTax(
    $input: CreateTaxInput!
    $condition: ModelTaxConditionInput
  ) {
    createTax(input: $input, condition: $condition) {
      id
      title
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTax = /* GraphQL */ `
  mutation UpdateTax(
    $input: UpdateTaxInput!
    $condition: ModelTaxConditionInput
  ) {
    updateTax(input: $input, condition: $condition) {
      id
      title
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTax = /* GraphQL */ `
  mutation DeleteTax(
    $input: DeleteTaxInput!
    $condition: ModelTaxConditionInput
  ) {
    deleteTax(input: $input, condition: $condition) {
      id
      title
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      uname
      phone_number
      user_id
      address_1
      address_2
      city
      state
      pin_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      uname
      phone_number
      user_id
      address_1
      address_2
      city
      state
      pin_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      uname
      phone_number
      user_id
      address_1
      address_2
      city
      state
      pin_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createFavourites = /* GraphQL */ `
  mutation CreateFavourites(
    $input: CreateFavouritesInput!
    $condition: ModelFavouritesConditionInput
  ) {
    createFavourites(input: $input, condition: $condition) {
      id
      user_id
      product_id
      favourite_type
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateFavourites = /* GraphQL */ `
  mutation UpdateFavourites(
    $input: UpdateFavouritesInput!
    $condition: ModelFavouritesConditionInput
  ) {
    updateFavourites(input: $input, condition: $condition) {
      id
      user_id
      product_id
      favourite_type
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteFavourites = /* GraphQL */ `
  mutation DeleteFavourites(
    $input: DeleteFavouritesInput!
    $condition: ModelFavouritesConditionInput
  ) {
    deleteFavourites(input: $input, condition: $condition) {
      id
      user_id
      product_id
      favourite_type
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createItemRating = /* GraphQL */ `
  mutation CreateItemRating(
    $input: CreateItemRatingInput!
    $condition: ModelItemRatingConditionInput
  ) {
    createItemRating(input: $input, condition: $condition) {
      id
      item_id
      rating
      customer_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateItemRating = /* GraphQL */ `
  mutation UpdateItemRating(
    $input: UpdateItemRatingInput!
    $condition: ModelItemRatingConditionInput
  ) {
    updateItemRating(input: $input, condition: $condition) {
      id
      item_id
      rating
      customer_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteItemRating = /* GraphQL */ `
  mutation DeleteItemRating(
    $input: DeleteItemRatingInput!
    $condition: ModelItemRatingConditionInput
  ) {
    deleteItemRating(input: $input, condition: $condition) {
      id
      item_id
      rating
      customer_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCountry = /* GraphQL */ `
  mutation CreateCountry(
    $input: CreateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    createCountry(input: $input, condition: $condition) {
      id
      name
      country_code
      phone_code
      States {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry(
    $input: UpdateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    updateCountry(input: $input, condition: $condition) {
      id
      name
      country_code
      phone_code
      States {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry(
    $input: DeleteCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    deleteCountry(input: $input, condition: $condition) {
      id
      name
      country_code
      phone_code
      States {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createState = /* GraphQL */ `
  mutation CreateState(
    $input: CreateStateInput!
    $condition: ModelStateConditionInput
  ) {
    createState(input: $input, condition: $condition) {
      id
      name
      country_id
      Cities {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateState = /* GraphQL */ `
  mutation UpdateState(
    $input: UpdateStateInput!
    $condition: ModelStateConditionInput
  ) {
    updateState(input: $input, condition: $condition) {
      id
      name
      country_id
      Cities {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteState = /* GraphQL */ `
  mutation DeleteState(
    $input: DeleteStateInput!
    $condition: ModelStateConditionInput
  ) {
    deleteState(input: $input, condition: $condition) {
      id
      name
      country_id
      Cities {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
      id
      name
      state_id
      Areas {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
      id
      name
      state_id
      Areas {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
      id
      name
      state_id
      Areas {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createArea = /* GraphQL */ `
  mutation CreateArea(
    $input: CreateAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    createArea(input: $input, condition: $condition) {
      id
      name
      city_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateArea = /* GraphQL */ `
  mutation UpdateArea(
    $input: UpdateAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    updateArea(input: $input, condition: $condition) {
      id
      name
      city_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteArea = /* GraphQL */ `
  mutation DeleteArea(
    $input: DeleteAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    deleteArea(input: $input, condition: $condition) {
      id
      name
      city_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createBasePromotion = /* GraphQL */ `
  mutation CreateBasePromotion(
    $input: CreateBasePromotionInput!
    $condition: ModelBasePromotionConditionInput
  ) {
    createBasePromotion(input: $input, condition: $condition) {
      id
      coupon_code
      coupon_type
      coupon_value
      status
      description
      Promotions {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateBasePromotion = /* GraphQL */ `
  mutation UpdateBasePromotion(
    $input: UpdateBasePromotionInput!
    $condition: ModelBasePromotionConditionInput
  ) {
    updateBasePromotion(input: $input, condition: $condition) {
      id
      coupon_code
      coupon_type
      coupon_value
      status
      description
      Promotions {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteBasePromotion = /* GraphQL */ `
  mutation DeleteBasePromotion(
    $input: DeleteBasePromotionInput!
    $condition: ModelBasePromotionConditionInput
  ) {
    deleteBasePromotion(input: $input, condition: $condition) {
      id
      coupon_code
      coupon_type
      coupon_value
      status
      description
      Promotions {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPromotion = /* GraphQL */ `
  mutation CreatePromotion(
    $input: CreatePromotionInput!
    $condition: ModelPromotionConditionInput
  ) {
    createPromotion(input: $input, condition: $condition) {
      id
      coupon_code
      title
      description
      Restaurants {
        nextToken
        startedAt
        __typename
      }
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      start_date
      end_date
      status
      promotion_type
      image_path
      visibility
      device_detects
      period_days
      base_promotion_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePromotion = /* GraphQL */ `
  mutation UpdatePromotion(
    $input: UpdatePromotionInput!
    $condition: ModelPromotionConditionInput
  ) {
    updatePromotion(input: $input, condition: $condition) {
      id
      coupon_code
      title
      description
      Restaurants {
        nextToken
        startedAt
        __typename
      }
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      start_date
      end_date
      status
      promotion_type
      image_path
      visibility
      device_detects
      period_days
      base_promotion_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePromotion = /* GraphQL */ `
  mutation DeletePromotion(
    $input: DeletePromotionInput!
    $condition: ModelPromotionConditionInput
  ) {
    deletePromotion(input: $input, condition: $condition) {
      id
      coupon_code
      title
      description
      Restaurants {
        nextToken
        startedAt
        __typename
      }
      service_method_id
      service_method {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      start_date
      end_date
      status
      promotion_type
      image_path
      visibility
      device_detects
      period_days
      base_promotion_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createStatus = /* GraphQL */ `
  mutation CreateStatus(
    $input: CreateStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    createStatus(input: $input, condition: $condition) {
      id
      status_name
      description
      entity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateStatus = /* GraphQL */ `
  mutation UpdateStatus(
    $input: UpdateStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    updateStatus(input: $input, condition: $condition) {
      id
      status_name
      description
      entity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteStatus = /* GraphQL */ `
  mutation DeleteStatus(
    $input: DeleteStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    deleteStatus(input: $input, condition: $condition) {
      id
      status_name
      description
      entity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createServiceMethod = /* GraphQL */ `
  mutation CreateServiceMethod(
    $input: CreateServiceMethodInput!
    $condition: ModelServiceMethodConditionInput
  ) {
    createServiceMethod(input: $input, condition: $condition) {
      id
      service_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateServiceMethod = /* GraphQL */ `
  mutation UpdateServiceMethod(
    $input: UpdateServiceMethodInput!
    $condition: ModelServiceMethodConditionInput
  ) {
    updateServiceMethod(input: $input, condition: $condition) {
      id
      service_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteServiceMethod = /* GraphQL */ `
  mutation DeleteServiceMethod(
    $input: DeleteServiceMethodInput!
    $condition: ModelServiceMethodConditionInput
  ) {
    deleteServiceMethod(input: $input, condition: $condition) {
      id
      service_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createRestaurantPromotion = /* GraphQL */ `
  mutation CreateRestaurantPromotion(
    $input: CreateRestaurantPromotionInput!
    $condition: ModelRestaurantPromotionConditionInput
  ) {
    createRestaurantPromotion(input: $input, condition: $condition) {
      id
      promotion_id
      restaurant_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateRestaurantPromotion = /* GraphQL */ `
  mutation UpdateRestaurantPromotion(
    $input: UpdateRestaurantPromotionInput!
    $condition: ModelRestaurantPromotionConditionInput
  ) {
    updateRestaurantPromotion(input: $input, condition: $condition) {
      id
      promotion_id
      restaurant_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteRestaurantPromotion = /* GraphQL */ `
  mutation DeleteRestaurantPromotion(
    $input: DeleteRestaurantPromotionInput!
    $condition: ModelRestaurantPromotionConditionInput
  ) {
    deleteRestaurantPromotion(input: $input, condition: $condition) {
      id
      promotion_id
      restaurant_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createAppSetting = /* GraphQL */ `
  mutation CreateAppSetting(
    $input: CreateAppSettingInput!
    $condition: ModelAppSettingConditionInput
  ) {
    createAppSetting(input: $input, condition: $condition) {
      id
      setting_key
      setting_value
      description
      value_type
      is_active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateAppSetting = /* GraphQL */ `
  mutation UpdateAppSetting(
    $input: UpdateAppSettingInput!
    $condition: ModelAppSettingConditionInput
  ) {
    updateAppSetting(input: $input, condition: $condition) {
      id
      setting_key
      setting_value
      description
      value_type
      is_active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAppSetting = /* GraphQL */ `
  mutation DeleteAppSetting(
    $input: DeleteAppSettingInput!
    $condition: ModelAppSettingConditionInput
  ) {
    deleteAppSetting(input: $input, condition: $condition) {
      id
      setting_key
      setting_value
      description
      value_type
      is_active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCurrency = /* GraphQL */ `
  mutation CreateCurrency(
    $input: CreateCurrencyInput!
    $condition: ModelCurrencyConditionInput
  ) {
    createCurrency(input: $input, condition: $condition) {
      id
      name
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCurrency = /* GraphQL */ `
  mutation UpdateCurrency(
    $input: UpdateCurrencyInput!
    $condition: ModelCurrencyConditionInput
  ) {
    updateCurrency(input: $input, condition: $condition) {
      id
      name
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCurrency = /* GraphQL */ `
  mutation DeleteCurrency(
    $input: DeleteCurrencyInput!
    $condition: ModelCurrencyConditionInput
  ) {
    deleteCurrency(input: $input, condition: $condition) {
      id
      name
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createAppMultilingualContent = /* GraphQL */ `
  mutation CreateAppMultilingualContent(
    $input: CreateAppMultilingualContentInput!
    $condition: ModelAppMultilingualContentConditionInput
  ) {
    createAppMultilingualContent(input: $input, condition: $condition) {
      id
      content_key
      content_en
      content_es
      content_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateAppMultilingualContent = /* GraphQL */ `
  mutation UpdateAppMultilingualContent(
    $input: UpdateAppMultilingualContentInput!
    $condition: ModelAppMultilingualContentConditionInput
  ) {
    updateAppMultilingualContent(input: $input, condition: $condition) {
      id
      content_key
      content_en
      content_es
      content_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAppMultilingualContent = /* GraphQL */ `
  mutation DeleteAppMultilingualContent(
    $input: DeleteAppMultilingualContentInput!
    $condition: ModelAppMultilingualContentConditionInput
  ) {
    deleteAppMultilingualContent(input: $input, condition: $condition) {
      id
      content_key
      content_en
      content_es
      content_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createOptionType = /* GraphQL */ `
  mutation CreateOptionType(
    $input: CreateOptionTypeInput!
    $condition: ModelOptionTypeConditionInput
  ) {
    createOptionType(input: $input, condition: $condition) {
      id
      option_type_name
      is_parent
      parent_id
      image_path
      selection_type
      is_frontend_req
      status
      options {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateOptionType = /* GraphQL */ `
  mutation UpdateOptionType(
    $input: UpdateOptionTypeInput!
    $condition: ModelOptionTypeConditionInput
  ) {
    updateOptionType(input: $input, condition: $condition) {
      id
      option_type_name
      is_parent
      parent_id
      image_path
      selection_type
      is_frontend_req
      status
      options {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteOptionType = /* GraphQL */ `
  mutation DeleteOptionType(
    $input: DeleteOptionTypeInput!
    $condition: ModelOptionTypeConditionInput
  ) {
    deleteOptionType(input: $input, condition: $condition) {
      id
      option_type_name
      is_parent
      parent_id
      image_path
      selection_type
      is_frontend_req
      status
      options {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createOption = /* GraphQL */ `
  mutation CreateOption(
    $input: CreateOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    createOption(input: $input, condition: $condition) {
      id
      option_name
      option_code
      option_description
      image_path
      option_price
      status
      option_type_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateOption = /* GraphQL */ `
  mutation UpdateOption(
    $input: UpdateOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    updateOption(input: $input, condition: $condition) {
      id
      option_name
      option_code
      option_description
      image_path
      option_price
      status
      option_type_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteOption = /* GraphQL */ `
  mutation DeleteOption(
    $input: DeleteOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    deleteOption(input: $input, condition: $condition) {
      id
      option_name
      option_code
      option_description
      image_path
      option_price
      status
      option_type_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createOptionPrice = /* GraphQL */ `
  mutation CreateOptionPrice(
    $input: CreateOptionPriceInput!
    $condition: ModelOptionPriceConditionInput
  ) {
    createOptionPrice(input: $input, condition: $condition) {
      id
      option_id
      option_base_id
      option_price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateOptionPrice = /* GraphQL */ `
  mutation UpdateOptionPrice(
    $input: UpdateOptionPriceInput!
    $condition: ModelOptionPriceConditionInput
  ) {
    updateOptionPrice(input: $input, condition: $condition) {
      id
      option_id
      option_base_id
      option_price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteOptionPrice = /* GraphQL */ `
  mutation DeleteOptionPrice(
    $input: DeleteOptionPriceInput!
    $condition: ModelOptionPriceConditionInput
  ) {
    deleteOptionPrice(input: $input, condition: $condition) {
      id
      option_id
      option_base_id
      option_price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      tag_name
      is_show_on_cart
      Products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      tag_name
      is_show_on_cart
      Products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      tag_name
      is_show_on_cart
      Products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPaymentServices = /* GraphQL */ `
  mutation CreatePaymentServices(
    $input: CreatePaymentServicesInput!
    $condition: ModelPaymentServicesConditionInput
  ) {
    createPaymentServices(input: $input, condition: $condition) {
      id
      title
      new_order_status
      payment_applicable_for
      status
      merchant_id
      client_key
      server_key
      environment
      sort_order
      min_order_total
      max_order_total
      instructions
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePaymentServices = /* GraphQL */ `
  mutation UpdatePaymentServices(
    $input: UpdatePaymentServicesInput!
    $condition: ModelPaymentServicesConditionInput
  ) {
    updatePaymentServices(input: $input, condition: $condition) {
      id
      title
      new_order_status
      payment_applicable_for
      status
      merchant_id
      client_key
      server_key
      environment
      sort_order
      min_order_total
      max_order_total
      instructions
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePaymentServices = /* GraphQL */ `
  mutation DeletePaymentServices(
    $input: DeletePaymentServicesInput!
    $condition: ModelPaymentServicesConditionInput
  ) {
    deletePaymentServices(input: $input, condition: $condition) {
      id
      title
      new_order_status
      payment_applicable_for
      status
      merchant_id
      client_key
      server_key
      environment
      sort_order
      min_order_total
      max_order_total
      instructions
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
      id
      restaurant_id
      store_mapping_code
      store_title_en
      store_title_idn
      store_phone
      store_slug
      store_minimum_order_amount
      ws_url
      ws_user
      ws_password
      store_published
      store_allow_internet
      store_allow_order_tracker
      store_allow_forward_status
      qr_code_link
      service_method
      store_street
      store_area
      store_city
      store_zipcode
      store_location_long
      store_location_lat
      store_open_at
      store_close_at
      Products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
      id
      restaurant_id
      store_mapping_code
      store_title_en
      store_title_idn
      store_phone
      store_slug
      store_minimum_order_amount
      ws_url
      ws_user
      ws_password
      store_published
      store_allow_internet
      store_allow_order_tracker
      store_allow_forward_status
      qr_code_link
      service_method
      store_street
      store_area
      store_city
      store_zipcode
      store_location_long
      store_location_lat
      store_open_at
      store_close_at
      Products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
      id
      restaurant_id
      store_mapping_code
      store_title_en
      store_title_idn
      store_phone
      store_slug
      store_minimum_order_amount
      ws_url
      ws_user
      ws_password
      store_published
      store_allow_internet
      store_allow_order_tracker
      store_allow_forward_status
      qr_code_link
      service_method
      store_street
      store_area
      store_city
      store_zipcode
      store_location_long
      store_location_lat
      store_open_at
      store_close_at
      Products {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createBaseCoupon = /* GraphQL */ `
  mutation CreateBaseCoupon(
    $input: CreateBaseCouponInput!
    $condition: ModelBaseCouponConditionInput
  ) {
    createBaseCoupon(input: $input, condition: $condition) {
      id
      coupon_code
      coupon_value
      coupon_type
      description
      min_cart_value
      usage_limit
      service_method
      status
      Coupons {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateBaseCoupon = /* GraphQL */ `
  mutation UpdateBaseCoupon(
    $input: UpdateBaseCouponInput!
    $condition: ModelBaseCouponConditionInput
  ) {
    updateBaseCoupon(input: $input, condition: $condition) {
      id
      coupon_code
      coupon_value
      coupon_type
      description
      min_cart_value
      usage_limit
      service_method
      status
      Coupons {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteBaseCoupon = /* GraphQL */ `
  mutation DeleteBaseCoupon(
    $input: DeleteBaseCouponInput!
    $condition: ModelBaseCouponConditionInput
  ) {
    deleteBaseCoupon(input: $input, condition: $condition) {
      id
      coupon_code
      coupon_value
      coupon_type
      description
      min_cart_value
      usage_limit
      service_method
      status
      Coupons {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createVouchers = /* GraphQL */ `
  mutation CreateVouchers(
    $input: CreateVouchersInput!
    $condition: ModelVouchersConditionInput
  ) {
    createVouchers(input: $input, condition: $condition) {
      voucher_code
      voucher_type
      mobile
      email
      valid_from
      valid_till
      tnc
      description
      title
      mininum_cart_value
      max_time_use
      prefix
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateVouchers = /* GraphQL */ `
  mutation UpdateVouchers(
    $input: UpdateVouchersInput!
    $condition: ModelVouchersConditionInput
  ) {
    updateVouchers(input: $input, condition: $condition) {
      voucher_code
      voucher_type
      mobile
      email
      valid_from
      valid_till
      tnc
      description
      title
      mininum_cart_value
      max_time_use
      prefix
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteVouchers = /* GraphQL */ `
  mutation DeleteVouchers(
    $input: DeleteVouchersInput!
    $condition: ModelVouchersConditionInput
  ) {
    deleteVouchers(input: $input, condition: $condition) {
      voucher_code
      voucher_type
      mobile
      email
      valid_from
      valid_till
      tnc
      description
      title
      mininum_cart_value
      max_time_use
      prefix
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createTestvoucher = /* GraphQL */ `
  mutation CreateTestvoucher(
    $input: CreateTestvoucherInput!
    $condition: ModelTestvoucherConditionInput
  ) {
    createTestvoucher(input: $input, condition: $condition) {
      id
      title
      description
      voucher_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTestvoucher = /* GraphQL */ `
  mutation UpdateTestvoucher(
    $input: UpdateTestvoucherInput!
    $condition: ModelTestvoucherConditionInput
  ) {
    updateTestvoucher(input: $input, condition: $condition) {
      id
      title
      description
      voucher_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTestvoucher = /* GraphQL */ `
  mutation DeleteTestvoucher(
    $input: DeleteTestvoucherInput!
    $condition: ModelTestvoucherConditionInput
  ) {
    deleteTestvoucher(input: $input, condition: $condition) {
      id
      title
      description
      voucher_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createProductStore = /* GraphQL */ `
  mutation CreateProductStore(
    $input: CreateProductStoreInput!
    $condition: ModelProductStoreConditionInput
  ) {
    createProductStore(input: $input, condition: $condition) {
      id
      productId
      storeId
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      store {
        id
        restaurant_id
        store_mapping_code
        store_title_en
        store_title_idn
        store_phone
        store_slug
        store_minimum_order_amount
        ws_url
        ws_user
        ws_password
        store_published
        store_allow_internet
        store_allow_order_tracker
        store_allow_forward_status
        qr_code_link
        service_method
        store_street
        store_area
        store_city
        store_zipcode
        store_location_long
        store_location_lat
        store_open_at
        store_close_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateProductStore = /* GraphQL */ `
  mutation UpdateProductStore(
    $input: UpdateProductStoreInput!
    $condition: ModelProductStoreConditionInput
  ) {
    updateProductStore(input: $input, condition: $condition) {
      id
      productId
      storeId
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      store {
        id
        restaurant_id
        store_mapping_code
        store_title_en
        store_title_idn
        store_phone
        store_slug
        store_minimum_order_amount
        ws_url
        ws_user
        ws_password
        store_published
        store_allow_internet
        store_allow_order_tracker
        store_allow_forward_status
        qr_code_link
        service_method
        store_street
        store_area
        store_city
        store_zipcode
        store_location_long
        store_location_lat
        store_open_at
        store_close_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteProductStore = /* GraphQL */ `
  mutation DeleteProductStore(
    $input: DeleteProductStoreInput!
    $condition: ModelProductStoreConditionInput
  ) {
    deleteProductStore(input: $input, condition: $condition) {
      id
      productId
      storeId
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      store {
        id
        restaurant_id
        store_mapping_code
        store_title_en
        store_title_idn
        store_phone
        store_slug
        store_minimum_order_amount
        ws_url
        ws_user
        ws_password
        store_published
        store_allow_internet
        store_allow_order_tracker
        store_allow_forward_status
        qr_code_link
        service_method
        store_street
        store_area
        store_city
        store_zipcode
        store_location_long
        store_location_lat
        store_open_at
        store_close_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createProductTag = /* GraphQL */ `
  mutation CreateProductTag(
    $input: CreateProductTagInput!
    $condition: ModelProductTagConditionInput
  ) {
    createProductTag(input: $input, condition: $condition) {
      id
      productId
      tagId
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      tag {
        id
        tag_name
        is_show_on_cart
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateProductTag = /* GraphQL */ `
  mutation UpdateProductTag(
    $input: UpdateProductTagInput!
    $condition: ModelProductTagConditionInput
  ) {
    updateProductTag(input: $input, condition: $condition) {
      id
      productId
      tagId
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      tag {
        id
        tag_name
        is_show_on_cart
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteProductTag = /* GraphQL */ `
  mutation DeleteProductTag(
    $input: DeleteProductTagInput!
    $condition: ModelProductTagConditionInput
  ) {
    deleteProductTag(input: $input, condition: $condition) {
      id
      productId
      tagId
      product {
        id
        name
        description
        price
        sku
        status
        in_stock
        stock_alert
        image_path
        tax_id
        category_id
        default_toppings
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      tag {
        id
        tag_name
        is_show_on_cart
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
