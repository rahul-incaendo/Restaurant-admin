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
  "ITEM": "ITEM",
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

const { DashboardMenus, Restaurants, Menu, Category, Product, ProductOptionType, Coupon, CouponUsage, Order, OrderItem, AssignedOrders, Tax, Address, Favourites, ItemRating, Country, State, City, Area, BasePromotion, Promotion, Status, ServiceMethod, RestaurantPromotion, AppSetting, Currency, AppMultilingualContent, OptionType, Option, Tag, OptionTags, User, Group, ProductOptionCombination, Error, DeleteAddressResult, Res, Response, FileUploadPayload, Image } = initSchema(schema);

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
  Tag,
  OptionTags,
  Entity,
  RestaurantStatus,
  OrderStatus,
  PromotionStatus,
  ProductStatus,
  PaymentMethod,
  CouponType,
  FavouriteType,
  DetectedDevices,
  Days,
  SelectionType,
  User,
  Group,
  ProductOptionCombination,
  Error,
  DeleteAddressResult,
  Res,
  Response,
  FileUploadPayload,
  Image
};