import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Entity {
  RESTAURANT = "RESTAURANT",
  ORDER = "ORDER",
  PROMOTION = "PROMOTION",
  ITEM = "ITEM"
}

export enum RestaurantStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}

export enum OrderStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  PREPAIRING = "PREPAIRING"
}

export enum PromotionStatus {
  ENABLE = "ENABLE",
  DISABLE = "DISABLE"
}

export enum ProductStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export enum PaymentMethod {
  COD = "COD",
  CARD = "CARD",
  UPI = "UPI",
  NETBANKING = "NETBANKING",
  CASH = "CASH"
}

export enum CouponType {
  FLAT = "FLAT",
  PERCENT = "PERCENT"
}

export enum FavouriteType {
  ITEM = "ITEM",
  RESTAURANT = "RESTAURANT"
}

export enum DetectedDevices {
  ANDROID = "ANDROID",
  IOS = "IOS",
  PWA = "PWA",
  WEB = "WEB"
}

export enum Days {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY"
}

export enum SelectionType {
  SINGLE = "SINGLE",
  MULTIPLE = "MULTIPLE"
}

type EagerUser = {
  readonly id: string;
  readonly email: string;
  readonly isEmailVerified: string;
  readonly createdAt: string;
  readonly name: string;
  readonly phoneNumber: string;
  readonly profileImage?: string | null;
  readonly isPhoneNumberVerified: string;
  readonly groupName: string;
  readonly status: string;
  readonly isEnabled: string;
  readonly customRestaurantId?: string | null;
  readonly birthdate?: string | null;
  readonly address?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly email: string;
  readonly isEmailVerified: string;
  readonly createdAt: string;
  readonly name: string;
  readonly phoneNumber: string;
  readonly profileImage?: string | null;
  readonly isPhoneNumberVerified: string;
  readonly groupName: string;
  readonly status: string;
  readonly isEnabled: string;
  readonly customRestaurantId?: string | null;
  readonly birthdate?: string | null;
  readonly address?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User)

type EagerGroup = {
  readonly groupName: string;
  readonly description: string;
  readonly precedence?: number | null;
}

type LazyGroup = {
  readonly groupName: string;
  readonly description: string;
  readonly precedence?: number | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group)

type EagerProductOptionCombination = {
  readonly id: string;
  readonly option_code?: string | null;
  readonly option_type_id?: string | null;
  readonly option_name?: string | null;
}

type LazyProductOptionCombination = {
  readonly id: string;
  readonly option_code?: string | null;
  readonly option_type_id?: string | null;
  readonly option_name?: string | null;
}

export declare type ProductOptionCombination = LazyLoading extends LazyLoadingDisabled ? EagerProductOptionCombination : LazyProductOptionCombination

export declare const ProductOptionCombination: (new (init: ModelInit<ProductOptionCombination>) => ProductOptionCombination)

type EagerError = {
  readonly message: string;
  readonly code?: string | null;
}

type LazyError = {
  readonly message: string;
  readonly code?: string | null;
}

export declare type Error = LazyLoading extends LazyLoadingDisabled ? EagerError : LazyError

export declare const Error: (new (init: ModelInit<Error>) => Error)

type EagerDeleteAddressResult = {
  readonly success: boolean;
  readonly message?: string | null;
  readonly error?: string | null;
}

type LazyDeleteAddressResult = {
  readonly success: boolean;
  readonly message?: string | null;
  readonly error?: string | null;
}

export declare type DeleteAddressResult = LazyLoading extends LazyLoadingDisabled ? EagerDeleteAddressResult : LazyDeleteAddressResult

export declare const DeleteAddressResult: (new (init: ModelInit<DeleteAddressResult>) => DeleteAddressResult)

type EagerRes = {
  readonly message?: string | null;
}

type LazyRes = {
  readonly message?: string | null;
}

export declare type Res = LazyLoading extends LazyLoadingDisabled ? EagerRes : LazyRes

export declare const Res: (new (init: ModelInit<Res>) => Res)

type EagerResponse = {
  readonly statusCode?: string | null;
  readonly message?: string | null;
  readonly data?: Coupon | null;
}

type LazyResponse = {
  readonly statusCode?: string | null;
  readonly message?: string | null;
  readonly data: AsyncItem<Coupon | undefined>;
}

export declare type Response = LazyLoading extends LazyLoadingDisabled ? EagerResponse : LazyResponse

export declare const Response: (new (init: ModelInit<Response>) => Response)

type EagerFileUploadPayload = {
  readonly url?: string | null;
}

type LazyFileUploadPayload = {
  readonly url?: string | null;
}

export declare type FileUploadPayload = LazyLoading extends LazyLoadingDisabled ? EagerFileUploadPayload : LazyFileUploadPayload

export declare const FileUploadPayload: (new (init: ModelInit<FileUploadPayload>) => FileUploadPayload)

type EagerImage = {
  readonly id: string;
  readonly filename: string;
  readonly url: string;
  readonly description?: string | null;
  readonly content: string;
}

type LazyImage = {
  readonly id: string;
  readonly filename: string;
  readonly url: string;
  readonly description?: string | null;
  readonly content: string;
}

export declare type Image = LazyLoading extends LazyLoadingDisabled ? EagerImage : LazyImage

export declare const Image: (new (init: ModelInit<Image>) => Image)

type EagerDashboardMenus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DashboardMenus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image_path?: string | null;
  readonly user_type?: number | null;
  readonly user_group_name?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDashboardMenus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DashboardMenus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image_path?: string | null;
  readonly user_type?: number | null;
  readonly user_group_name?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DashboardMenus = LazyLoading extends LazyLoadingDisabled ? EagerDashboardMenus : LazyDashboardMenus

export declare const DashboardMenus: (new (init: ModelInit<DashboardMenus>) => DashboardMenus) & {
  copyOf(source: DashboardMenus, mutator: (draft: MutableModel<DashboardMenus>) => MutableModel<DashboardMenus> | void): DashboardMenus;
}

type EagerRestaurants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly restaurant_name: string;
  readonly slug?: string | null;
  readonly city?: string | null;
  readonly area?: string | null;
  readonly restaurant_address?: string | null;
  readonly owner_name?: string | null;
  readonly owner_email?: string | null;
  readonly owner_number?: string | null;
  readonly invoicing_email?: string | null;
  readonly longitude?: string | null;
  readonly latitude?: string | null;
  readonly pin_code?: string | null;
  readonly fssai_firm_name?: string | null;
  readonly fssai_register_number?: string | null;
  readonly fssai_licence_number?: string | null;
  readonly fssai_address?: string | null;
  readonly fssai_expiration_date?: string | null;
  readonly gst_category?: string | null;
  readonly pan_number?: string | null;
  readonly account_number?: string | null;
  readonly ifsc_code?: string | null;
  readonly status?: RestaurantStatus | keyof typeof RestaurantStatus | null;
  readonly reject_message?: string | null;
  readonly parent_id?: string | null;
  readonly Menus?: (Menu | null)[] | null;
  readonly Promotions?: (RestaurantPromotion | null)[] | null;
  readonly tax_id?: string | null;
  readonly tax: Tax;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly restaurant_name: string;
  readonly slug?: string | null;
  readonly city?: string | null;
  readonly area?: string | null;
  readonly restaurant_address?: string | null;
  readonly owner_name?: string | null;
  readonly owner_email?: string | null;
  readonly owner_number?: string | null;
  readonly invoicing_email?: string | null;
  readonly longitude?: string | null;
  readonly latitude?: string | null;
  readonly pin_code?: string | null;
  readonly fssai_firm_name?: string | null;
  readonly fssai_register_number?: string | null;
  readonly fssai_licence_number?: string | null;
  readonly fssai_address?: string | null;
  readonly fssai_expiration_date?: string | null;
  readonly gst_category?: string | null;
  readonly pan_number?: string | null;
  readonly account_number?: string | null;
  readonly ifsc_code?: string | null;
  readonly status?: RestaurantStatus | keyof typeof RestaurantStatus | null;
  readonly reject_message?: string | null;
  readonly parent_id?: string | null;
  readonly Menus: AsyncCollection<Menu>;
  readonly Promotions: AsyncCollection<RestaurantPromotion>;
  readonly tax_id?: string | null;
  readonly tax: AsyncItem<Tax>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restaurants = LazyLoading extends LazyLoadingDisabled ? EagerRestaurants : LazyRestaurants

export declare const Restaurants: (new (init: ModelInit<Restaurants>) => Restaurants) & {
  copyOf(source: Restaurants, mutator: (draft: MutableModel<Restaurants>) => MutableModel<Restaurants> | void): Restaurants;
}

type EagerMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Menu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly restaurant_id: string;
  readonly categories?: (Category | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Menu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly restaurant_id: string;
  readonly categories: AsyncCollection<Category>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Menu = LazyLoading extends LazyLoadingDisabled ? EagerMenu : LazyMenu

export declare const Menu: (new (init: ModelInit<Menu>) => Menu) & {
  copyOf(source: Menu, mutator: (draft: MutableModel<Menu>) => MutableModel<Menu> | void): Menu;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image_path?: string | null;
  readonly parent_id?: string | null;
  readonly menu_id: string;
  readonly products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image_path?: string | null;
  readonly parent_id?: string | null;
  readonly menu_id: string;
  readonly products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly price: number;
  readonly sku: string;
  readonly status?: ProductStatus | keyof typeof ProductStatus | null;
  readonly in_stock?: number | null;
  readonly stock_alert?: number | null;
  readonly image_path?: string | null;
  readonly category_id: string;
  readonly default_toppings?: (string | null)[] | null;
  readonly productOptionTypes?: (ProductOptionType | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly price: number;
  readonly sku: string;
  readonly status?: ProductStatus | keyof typeof ProductStatus | null;
  readonly in_stock?: number | null;
  readonly stock_alert?: number | null;
  readonly image_path?: string | null;
  readonly category_id: string;
  readonly default_toppings?: (string | null)[] | null;
  readonly productOptionTypes: AsyncCollection<ProductOptionType>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerProductOptionType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductOptionType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_id: string;
  readonly option_data?: string | null;
  readonly price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductOptionType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductOptionType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_id: string;
  readonly option_data?: string | null;
  readonly price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductOptionType = LazyLoading extends LazyLoadingDisabled ? EagerProductOptionType : LazyProductOptionType

export declare const ProductOptionType: (new (init: ModelInit<ProductOptionType>) => ProductOptionType) & {
  copyOf(source: ProductOptionType, mutator: (draft: MutableModel<ProductOptionType>) => MutableModel<ProductOptionType> | void): ProductOptionType;
}

type EagerCoupon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coupon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly coupon_code: string;
  readonly coupon_type: CouponType | keyof typeof CouponType;
  readonly coupon_value: number;
  readonly expiration_date: string;
  readonly minimum_cart_value?: number | null;
  readonly is_active: boolean;
  readonly max_times_used?: number | null;
  readonly tnc?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoupon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coupon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly coupon_code: string;
  readonly coupon_type: CouponType | keyof typeof CouponType;
  readonly coupon_value: number;
  readonly expiration_date: string;
  readonly minimum_cart_value?: number | null;
  readonly is_active: boolean;
  readonly max_times_used?: number | null;
  readonly tnc?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coupon = LazyLoading extends LazyLoadingDisabled ? EagerCoupon : LazyCoupon

export declare const Coupon: (new (init: ModelInit<Coupon>) => Coupon) & {
  copyOf(source: Coupon, mutator: (draft: MutableModel<Coupon>) => MutableModel<Coupon> | void): Coupon;
}

type EagerCouponUsage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CouponUsage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coupon_code: string;
  readonly user_id: string;
  readonly times_used: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCouponUsage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CouponUsage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coupon_code: string;
  readonly user_id: string;
  readonly times_used: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CouponUsage = LazyLoading extends LazyLoadingDisabled ? EagerCouponUsage : LazyCouponUsage

export declare const CouponUsage: (new (init: ModelInit<CouponUsage>) => CouponUsage) & {
  copyOf(source: CouponUsage, mutator: (draft: MutableModel<CouponUsage>) => MutableModel<CouponUsage> | void): CouponUsage;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly order_id: string;
  readonly customer_id?: string | null;
  readonly restaurant_id: string;
  readonly order_date: string;
  readonly total_amount: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly orderItems: OrderItem[];
  readonly delivery_address?: string | null;
  readonly payment_method: PaymentMethod | keyof typeof PaymentMethod;
  readonly delivery_time?: string | null;
  readonly special_instructions?: string | null;
  readonly delivery_fee?: number | null;
  readonly tax_amount?: string | null;
  readonly discount_amount?: number | null;
  readonly service_method_id: string;
  readonly service_method: ServiceMethod;
  readonly order_type?: string | null;
  readonly customer_mobile_no?: string | null;
  readonly customer_name?: string | null;
  readonly is_favourite?: boolean | null;
  readonly applied_coupon_code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly order_id: string;
  readonly customer_id?: string | null;
  readonly restaurant_id: string;
  readonly order_date: string;
  readonly total_amount: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly orderItems: AsyncCollection<OrderItem>;
  readonly delivery_address?: string | null;
  readonly payment_method: PaymentMethod | keyof typeof PaymentMethod;
  readonly delivery_time?: string | null;
  readonly special_instructions?: string | null;
  readonly delivery_fee?: number | null;
  readonly tax_amount?: string | null;
  readonly discount_amount?: number | null;
  readonly service_method_id: string;
  readonly service_method: AsyncItem<ServiceMethod>;
  readonly order_type?: string | null;
  readonly customer_mobile_no?: string | null;
  readonly customer_name?: string | null;
  readonly is_favourite?: boolean | null;
  readonly applied_coupon_code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerOrderItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly order_id: string;
  readonly quantity: number;
  readonly price: number;
  readonly name: string;
  readonly total_price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly order_id: string;
  readonly quantity: number;
  readonly price: number;
  readonly name: string;
  readonly total_price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderItem = LazyLoading extends LazyLoadingDisabled ? EagerOrderItem : LazyOrderItem

export declare const OrderItem: (new (init: ModelInit<OrderItem>) => OrderItem) & {
  copyOf(source: OrderItem, mutator: (draft: MutableModel<OrderItem>) => MutableModel<OrderItem> | void): OrderItem;
}

type EagerAssignedOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssignedOrders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly order_id: string;
  readonly restaurant_id: string;
  readonly item_id: string;
  readonly assign_to: string;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssignedOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssignedOrders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly order_id: string;
  readonly restaurant_id: string;
  readonly item_id: string;
  readonly assign_to: string;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AssignedOrders = LazyLoading extends LazyLoadingDisabled ? EagerAssignedOrders : LazyAssignedOrders

export declare const AssignedOrders: (new (init: ModelInit<AssignedOrders>) => AssignedOrders) & {
  copyOf(source: AssignedOrders, mutator: (draft: MutableModel<AssignedOrders>) => MutableModel<AssignedOrders> | void): AssignedOrders;
}

type EagerTax = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tax, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly value: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTax = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tax, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly value: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tax = LazyLoading extends LazyLoadingDisabled ? EagerTax : LazyTax

export declare const Tax: (new (init: ModelInit<Tax>) => Tax) & {
  copyOf(source: Tax, mutator: (draft: MutableModel<Tax>) => MutableModel<Tax> | void): Tax;
}

type EagerAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uname?: string | null;
  readonly phone_number?: string | null;
  readonly user_id: string;
  readonly address_1: string;
  readonly address_2: string;
  readonly city: string;
  readonly state: string;
  readonly pin_code: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uname?: string | null;
  readonly phone_number?: string | null;
  readonly user_id: string;
  readonly address_1: string;
  readonly address_2: string;
  readonly city: string;
  readonly state: string;
  readonly pin_code: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

type EagerFavourites = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Favourites, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly item_id?: string | null;
  readonly restaurant_id?: string | null;
  readonly favourite_type?: FavouriteType | keyof typeof FavouriteType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFavourites = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Favourites, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly item_id?: string | null;
  readonly restaurant_id?: string | null;
  readonly favourite_type?: FavouriteType | keyof typeof FavouriteType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Favourites = LazyLoading extends LazyLoadingDisabled ? EagerFavourites : LazyFavourites

export declare const Favourites: (new (init: ModelInit<Favourites>) => Favourites) & {
  copyOf(source: Favourites, mutator: (draft: MutableModel<Favourites>) => MutableModel<Favourites> | void): Favourites;
}

type EagerItemRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemRating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly item_id: string;
  readonly rating: number;
  readonly customer_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemRating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly item_id: string;
  readonly rating: number;
  readonly customer_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemRating = LazyLoading extends LazyLoadingDisabled ? EagerItemRating : LazyItemRating

export declare const ItemRating: (new (init: ModelInit<ItemRating>) => ItemRating) & {
  copyOf(source: ItemRating, mutator: (draft: MutableModel<ItemRating>) => MutableModel<ItemRating> | void): ItemRating;
}

type EagerCountry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Country, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly country_code: string;
  readonly phone_code: string;
  readonly States?: (State | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCountry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Country, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly country_code: string;
  readonly phone_code: string;
  readonly States: AsyncCollection<State>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Country = LazyLoading extends LazyLoadingDisabled ? EagerCountry : LazyCountry

export declare const Country: (new (init: ModelInit<Country>) => Country) & {
  copyOf(source: Country, mutator: (draft: MutableModel<Country>) => MutableModel<Country> | void): Country;
}

type EagerState = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<State, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly country_id: string;
  readonly Cities?: (City | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyState = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<State, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly country_id: string;
  readonly Cities: AsyncCollection<City>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type State = LazyLoading extends LazyLoadingDisabled ? EagerState : LazyState

export declare const State: (new (init: ModelInit<State>) => State) & {
  copyOf(source: State, mutator: (draft: MutableModel<State>) => MutableModel<State> | void): State;
}

type EagerCity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<City, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly state_id: string;
  readonly Areas?: (Area | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<City, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly state_id: string;
  readonly Areas: AsyncCollection<Area>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type City = LazyLoading extends LazyLoadingDisabled ? EagerCity : LazyCity

export declare const City: (new (init: ModelInit<City>) => City) & {
  copyOf(source: City, mutator: (draft: MutableModel<City>) => MutableModel<City> | void): City;
}

type EagerArea = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Area, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly city_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArea = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Area, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly city_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Area = LazyLoading extends LazyLoadingDisabled ? EagerArea : LazyArea

export declare const Area: (new (init: ModelInit<Area>) => Area) & {
  copyOf(source: Area, mutator: (draft: MutableModel<Area>) => MutableModel<Area> | void): Area;
}

type EagerBasePromotion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasePromotion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coupon_code?: string | null;
  readonly coupon_type?: CouponType | keyof typeof CouponType | null;
  readonly coupon_value?: number | null;
  readonly status?: PromotionStatus | keyof typeof PromotionStatus | null;
  readonly description?: string | null;
  readonly Promotions?: (Promotion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasePromotion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasePromotion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coupon_code?: string | null;
  readonly coupon_type?: CouponType | keyof typeof CouponType | null;
  readonly coupon_value?: number | null;
  readonly status?: PromotionStatus | keyof typeof PromotionStatus | null;
  readonly description?: string | null;
  readonly Promotions: AsyncCollection<Promotion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BasePromotion = LazyLoading extends LazyLoadingDisabled ? EagerBasePromotion : LazyBasePromotion

export declare const BasePromotion: (new (init: ModelInit<BasePromotion>) => BasePromotion) & {
  copyOf(source: BasePromotion, mutator: (draft: MutableModel<BasePromotion>) => MutableModel<BasePromotion> | void): BasePromotion;
}

type EagerPromotion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Promotion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coupon_code?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly Restaurants?: (RestaurantPromotion | null)[] | null;
  readonly service_method_id: string;
  readonly service_method?: ServiceMethod | null;
  readonly start_date?: string | null;
  readonly end_date?: string | null;
  readonly status?: PromotionStatus | keyof typeof PromotionStatus | null;
  readonly promotion_type?: string | null;
  readonly image_path?: string | null;
  readonly visibility?: boolean | null;
  readonly device_detects: (DetectedDevices | null)[] | keyof typeof DetectedDevices;
  readonly period_days: (Days | null)[] | keyof typeof Days;
  readonly base_promotion_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPromotion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Promotion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coupon_code?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly Restaurants: AsyncCollection<RestaurantPromotion>;
  readonly service_method_id: string;
  readonly service_method: AsyncItem<ServiceMethod | undefined>;
  readonly start_date?: string | null;
  readonly end_date?: string | null;
  readonly status?: PromotionStatus | keyof typeof PromotionStatus | null;
  readonly promotion_type?: string | null;
  readonly image_path?: string | null;
  readonly visibility?: boolean | null;
  readonly device_detects: (DetectedDevices | null)[] | keyof typeof DetectedDevices;
  readonly period_days: (Days | null)[] | keyof typeof Days;
  readonly base_promotion_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Promotion = LazyLoading extends LazyLoadingDisabled ? EagerPromotion : LazyPromotion

export declare const Promotion: (new (init: ModelInit<Promotion>) => Promotion) & {
  copyOf(source: Promotion, mutator: (draft: MutableModel<Promotion>) => MutableModel<Promotion> | void): Promotion;
}

type EagerStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Status, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status_name?: string | null;
  readonly description?: string | null;
  readonly entity?: Entity | keyof typeof Entity | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Status, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status_name?: string | null;
  readonly description?: string | null;
  readonly entity?: Entity | keyof typeof Entity | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Status = LazyLoading extends LazyLoadingDisabled ? EagerStatus : LazyStatus

export declare const Status: (new (init: ModelInit<Status>) => Status) & {
  copyOf(source: Status, mutator: (draft: MutableModel<Status>) => MutableModel<Status> | void): Status;
}

type EagerServiceMethod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceMethod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceMethod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceMethod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceMethod = LazyLoading extends LazyLoadingDisabled ? EagerServiceMethod : LazyServiceMethod

export declare const ServiceMethod: (new (init: ModelInit<ServiceMethod>) => ServiceMethod) & {
  copyOf(source: ServiceMethod, mutator: (draft: MutableModel<ServiceMethod>) => MutableModel<ServiceMethod> | void): ServiceMethod;
}

type EagerRestaurantPromotion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RestaurantPromotion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly promotion_id: string;
  readonly restaurant_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurantPromotion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RestaurantPromotion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly promotion_id: string;
  readonly restaurant_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RestaurantPromotion = LazyLoading extends LazyLoadingDisabled ? EagerRestaurantPromotion : LazyRestaurantPromotion

export declare const RestaurantPromotion: (new (init: ModelInit<RestaurantPromotion>) => RestaurantPromotion) & {
  copyOf(source: RestaurantPromotion, mutator: (draft: MutableModel<RestaurantPromotion>) => MutableModel<RestaurantPromotion> | void): RestaurantPromotion;
}

type EagerAppSetting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppSetting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly setting_key: string;
  readonly setting_value: string;
  readonly description?: string | null;
  readonly value_type: string;
  readonly is_active?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppSetting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppSetting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly setting_key: string;
  readonly setting_value: string;
  readonly description?: string | null;
  readonly value_type: string;
  readonly is_active?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AppSetting = LazyLoading extends LazyLoadingDisabled ? EagerAppSetting : LazyAppSetting

export declare const AppSetting: (new (init: ModelInit<AppSetting>) => AppSetting) & {
  copyOf(source: AppSetting, mutator: (draft: MutableModel<AppSetting>) => MutableModel<AppSetting> | void): AppSetting;
}

type EagerCurrency = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Currency, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCurrency = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Currency, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Currency = LazyLoading extends LazyLoadingDisabled ? EagerCurrency : LazyCurrency

export declare const Currency: (new (init: ModelInit<Currency>) => Currency) & {
  copyOf(source: Currency, mutator: (draft: MutableModel<Currency>) => MutableModel<Currency> | void): Currency;
}

type EagerAppMultilingualContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppMultilingualContent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content_key?: string | null;
  readonly content_en?: string | null;
  readonly content_es?: string | null;
  readonly content_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppMultilingualContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppMultilingualContent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content_key?: string | null;
  readonly content_en?: string | null;
  readonly content_es?: string | null;
  readonly content_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AppMultilingualContent = LazyLoading extends LazyLoadingDisabled ? EagerAppMultilingualContent : LazyAppMultilingualContent

export declare const AppMultilingualContent: (new (init: ModelInit<AppMultilingualContent>) => AppMultilingualContent) & {
  copyOf(source: AppMultilingualContent, mutator: (draft: MutableModel<AppMultilingualContent>) => MutableModel<AppMultilingualContent> | void): AppMultilingualContent;
}

type EagerOptionType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OptionType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly option_type_name: string;
  readonly is_parent?: boolean | null;
  readonly parent_id?: string | null;
  readonly selection_type?: SelectionType | keyof typeof SelectionType | null;
  readonly options?: (Option | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOptionType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OptionType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly option_type_name: string;
  readonly is_parent?: boolean | null;
  readonly parent_id?: string | null;
  readonly selection_type?: SelectionType | keyof typeof SelectionType | null;
  readonly options: AsyncCollection<Option>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OptionType = LazyLoading extends LazyLoadingDisabled ? EagerOptionType : LazyOptionType

export declare const OptionType: (new (init: ModelInit<OptionType>) => OptionType) & {
  copyOf(source: OptionType, mutator: (draft: MutableModel<OptionType>) => MutableModel<OptionType> | void): OptionType;
}

type EagerOption = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Option, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly option_name: string;
  readonly option_code?: string | null;
  readonly option_description?: string | null;
  readonly option_type_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOption = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Option, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly option_name: string;
  readonly option_code?: string | null;
  readonly option_description?: string | null;
  readonly option_type_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Option = LazyLoading extends LazyLoadingDisabled ? EagerOption : LazyOption

export declare const Option: (new (init: ModelInit<Option>) => Option) & {
  copyOf(source: Option, mutator: (draft: MutableModel<Option>) => MutableModel<Option> | void): Option;
}