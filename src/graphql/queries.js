/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImageContent = /* GraphQL */ `
  query GetImageContent {
    getImageContent {
      id
      filename
      url
      description
      content
      __typename
    }
  }
`;
export const getServiceType = /* GraphQL */ `
  query GetServiceType {
    getServiceType {
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
export const getRestaurantOrderList = /* GraphQL */ `
  query GetRestaurantOrderList($restaurantId: ID!) {
    getRestaurantOrderList(restaurantId: $restaurantId) {
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
export const getRestaurantItemList = /* GraphQL */ `
  query GetRestaurantItemList($restaurantId: ID!) {
    getRestaurantItemList(restaurantId: $restaurantId) {
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
export const getUserDetails = /* GraphQL */ `
  query GetUserDetails($id: ID!) {
    getUserDetails(id: $id) {
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
export const groupList = /* GraphQL */ `
  query GroupList($username: String) {
    groupList(username: $username) {
      groupName
      description
      precedence
      __typename
    }
  }
`;
export const getLoggedInUserBasedGroups = /* GraphQL */ `
  query GetLoggedInUserBasedGroups($username: String) {
    getLoggedInUserBasedGroups(username: $username) {
      groupName
      description
      precedence
      __typename
    }
  }
`;
export const getRestaurantWorkerlist = /* GraphQL */ `
  query GetRestaurantWorkerlist($email: String) {
    getRestaurantWorkerlist(email: $email) {
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
export const getRestaurantBranchList = /* GraphQL */ `
  query GetRestaurantBranchList($owner_number: String) {
    getRestaurantBranchList(owner_number: $owner_number) {
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
export const countries = /* GraphQL */ `
  query Countries {
    countries {
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
export const states = /* GraphQL */ `
  query States($country_id: ID!) {
    states(country_id: $country_id) {
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
export const cities = /* GraphQL */ `
  query Cities($state_id: ID!) {
    cities(state_id: $state_id) {
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
export const getPromotionsByRestaurant = /* GraphQL */ `
  query GetPromotionsByRestaurant($restaurant_id: ID!) {
    getPromotionsByRestaurant(restaurant_id: $restaurant_id) {
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
export const getProductDetail = /* GraphQL */ `
  query GetProductDetail($product_id: ID!) {
    getProductDetail(product_id: $product_id) {
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
export const getUserAddressList = /* GraphQL */ `
  query GetUserAddressList($user_id: ID!) {
    getUserAddressList(user_id: $user_id) {
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
export const getPopularItemsList = /* GraphQL */ `
  query GetPopularItemsList($limit: Int) {
    getPopularItemsList(limit: $limit) {
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
export const getFavoriteOrders = /* GraphQL */ `
  query GetFavoriteOrders($user_id: ID!) {
    getFavoriteOrders(user_id: $user_id) {
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
export const getCouponDetails = /* GraphQL */ `
  query GetCouponDetails($coupon_code: String!) {
    getCouponDetails(coupon_code: $coupon_code) {
      id
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
export const validateCouponCode = /* GraphQL */ `
  query ValidateCouponCode($input: CouponInput) {
    validateCouponCode(input: $input) {
      statusCode
      message
      data {
        id
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
      __typename
    }
  }
`;
export const trackOrder = /* GraphQL */ `
  query TrackOrder($order_id: String!) {
    trackOrder(order_id: $order_id) {
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
export const getConfiguration = /* GraphQL */ `
  query GetConfiguration {
    getConfiguration {
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
export const getProductOptionCombination = /* GraphQL */ `
  query GetProductOptionCombination {
    getProductOptionCombination {
      id
      option_code
      option_type_id
      option_name
      __typename
    }
  }
`;
export const getStorebyCity = /* GraphQL */ `
  query GetStorebyCity($input: SearchByInput) {
    getStorebyCity(input: $input) {
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
export const getServiceMethodList = /* GraphQL */ `
  query GetServiceMethodList($type: String) {
    getServiceMethodList(type: $type) {
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
export const getDashboardMenus = /* GraphQL */ `
  query GetDashboardMenus($id: ID!) {
    getDashboardMenus(id: $id) {
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
export const listDashboardMenus = /* GraphQL */ `
  query ListDashboardMenus(
    $filter: ModelDashboardMenusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDashboardMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDashboardMenus = /* GraphQL */ `
  query SyncDashboardMenus(
    $filter: ModelDashboardMenusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDashboardMenus(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRestaurants = /* GraphQL */ `
  query GetRestaurants($id: ID!) {
    getRestaurants(id: $id) {
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
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        tax_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRestaurants = /* GraphQL */ `
  query SyncRestaurants(
    $filter: ModelRestaurantsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRestaurants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        tax_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        restaurant_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMenus = /* GraphQL */ `
  query SyncMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMenus(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        restaurant_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const menusByRestaurant_id = /* GraphQL */ `
  query MenusByRestaurant_id(
    $restaurant_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    menusByRestaurant_id(
      restaurant_id: $restaurant_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        restaurant_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image_path
        parent_id
        menu_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        image_path
        parent_id
        menu_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const categoriesByMenu_id = /* GraphQL */ `
  query CategoriesByMenu_id(
    $menu_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoriesByMenu_id(
      menu_id: $menu_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        image_path
        parent_id
        menu_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const productsByCategory_id = /* GraphQL */ `
  query ProductsByCategory_id(
    $category_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByCategory_id(
      category_id: $category_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProductOptionType = /* GraphQL */ `
  query GetProductOptionType($id: ID!) {
    getProductOptionType(id: $id) {
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
export const listProductOptionTypes = /* GraphQL */ `
  query ListProductOptionTypes(
    $filter: ModelProductOptionTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductOptionTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProductOptionTypes = /* GraphQL */ `
  query SyncProductOptionTypes(
    $filter: ModelProductOptionTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductOptionTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const productOptionTypesByProduct_id = /* GraphQL */ `
  query ProductOptionTypesByProduct_id(
    $product_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductOptionTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productOptionTypesByProduct_id(
      product_id: $product_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
      id
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
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCoupons = /* GraphQL */ `
  query SyncCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoupons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const couponsByCoupon_code = /* GraphQL */ `
  query CouponsByCoupon_code(
    $coupon_code: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    couponsByCoupon_code(
      coupon_code: $coupon_code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const couponsByMinimum_cart_value = /* GraphQL */ `
  query CouponsByMinimum_cart_value(
    $minimum_cart_value: Float!
    $sortDirection: ModelSortDirection
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    couponsByMinimum_cart_value(
      minimum_cart_value: $minimum_cart_value
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCouponUsage = /* GraphQL */ `
  query GetCouponUsage($id: ID!) {
    getCouponUsage(id: $id) {
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
export const listCouponUsages = /* GraphQL */ `
  query ListCouponUsages(
    $filter: ModelCouponUsageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCouponUsages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCouponUsages = /* GraphQL */ `
  query SyncCouponUsages(
    $filter: ModelCouponUsageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCouponUsages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const couponUsagesByUser_id = /* GraphQL */ `
  query CouponUsagesByUser_id(
    $user_id: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCouponUsageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    couponUsagesByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order_id
        customer_id
        restaurant_id
        order_date
        total_amount
        status
        delivery_address
        payment_method
        delivery_time
        special_instructions
        delivery_fee
        tax_amount
        discount_amount
        service_method_id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        order_id
        customer_id
        restaurant_id
        order_date
        total_amount
        status
        delivery_address
        payment_method
        delivery_time
        special_instructions
        delivery_fee
        tax_amount
        discount_amount
        service_method_id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const ordersByOrder_id = /* GraphQL */ `
  query OrdersByOrder_id(
    $order_id: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByOrder_id(
      order_id: $order_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        order_id
        customer_id
        restaurant_id
        order_date
        total_amount
        status
        delivery_address
        payment_method
        delivery_time
        special_instructions
        delivery_fee
        tax_amount
        discount_amount
        service_method_id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order_id
        quantity
        price
        name
        product_id
        total_price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncOrderItems = /* GraphQL */ `
  query SyncOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        order_id
        quantity
        price
        name
        product_id
        total_price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const orderItemsByOrder_id = /* GraphQL */ `
  query OrderItemsByOrder_id(
    $order_id: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByOrder_id(
      order_id: $order_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        order_id
        quantity
        price
        name
        product_id
        total_price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAssignedOrders = /* GraphQL */ `
  query GetAssignedOrders($id: ID!) {
    getAssignedOrders(id: $id) {
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
export const listAssignedOrders = /* GraphQL */ `
  query ListAssignedOrders(
    $filter: ModelAssignedOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignedOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAssignedOrders = /* GraphQL */ `
  query SyncAssignedOrders(
    $filter: ModelAssignedOrdersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssignedOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTax = /* GraphQL */ `
  query GetTax($id: ID!) {
    getTax(id: $id) {
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
export const listTaxes = /* GraphQL */ `
  query ListTaxes(
    $filter: ModelTaxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaxes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTaxes = /* GraphQL */ `
  query SyncTaxes(
    $filter: ModelTaxFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTaxes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getFavourites = /* GraphQL */ `
  query GetFavourites($id: ID!) {
    getFavourites(id: $id) {
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
export const listFavourites = /* GraphQL */ `
  query ListFavourites(
    $filter: ModelFavouritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavourites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        product_id
        favourite_type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFavourites = /* GraphQL */ `
  query SyncFavourites(
    $filter: ModelFavouritesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFavourites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user_id
        product_id
        favourite_type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const favouritesByUser_id = /* GraphQL */ `
  query FavouritesByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavouritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favouritesByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        product_id
        favourite_type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const favouritesByProduct_id = /* GraphQL */ `
  query FavouritesByProduct_id(
    $product_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavouritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favouritesByProduct_id(
      product_id: $product_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        product_id
        favourite_type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getItemRating = /* GraphQL */ `
  query GetItemRating($id: ID!) {
    getItemRating(id: $id) {
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
export const listItemRatings = /* GraphQL */ `
  query ListItemRatings(
    $filter: ModelItemRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncItemRatings = /* GraphQL */ `
  query SyncItemRatings(
    $filter: ModelItemRatingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItemRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const itemRatingsByItem_id = /* GraphQL */ `
  query ItemRatingsByItem_id(
    $item_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelItemRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemRatingsByItem_id(
      item_id: $item_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
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
export const listCountries = /* GraphQL */ `
  query ListCountries(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        country_code
        phone_code
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCountries = /* GraphQL */ `
  query SyncCountries(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCountries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        country_code
        phone_code
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getState = /* GraphQL */ `
  query GetState($id: ID!) {
    getState(id: $id) {
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
export const listStates = /* GraphQL */ `
  query ListStates(
    $filter: ModelStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        country_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStates = /* GraphQL */ `
  query SyncStates(
    $filter: ModelStateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        country_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const statesByCountry_id = /* GraphQL */ `
  query StatesByCountry_id(
    $country_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    statesByCountry_id(
      country_id: $country_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        country_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCity = /* GraphQL */ `
  query GetCity($id: ID!) {
    getCity(id: $id) {
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
export const listCities = /* GraphQL */ `
  query ListCities(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        state_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCities = /* GraphQL */ `
  query SyncCities(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        state_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const citiesByState_id = /* GraphQL */ `
  query CitiesByState_id(
    $state_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    citiesByState_id(
      state_id: $state_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        state_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getArea = /* GraphQL */ `
  query GetArea($id: ID!) {
    getArea(id: $id) {
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
export const listAreas = /* GraphQL */ `
  query ListAreas(
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAreas = /* GraphQL */ `
  query SyncAreas(
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAreas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const areasByCity_id = /* GraphQL */ `
  query AreasByCity_id(
    $city_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    areasByCity_id(
      city_id: $city_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBasePromotion = /* GraphQL */ `
  query GetBasePromotion($id: ID!) {
    getBasePromotion(id: $id) {
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
export const listBasePromotions = /* GraphQL */ `
  query ListBasePromotions(
    $filter: ModelBasePromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBasePromotions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coupon_code
        coupon_type
        coupon_value
        status
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBasePromotions = /* GraphQL */ `
  query SyncBasePromotions(
    $filter: ModelBasePromotionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBasePromotions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        coupon_code
        coupon_type
        coupon_value
        status
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPromotion = /* GraphQL */ `
  query GetPromotion($id: ID!) {
    getPromotion(id: $id) {
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
export const listPromotions = /* GraphQL */ `
  query ListPromotions(
    $filter: ModelPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromotions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coupon_code
        title
        description
        service_method_id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPromotions = /* GraphQL */ `
  query SyncPromotions(
    $filter: ModelPromotionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPromotions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        coupon_code
        title
        description
        service_method_id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const promotionsByBase_promotion_id = /* GraphQL */ `
  query PromotionsByBase_promotion_id(
    $base_promotion_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    promotionsByBase_promotion_id(
      base_promotion_id: $base_promotion_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        coupon_code
        title
        description
        service_method_id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getStatus = /* GraphQL */ `
  query GetStatus($id: ID!) {
    getStatus(id: $id) {
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
export const listStatuses = /* GraphQL */ `
  query ListStatuses(
    $filter: ModelStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStatuses = /* GraphQL */ `
  query SyncStatuses(
    $filter: ModelStatusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getServiceMethod = /* GraphQL */ `
  query GetServiceMethod($id: ID!) {
    getServiceMethod(id: $id) {
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
export const listServiceMethods = /* GraphQL */ `
  query ListServiceMethods(
    $filter: ModelServiceMethodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceMethods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncServiceMethods = /* GraphQL */ `
  query SyncServiceMethods(
    $filter: ModelServiceMethodFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServiceMethods(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        service_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRestaurantPromotion = /* GraphQL */ `
  query GetRestaurantPromotion($id: ID!) {
    getRestaurantPromotion(id: $id) {
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
export const listRestaurantPromotions = /* GraphQL */ `
  query ListRestaurantPromotions(
    $filter: ModelRestaurantPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurantPromotions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRestaurantPromotions = /* GraphQL */ `
  query SyncRestaurantPromotions(
    $filter: ModelRestaurantPromotionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRestaurantPromotions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const restaurantPromotionsByPromotion_id = /* GraphQL */ `
  query RestaurantPromotionsByPromotion_id(
    $promotion_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRestaurantPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    restaurantPromotionsByPromotion_id(
      promotion_id: $promotion_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const restaurantPromotionsByRestaurant_id = /* GraphQL */ `
  query RestaurantPromotionsByRestaurant_id(
    $restaurant_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRestaurantPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    restaurantPromotionsByRestaurant_id(
      restaurant_id: $restaurant_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAppSetting = /* GraphQL */ `
  query GetAppSetting($id: ID!) {
    getAppSetting(id: $id) {
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
export const listAppSettings = /* GraphQL */ `
  query ListAppSettings(
    $filter: ModelAppSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAppSettings = /* GraphQL */ `
  query SyncAppSettings(
    $filter: ModelAppSettingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppSettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCurrency = /* GraphQL */ `
  query GetCurrency($id: ID!) {
    getCurrency(id: $id) {
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
export const listCurrencies = /* GraphQL */ `
  query ListCurrencies(
    $filter: ModelCurrencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCurrencies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCurrencies = /* GraphQL */ `
  query SyncCurrencies(
    $filter: ModelCurrencyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCurrencies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAppMultilingualContent = /* GraphQL */ `
  query GetAppMultilingualContent($id: ID!) {
    getAppMultilingualContent(id: $id) {
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
export const listAppMultilingualContents = /* GraphQL */ `
  query ListAppMultilingualContents(
    $filter: ModelAppMultilingualContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppMultilingualContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAppMultilingualContents = /* GraphQL */ `
  query SyncAppMultilingualContents(
    $filter: ModelAppMultilingualContentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppMultilingualContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getOptionType = /* GraphQL */ `
  query GetOptionType($id: ID!) {
    getOptionType(id: $id) {
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
export const listOptionTypes = /* GraphQL */ `
  query ListOptionTypes(
    $filter: ModelOptionTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOptionTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        option_type_name
        is_parent
        parent_id
        image_path
        selection_type
        is_frontend_req
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncOptionTypes = /* GraphQL */ `
  query SyncOptionTypes(
    $filter: ModelOptionTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOptionTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        option_type_name
        is_parent
        parent_id
        image_path
        selection_type
        is_frontend_req
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getOption = /* GraphQL */ `
  query GetOption($id: ID!) {
    getOption(id: $id) {
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
export const listOptions = /* GraphQL */ `
  query ListOptions(
    $filter: ModelOptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncOptions = /* GraphQL */ `
  query SyncOptions(
    $filter: ModelOptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const optionsByOption_code = /* GraphQL */ `
  query OptionsByOption_code(
    $option_code: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    optionsByOption_code(
      option_code: $option_code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const optionsByOption_type_id = /* GraphQL */ `
  query OptionsByOption_type_id(
    $option_type_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    optionsByOption_type_id(
      option_type_id: $option_type_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getOptionPrice = /* GraphQL */ `
  query GetOptionPrice($id: ID!) {
    getOptionPrice(id: $id) {
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
export const listOptionPrices = /* GraphQL */ `
  query ListOptionPrices(
    $filter: ModelOptionPriceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOptionPrices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncOptionPrices = /* GraphQL */ `
  query SyncOptionPrices(
    $filter: ModelOptionPriceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOptionPrices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPaymentServices = /* GraphQL */ `
  query GetPaymentServices($id: ID!) {
    getPaymentServices(id: $id) {
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
export const listPaymentServices = /* GraphQL */ `
  query ListPaymentServices(
    $filter: ModelPaymentServicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPaymentServices = /* GraphQL */ `
  query SyncPaymentServices(
    $filter: ModelPaymentServicesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPaymentServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
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
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStores = /* GraphQL */ `
  query SyncStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const storesByRestaurant_id = /* GraphQL */ `
  query StoresByRestaurant_id(
    $restaurant_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storesByRestaurant_id(
      restaurant_id: $restaurant_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBaseCoupon = /* GraphQL */ `
  query GetBaseCoupon($id: ID!) {
    getBaseCoupon(id: $id) {
      id
      coupon_code
      coupon_value
      coupon_type
      description
      min_cart_value
      usage_limit
      service_method
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
export const listBaseCoupons = /* GraphQL */ `
  query ListBaseCoupons(
    $filter: ModelBaseCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaseCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coupon_code
        coupon_value
        coupon_type
        description
        min_cart_value
        usage_limit
        service_method
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBaseCoupons = /* GraphQL */ `
  query SyncBaseCoupons(
    $filter: ModelBaseCouponFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBaseCoupons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        coupon_code
        coupon_value
        coupon_type
        description
        min_cart_value
        usage_limit
        service_method
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTestvoucher = /* GraphQL */ `
  query GetTestvoucher($id: ID!) {
    getTestvoucher(id: $id) {
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
export const listTestvouchers = /* GraphQL */ `
  query ListTestvouchers(
    $filter: ModelTestvoucherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestvouchers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTestvouchers = /* GraphQL */ `
  query SyncTestvouchers(
    $filter: ModelTestvoucherFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestvouchers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProductStore = /* GraphQL */ `
  query GetProductStore($id: ID!) {
    getProductStore(id: $id) {
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
export const listProductStores = /* GraphQL */ `
  query ListProductStores(
    $filter: ModelProductStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productId
        storeId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProductStores = /* GraphQL */ `
  query SyncProductStores(
    $filter: ModelProductStoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductStores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        productId
        storeId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const productStoresByProductId = /* GraphQL */ `
  query ProductStoresByProductId(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productStoresByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        storeId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const productStoresByStoreId = /* GraphQL */ `
  query ProductStoresByStoreId(
    $storeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productStoresByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        storeId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProductTag = /* GraphQL */ `
  query GetProductTag($id: ID!) {
    getProductTag(id: $id) {
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
export const listProductTags = /* GraphQL */ `
  query ListProductTags(
    $filter: ModelProductTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productId
        tagId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProductTags = /* GraphQL */ `
  query SyncProductTags(
    $filter: ModelProductTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        productId
        tagId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const productTagsByProductId = /* GraphQL */ `
  query ProductTagsByProductId(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productTagsByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        tagId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const productTagsByTagId = /* GraphQL */ `
  query ProductTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        tagId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
