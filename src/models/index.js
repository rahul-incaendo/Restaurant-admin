// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Entity = {
  "RESTAURANT": "RESTAURANT",
  "ORDER": "ORDER",
  "PROMOTION": "PROMOTION",
  "ITEM": "ITEM"
};

const RestaurantStatus = {
  "PENDING": "PENDING",
  "APPROVED": "APPROVED",
  "REJECTED": "REJECTED"
};

const StoreStatus = {
  "ENABLE": "ENABLE",
  "DISABLE": "DISABLE"
};

const BaseCouponStatus = {
  "ENABLE": "ENABLE",
  "DISABLE": "DISABLE"
};

const StoreServiceMethod = {
  "CARRYOUT": "CARRYOUT",
  "DELIVERY": "DELIVERY",
  "ALL": "ALL"
};

const OrderStatus = {
  "PENDING": "PENDING",
  "APPROVED": "APPROVED",
  "REJECTED": "REJECTED",
  "PREPAIRING": "PREPAIRING"
};

const PromotionStatus = {
  "ENABLE": "ENABLE",
  "DISABLE": "DISABLE"
};

const ProductStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const PaymentMethod = {
  "COD": "COD",
  "CARD": "CARD",
  "UPI": "UPI",
  "NETBANKING": "NETBANKING",
  "CASH": "CASH"
};

const CouponType = {
  "FLAT": "FLAT",
  "PERCENT": "PERCENT"
};

const FavouriteType = {
  "PRODUCT": "PRODUCT",
  "RESTAURANT": "RESTAURANT"
};

const DetectedDevices = {
  "ANDROID": "ANDROID",
  "IOS": "IOS",
  "PWA": "PWA",
  "WEB": "WEB"
};

const Days = {
  "SUNDAY": "SUNDAY",
  "MONDAY": "MONDAY",
  "TUESDAY": "TUESDAY",
  "WEDNESDAY": "WEDNESDAY",
  "THURSDAY": "THURSDAY",
  "FRIDAY": "FRIDAY",
  "SATURDAY": "SATURDAY"
};

const SelectionType = {
  "SINGLE": "SINGLE",
  "MULTIPLE": "MULTIPLE"
};

const OptionStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const PaymentServiceStatus = {
  "ENABLE": "ENABLE",
  "DISABLE": "DISABLE"
};

const PaymentEnvironment = {
  "SANDBOX": "SANDBOX",
  "PRODUCTION": "PRODUCTION"
};

const { DashboardMenus, Restaurants, Menu, Category, Product, ProductOptionType, Coupon, CouponUsage, Order, OrderItem, AssignedOrders, Tax, Address, Favourites, ItemRating, Country, State, City, Area, BasePromotion, Promotion, Status, ServiceMethod, RestaurantPromotion, AppSetting, Currency, AppMultilingualContent, OptionType, Option, OptionPrice, Tag, PaymentServices, Store, BaseCoupon, Testvoucher, ProductStore, ProductTag, User, Group, ProductOptionCombination, Error, DeleteAddressResult, Res, Response, FileUploadPayload, Image, ResponseBaseCoupon } = initSchema(schema);

export {
  DashboardMenus,
  Restaurants,
  Menu,
  Category,
  Product,
  ProductOptionType,
  Coupon,
  CouponUsage,
  Order,
  OrderItem,
  AssignedOrders,
  Tax,
  Address,
  Favourites,
  ItemRating,
  Country,
  State,
  City,
  Area,
  BasePromotion,
  Promotion,
  Status,
  ServiceMethod,
  RestaurantPromotion,
  AppSetting,
  Currency,
  AppMultilingualContent,
  OptionType,
  Option,
  OptionPrice,
  Tag,
  PaymentServices,
  Store,
  BaseCoupon,
  Testvoucher,
  ProductStore,
  ProductTag,
  Entity,
  RestaurantStatus,
  StoreStatus,
  BaseCouponStatus,
  StoreServiceMethod,
  OrderStatus,
  PromotionStatus,
  ProductStatus,
  PaymentMethod,
  CouponType,
  FavouriteType,
  DetectedDevices,
  Days,
  SelectionType,
  OptionStatus,
  PaymentServiceStatus,
  PaymentEnvironment,
  User,
  Group,
  ProductOptionCombination,
  Error,
  DeleteAddressResult,
  Res,
  Response,
  FileUploadPayload,
  Image,
  ResponseBaseCoupon
};