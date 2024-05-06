/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDashboardMenus = /* GraphQL */ `
  subscription OnCreateDashboardMenus(
    $filter: ModelSubscriptionDashboardMenusFilterInput
  ) {
    onCreateDashboardMenus(filter: $filter) {
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
export const onUpdateDashboardMenus = /* GraphQL */ `
  subscription OnUpdateDashboardMenus(
    $filter: ModelSubscriptionDashboardMenusFilterInput
  ) {
    onUpdateDashboardMenus(filter: $filter) {
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
export const onDeleteDashboardMenus = /* GraphQL */ `
  subscription OnDeleteDashboardMenus(
    $filter: ModelSubscriptionDashboardMenusFilterInput
  ) {
    onDeleteDashboardMenus(filter: $filter) {
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
export const onCreateRestaurants = /* GraphQL */ `
  subscription OnCreateRestaurants(
    $filter: ModelSubscriptionRestaurantsFilterInput
  ) {
    onCreateRestaurants(filter: $filter) {
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
export const onUpdateRestaurants = /* GraphQL */ `
  subscription OnUpdateRestaurants(
    $filter: ModelSubscriptionRestaurantsFilterInput
  ) {
    onUpdateRestaurants(filter: $filter) {
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
export const onDeleteRestaurants = /* GraphQL */ `
  subscription OnDeleteRestaurants(
    $filter: ModelSubscriptionRestaurantsFilterInput
  ) {
    onDeleteRestaurants(filter: $filter) {
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
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu($filter: ModelSubscriptionMenuFilterInput) {
    onCreateMenu(filter: $filter) {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu($filter: ModelSubscriptionMenuFilterInput) {
    onUpdateMenu(filter: $filter) {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu($filter: ModelSubscriptionMenuFilterInput) {
    onDeleteMenu(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateProductOptionType = /* GraphQL */ `
  subscription OnCreateProductOptionType(
    $filter: ModelSubscriptionProductOptionTypeFilterInput
  ) {
    onCreateProductOptionType(filter: $filter) {
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
export const onUpdateProductOptionType = /* GraphQL */ `
  subscription OnUpdateProductOptionType(
    $filter: ModelSubscriptionProductOptionTypeFilterInput
  ) {
    onUpdateProductOptionType(filter: $filter) {
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
export const onDeleteProductOptionType = /* GraphQL */ `
  subscription OnDeleteProductOptionType(
    $filter: ModelSubscriptionProductOptionTypeFilterInput
  ) {
    onDeleteProductOptionType(filter: $filter) {
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
export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onCreateCoupon(filter: $filter) {
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
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onUpdateCoupon(filter: $filter) {
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
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onDeleteCoupon(filter: $filter) {
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
export const onCreateCouponUsage = /* GraphQL */ `
  subscription OnCreateCouponUsage(
    $filter: ModelSubscriptionCouponUsageFilterInput
  ) {
    onCreateCouponUsage(filter: $filter) {
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
export const onUpdateCouponUsage = /* GraphQL */ `
  subscription OnUpdateCouponUsage(
    $filter: ModelSubscriptionCouponUsageFilterInput
  ) {
    onUpdateCouponUsage(filter: $filter) {
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
export const onDeleteCouponUsage = /* GraphQL */ `
  subscription OnDeleteCouponUsage(
    $filter: ModelSubscriptionCouponUsageFilterInput
  ) {
    onDeleteCouponUsage(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onCreateOrderItem(filter: $filter) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onUpdateOrderItem(filter: $filter) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onDeleteOrderItem(filter: $filter) {
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
export const onCreateAssignedOrders = /* GraphQL */ `
  subscription OnCreateAssignedOrders(
    $filter: ModelSubscriptionAssignedOrdersFilterInput
  ) {
    onCreateAssignedOrders(filter: $filter) {
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
export const onUpdateAssignedOrders = /* GraphQL */ `
  subscription OnUpdateAssignedOrders(
    $filter: ModelSubscriptionAssignedOrdersFilterInput
  ) {
    onUpdateAssignedOrders(filter: $filter) {
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
export const onDeleteAssignedOrders = /* GraphQL */ `
  subscription OnDeleteAssignedOrders(
    $filter: ModelSubscriptionAssignedOrdersFilterInput
  ) {
    onDeleteAssignedOrders(filter: $filter) {
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
export const onCreateTax = /* GraphQL */ `
  subscription OnCreateTax($filter: ModelSubscriptionTaxFilterInput) {
    onCreateTax(filter: $filter) {
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
export const onUpdateTax = /* GraphQL */ `
  subscription OnUpdateTax($filter: ModelSubscriptionTaxFilterInput) {
    onUpdateTax(filter: $filter) {
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
export const onDeleteTax = /* GraphQL */ `
  subscription OnDeleteTax($filter: ModelSubscriptionTaxFilterInput) {
    onDeleteTax(filter: $filter) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onCreateAddress(filter: $filter) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onUpdateAddress(filter: $filter) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
    onDeleteAddress(filter: $filter) {
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
export const onCreateFavourites = /* GraphQL */ `
  subscription OnCreateFavourites(
    $filter: ModelSubscriptionFavouritesFilterInput
  ) {
    onCreateFavourites(filter: $filter) {
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
export const onUpdateFavourites = /* GraphQL */ `
  subscription OnUpdateFavourites(
    $filter: ModelSubscriptionFavouritesFilterInput
  ) {
    onUpdateFavourites(filter: $filter) {
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
export const onDeleteFavourites = /* GraphQL */ `
  subscription OnDeleteFavourites(
    $filter: ModelSubscriptionFavouritesFilterInput
  ) {
    onDeleteFavourites(filter: $filter) {
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
export const onCreateItemRating = /* GraphQL */ `
  subscription OnCreateItemRating(
    $filter: ModelSubscriptionItemRatingFilterInput
  ) {
    onCreateItemRating(filter: $filter) {
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
export const onUpdateItemRating = /* GraphQL */ `
  subscription OnUpdateItemRating(
    $filter: ModelSubscriptionItemRatingFilterInput
  ) {
    onUpdateItemRating(filter: $filter) {
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
export const onDeleteItemRating = /* GraphQL */ `
  subscription OnDeleteItemRating(
    $filter: ModelSubscriptionItemRatingFilterInput
  ) {
    onDeleteItemRating(filter: $filter) {
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
export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onCreateCountry(filter: $filter) {
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
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onUpdateCountry(filter: $filter) {
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
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry($filter: ModelSubscriptionCountryFilterInput) {
    onDeleteCountry(filter: $filter) {
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
export const onCreateState = /* GraphQL */ `
  subscription OnCreateState($filter: ModelSubscriptionStateFilterInput) {
    onCreateState(filter: $filter) {
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
export const onUpdateState = /* GraphQL */ `
  subscription OnUpdateState($filter: ModelSubscriptionStateFilterInput) {
    onUpdateState(filter: $filter) {
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
export const onDeleteState = /* GraphQL */ `
  subscription OnDeleteState($filter: ModelSubscriptionStateFilterInput) {
    onDeleteState(filter: $filter) {
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
export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity($filter: ModelSubscriptionCityFilterInput) {
    onCreateCity(filter: $filter) {
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
export const onUpdateCity = /* GraphQL */ `
  subscription OnUpdateCity($filter: ModelSubscriptionCityFilterInput) {
    onUpdateCity(filter: $filter) {
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
export const onDeleteCity = /* GraphQL */ `
  subscription OnDeleteCity($filter: ModelSubscriptionCityFilterInput) {
    onDeleteCity(filter: $filter) {
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
export const onCreateArea = /* GraphQL */ `
  subscription OnCreateArea($filter: ModelSubscriptionAreaFilterInput) {
    onCreateArea(filter: $filter) {
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
export const onUpdateArea = /* GraphQL */ `
  subscription OnUpdateArea($filter: ModelSubscriptionAreaFilterInput) {
    onUpdateArea(filter: $filter) {
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
export const onDeleteArea = /* GraphQL */ `
  subscription OnDeleteArea($filter: ModelSubscriptionAreaFilterInput) {
    onDeleteArea(filter: $filter) {
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
export const onCreateBasePromotion = /* GraphQL */ `
  subscription OnCreateBasePromotion(
    $filter: ModelSubscriptionBasePromotionFilterInput
  ) {
    onCreateBasePromotion(filter: $filter) {
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
export const onUpdateBasePromotion = /* GraphQL */ `
  subscription OnUpdateBasePromotion(
    $filter: ModelSubscriptionBasePromotionFilterInput
  ) {
    onUpdateBasePromotion(filter: $filter) {
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
export const onDeleteBasePromotion = /* GraphQL */ `
  subscription OnDeleteBasePromotion(
    $filter: ModelSubscriptionBasePromotionFilterInput
  ) {
    onDeleteBasePromotion(filter: $filter) {
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
export const onCreatePromotion = /* GraphQL */ `
  subscription OnCreatePromotion(
    $filter: ModelSubscriptionPromotionFilterInput
  ) {
    onCreatePromotion(filter: $filter) {
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
export const onUpdatePromotion = /* GraphQL */ `
  subscription OnUpdatePromotion(
    $filter: ModelSubscriptionPromotionFilterInput
  ) {
    onUpdatePromotion(filter: $filter) {
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
export const onDeletePromotion = /* GraphQL */ `
  subscription OnDeletePromotion(
    $filter: ModelSubscriptionPromotionFilterInput
  ) {
    onDeletePromotion(filter: $filter) {
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
export const onCreateStatus = /* GraphQL */ `
  subscription OnCreateStatus($filter: ModelSubscriptionStatusFilterInput) {
    onCreateStatus(filter: $filter) {
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
export const onUpdateStatus = /* GraphQL */ `
  subscription OnUpdateStatus($filter: ModelSubscriptionStatusFilterInput) {
    onUpdateStatus(filter: $filter) {
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
export const onDeleteStatus = /* GraphQL */ `
  subscription OnDeleteStatus($filter: ModelSubscriptionStatusFilterInput) {
    onDeleteStatus(filter: $filter) {
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
export const onCreateServiceMethod = /* GraphQL */ `
  subscription OnCreateServiceMethod(
    $filter: ModelSubscriptionServiceMethodFilterInput
  ) {
    onCreateServiceMethod(filter: $filter) {
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
export const onUpdateServiceMethod = /* GraphQL */ `
  subscription OnUpdateServiceMethod(
    $filter: ModelSubscriptionServiceMethodFilterInput
  ) {
    onUpdateServiceMethod(filter: $filter) {
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
export const onDeleteServiceMethod = /* GraphQL */ `
  subscription OnDeleteServiceMethod(
    $filter: ModelSubscriptionServiceMethodFilterInput
  ) {
    onDeleteServiceMethod(filter: $filter) {
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
export const onCreateRestaurantPromotion = /* GraphQL */ `
  subscription OnCreateRestaurantPromotion(
    $filter: ModelSubscriptionRestaurantPromotionFilterInput
  ) {
    onCreateRestaurantPromotion(filter: $filter) {
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
export const onUpdateRestaurantPromotion = /* GraphQL */ `
  subscription OnUpdateRestaurantPromotion(
    $filter: ModelSubscriptionRestaurantPromotionFilterInput
  ) {
    onUpdateRestaurantPromotion(filter: $filter) {
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
export const onDeleteRestaurantPromotion = /* GraphQL */ `
  subscription OnDeleteRestaurantPromotion(
    $filter: ModelSubscriptionRestaurantPromotionFilterInput
  ) {
    onDeleteRestaurantPromotion(filter: $filter) {
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
export const onCreateAppSetting = /* GraphQL */ `
  subscription OnCreateAppSetting(
    $filter: ModelSubscriptionAppSettingFilterInput
  ) {
    onCreateAppSetting(filter: $filter) {
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
export const onUpdateAppSetting = /* GraphQL */ `
  subscription OnUpdateAppSetting(
    $filter: ModelSubscriptionAppSettingFilterInput
  ) {
    onUpdateAppSetting(filter: $filter) {
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
export const onDeleteAppSetting = /* GraphQL */ `
  subscription OnDeleteAppSetting(
    $filter: ModelSubscriptionAppSettingFilterInput
  ) {
    onDeleteAppSetting(filter: $filter) {
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
export const onCreateCurrency = /* GraphQL */ `
  subscription OnCreateCurrency($filter: ModelSubscriptionCurrencyFilterInput) {
    onCreateCurrency(filter: $filter) {
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
export const onUpdateCurrency = /* GraphQL */ `
  subscription OnUpdateCurrency($filter: ModelSubscriptionCurrencyFilterInput) {
    onUpdateCurrency(filter: $filter) {
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
export const onDeleteCurrency = /* GraphQL */ `
  subscription OnDeleteCurrency($filter: ModelSubscriptionCurrencyFilterInput) {
    onDeleteCurrency(filter: $filter) {
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
export const onCreateAppMultilingualContent = /* GraphQL */ `
  subscription OnCreateAppMultilingualContent(
    $filter: ModelSubscriptionAppMultilingualContentFilterInput
  ) {
    onCreateAppMultilingualContent(filter: $filter) {
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
export const onUpdateAppMultilingualContent = /* GraphQL */ `
  subscription OnUpdateAppMultilingualContent(
    $filter: ModelSubscriptionAppMultilingualContentFilterInput
  ) {
    onUpdateAppMultilingualContent(filter: $filter) {
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
export const onDeleteAppMultilingualContent = /* GraphQL */ `
  subscription OnDeleteAppMultilingualContent(
    $filter: ModelSubscriptionAppMultilingualContentFilterInput
  ) {
    onDeleteAppMultilingualContent(filter: $filter) {
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
export const onCreateOptionType = /* GraphQL */ `
  subscription OnCreateOptionType(
    $filter: ModelSubscriptionOptionTypeFilterInput
  ) {
    onCreateOptionType(filter: $filter) {
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
export const onUpdateOptionType = /* GraphQL */ `
  subscription OnUpdateOptionType(
    $filter: ModelSubscriptionOptionTypeFilterInput
  ) {
    onUpdateOptionType(filter: $filter) {
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
export const onDeleteOptionType = /* GraphQL */ `
  subscription OnDeleteOptionType(
    $filter: ModelSubscriptionOptionTypeFilterInput
  ) {
    onDeleteOptionType(filter: $filter) {
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
export const onCreateOption = /* GraphQL */ `
  subscription OnCreateOption($filter: ModelSubscriptionOptionFilterInput) {
    onCreateOption(filter: $filter) {
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
export const onUpdateOption = /* GraphQL */ `
  subscription OnUpdateOption($filter: ModelSubscriptionOptionFilterInput) {
    onUpdateOption(filter: $filter) {
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
export const onDeleteOption = /* GraphQL */ `
  subscription OnDeleteOption($filter: ModelSubscriptionOptionFilterInput) {
    onDeleteOption(filter: $filter) {
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
export const onCreateOptionPrice = /* GraphQL */ `
  subscription OnCreateOptionPrice(
    $filter: ModelSubscriptionOptionPriceFilterInput
  ) {
    onCreateOptionPrice(filter: $filter) {
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
export const onUpdateOptionPrice = /* GraphQL */ `
  subscription OnUpdateOptionPrice(
    $filter: ModelSubscriptionOptionPriceFilterInput
  ) {
    onUpdateOptionPrice(filter: $filter) {
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
export const onDeleteOptionPrice = /* GraphQL */ `
  subscription OnDeleteOptionPrice(
    $filter: ModelSubscriptionOptionPriceFilterInput
  ) {
    onDeleteOptionPrice(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreatePaymentServices = /* GraphQL */ `
  subscription OnCreatePaymentServices(
    $filter: ModelSubscriptionPaymentServicesFilterInput
  ) {
    onCreatePaymentServices(filter: $filter) {
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
export const onUpdatePaymentServices = /* GraphQL */ `
  subscription OnUpdatePaymentServices(
    $filter: ModelSubscriptionPaymentServicesFilterInput
  ) {
    onUpdatePaymentServices(filter: $filter) {
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
export const onDeletePaymentServices = /* GraphQL */ `
  subscription OnDeletePaymentServices(
    $filter: ModelSubscriptionPaymentServicesFilterInput
  ) {
    onDeletePaymentServices(filter: $filter) {
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
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
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
export const onCreateBaseCoupon = /* GraphQL */ `
  subscription OnCreateBaseCoupon(
    $filter: ModelSubscriptionBaseCouponFilterInput
  ) {
    onCreateBaseCoupon(filter: $filter) {
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
export const onUpdateBaseCoupon = /* GraphQL */ `
  subscription OnUpdateBaseCoupon(
    $filter: ModelSubscriptionBaseCouponFilterInput
  ) {
    onUpdateBaseCoupon(filter: $filter) {
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
export const onDeleteBaseCoupon = /* GraphQL */ `
  subscription OnDeleteBaseCoupon(
    $filter: ModelSubscriptionBaseCouponFilterInput
  ) {
    onDeleteBaseCoupon(filter: $filter) {
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
export const onCreateVouchers = /* GraphQL */ `
  subscription OnCreateVouchers($filter: ModelSubscriptionVouchersFilterInput) {
    onCreateVouchers(filter: $filter) {
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
export const onUpdateVouchers = /* GraphQL */ `
  subscription OnUpdateVouchers($filter: ModelSubscriptionVouchersFilterInput) {
    onUpdateVouchers(filter: $filter) {
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
export const onDeleteVouchers = /* GraphQL */ `
  subscription OnDeleteVouchers($filter: ModelSubscriptionVouchersFilterInput) {
    onDeleteVouchers(filter: $filter) {
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
export const onCreateTestvoucher = /* GraphQL */ `
  subscription OnCreateTestvoucher(
    $filter: ModelSubscriptionTestvoucherFilterInput
  ) {
    onCreateTestvoucher(filter: $filter) {
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
export const onUpdateTestvoucher = /* GraphQL */ `
  subscription OnUpdateTestvoucher(
    $filter: ModelSubscriptionTestvoucherFilterInput
  ) {
    onUpdateTestvoucher(filter: $filter) {
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
export const onDeleteTestvoucher = /* GraphQL */ `
  subscription OnDeleteTestvoucher(
    $filter: ModelSubscriptionTestvoucherFilterInput
  ) {
    onDeleteTestvoucher(filter: $filter) {
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
export const onCreateProductStore = /* GraphQL */ `
  subscription OnCreateProductStore(
    $filter: ModelSubscriptionProductStoreFilterInput
  ) {
    onCreateProductStore(filter: $filter) {
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
export const onUpdateProductStore = /* GraphQL */ `
  subscription OnUpdateProductStore(
    $filter: ModelSubscriptionProductStoreFilterInput
  ) {
    onUpdateProductStore(filter: $filter) {
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
export const onDeleteProductStore = /* GraphQL */ `
  subscription OnDeleteProductStore(
    $filter: ModelSubscriptionProductStoreFilterInput
  ) {
    onDeleteProductStore(filter: $filter) {
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
export const onCreateProductTag = /* GraphQL */ `
  subscription OnCreateProductTag(
    $filter: ModelSubscriptionProductTagFilterInput
  ) {
    onCreateProductTag(filter: $filter) {
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
export const onUpdateProductTag = /* GraphQL */ `
  subscription OnUpdateProductTag(
    $filter: ModelSubscriptionProductTagFilterInput
  ) {
    onUpdateProductTag(filter: $filter) {
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
export const onDeleteProductTag = /* GraphQL */ `
  subscription OnDeleteProductTag(
    $filter: ModelSubscriptionProductTagFilterInput
  ) {
    onDeleteProductTag(filter: $filter) {
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
