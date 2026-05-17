
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Subbranch
 * 
 */
export type Subbranch = $Result.DefaultSelection<Prisma.$SubbranchPayload>
/**
 * Model ColorToken
 * 
 */
export type ColorToken = $Result.DefaultSelection<Prisma.$ColorTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subbranch`: Exposes CRUD operations for the **Subbranch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subbranches
    * const subbranches = await prisma.subbranch.findMany()
    * ```
    */
  get subbranch(): Prisma.SubbranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.colorToken`: Exposes CRUD operations for the **ColorToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ColorTokens
    * const colorTokens = await prisma.colorToken.findMany()
    * ```
    */
  get colorToken(): Prisma.ColorTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Branch: 'Branch',
    Subbranch: 'Subbranch',
    ColorToken: 'ColorToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "branch" | "subbranch" | "colorToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Subbranch: {
        payload: Prisma.$SubbranchPayload<ExtArgs>
        fields: Prisma.SubbranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubbranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubbranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload>
          }
          findFirst: {
            args: Prisma.SubbranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubbranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload>
          }
          findMany: {
            args: Prisma.SubbranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload>[]
          }
          create: {
            args: Prisma.SubbranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload>
          }
          createMany: {
            args: Prisma.SubbranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubbranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload>[]
          }
          delete: {
            args: Prisma.SubbranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload>
          }
          update: {
            args: Prisma.SubbranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload>
          }
          deleteMany: {
            args: Prisma.SubbranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubbranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubbranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload>[]
          }
          upsert: {
            args: Prisma.SubbranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubbranchPayload>
          }
          aggregate: {
            args: Prisma.SubbranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubbranch>
          }
          groupBy: {
            args: Prisma.SubbranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubbranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubbranchCountArgs<ExtArgs>
            result: $Utils.Optional<SubbranchCountAggregateOutputType> | number
          }
        }
      }
      ColorToken: {
        payload: Prisma.$ColorTokenPayload<ExtArgs>
        fields: Prisma.ColorTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColorTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColorTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload>
          }
          findFirst: {
            args: Prisma.ColorTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColorTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload>
          }
          findMany: {
            args: Prisma.ColorTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload>[]
          }
          create: {
            args: Prisma.ColorTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload>
          }
          createMany: {
            args: Prisma.ColorTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColorTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload>[]
          }
          delete: {
            args: Prisma.ColorTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload>
          }
          update: {
            args: Prisma.ColorTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload>
          }
          deleteMany: {
            args: Prisma.ColorTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColorTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColorTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload>[]
          }
          upsert: {
            args: Prisma.ColorTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorTokenPayload>
          }
          aggregate: {
            args: Prisma.ColorTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColorToken>
          }
          groupBy: {
            args: Prisma.ColorTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColorTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColorTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ColorTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    branch?: BranchOmit
    subbranch?: SubbranchOmit
    colorToken?: ColorTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    branches: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | UserCountOutputTypeCountBranchesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    subbranches: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subbranches?: boolean | BranchCountOutputTypeCountSubbranchesArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountSubbranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubbranchWhereInput
  }


  /**
   * Count Type SubbranchCountOutputType
   */

  export type SubbranchCountOutputType = {
    colorTokens: number
  }

  export type SubbranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colorTokens?: boolean | SubbranchCountOutputTypeCountColorTokensArgs
  }

  // Custom InputTypes
  /**
   * SubbranchCountOutputType without action
   */
  export type SubbranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubbranchCountOutputType
     */
    select?: SubbranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubbranchCountOutputType without action
   */
  export type SubbranchCountOutputTypeCountColorTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorTokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branches?: boolean | User$branchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | User$branchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      branches: Prisma.$BranchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branches<T extends User$branchesArgs<ExtArgs> = {}>(args?: Subset<T, User$branchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.branches
   */
  export type User$branchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    mood: string | null
    isPublic: boolean | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    mood: string | null
    isPublic: boolean | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    mood: number
    isPublic: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    mood?: true
    isPublic?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    mood?: true
    isPublic?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    mood?: true
    isPublic?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    mood: string | null
    isPublic: boolean
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    mood?: boolean
    isPublic?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    subbranches?: boolean | Branch$subbranchesArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    mood?: boolean
    isPublic?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    mood?: boolean
    isPublic?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    mood?: boolean
    isPublic?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "mood" | "isPublic" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    subbranches?: boolean | Branch$subbranchesArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      subbranches: Prisma.$SubbranchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      mood: string | null
      isPublic: boolean
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {BranchUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BranchUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subbranches<T extends Branch$subbranchesArgs<ExtArgs> = {}>(args?: Subset<T, Branch$subbranchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly slug: FieldRef<"Branch", 'String'>
    readonly description: FieldRef<"Branch", 'String'>
    readonly mood: FieldRef<"Branch", 'String'>
    readonly isPublic: FieldRef<"Branch", 'Boolean'>
    readonly ownerId: FieldRef<"Branch", 'String'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch updateManyAndReturn
   */
  export type BranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.subbranches
   */
  export type Branch$subbranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
    where?: SubbranchWhereInput
    orderBy?: SubbranchOrderByWithRelationInput | SubbranchOrderByWithRelationInput[]
    cursor?: SubbranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubbranchScalarFieldEnum | SubbranchScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Subbranch
   */

  export type AggregateSubbranch = {
    _count: SubbranchCountAggregateOutputType | null
    _min: SubbranchMinAggregateOutputType | null
    _max: SubbranchMaxAggregateOutputType | null
  }

  export type SubbranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubbranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubbranchCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    branchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubbranchMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubbranchMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubbranchCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubbranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subbranch to aggregate.
     */
    where?: SubbranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subbranches to fetch.
     */
    orderBy?: SubbranchOrderByWithRelationInput | SubbranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubbranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subbranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subbranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subbranches
    **/
    _count?: true | SubbranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubbranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubbranchMaxAggregateInputType
  }

  export type GetSubbranchAggregateType<T extends SubbranchAggregateArgs> = {
        [P in keyof T & keyof AggregateSubbranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubbranch[P]>
      : GetScalarType<T[P], AggregateSubbranch[P]>
  }




  export type SubbranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubbranchWhereInput
    orderBy?: SubbranchOrderByWithAggregationInput | SubbranchOrderByWithAggregationInput[]
    by: SubbranchScalarFieldEnum[] | SubbranchScalarFieldEnum
    having?: SubbranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubbranchCountAggregateInputType | true
    _min?: SubbranchMinAggregateInputType
    _max?: SubbranchMaxAggregateInputType
  }

  export type SubbranchGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    branchId: string
    createdAt: Date
    updatedAt: Date
    _count: SubbranchCountAggregateOutputType | null
    _min: SubbranchMinAggregateOutputType | null
    _max: SubbranchMaxAggregateOutputType | null
  }

  type GetSubbranchGroupByPayload<T extends SubbranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubbranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubbranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubbranchGroupByOutputType[P]>
            : GetScalarType<T[P], SubbranchGroupByOutputType[P]>
        }
      >
    >


  export type SubbranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    colorTokens?: boolean | Subbranch$colorTokensArgs<ExtArgs>
    _count?: boolean | SubbranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subbranch"]>

  export type SubbranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subbranch"]>

  export type SubbranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subbranch"]>

  export type SubbranchSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubbranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "branchId" | "createdAt" | "updatedAt", ExtArgs["result"]["subbranch"]>
  export type SubbranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    colorTokens?: boolean | Subbranch$colorTokensArgs<ExtArgs>
    _count?: boolean | SubbranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubbranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type SubbranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $SubbranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subbranch"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      colorTokens: Prisma.$ColorTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      branchId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subbranch"]>
    composites: {}
  }

  type SubbranchGetPayload<S extends boolean | null | undefined | SubbranchDefaultArgs> = $Result.GetResult<Prisma.$SubbranchPayload, S>

  type SubbranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubbranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubbranchCountAggregateInputType | true
    }

  export interface SubbranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subbranch'], meta: { name: 'Subbranch' } }
    /**
     * Find zero or one Subbranch that matches the filter.
     * @param {SubbranchFindUniqueArgs} args - Arguments to find a Subbranch
     * @example
     * // Get one Subbranch
     * const subbranch = await prisma.subbranch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubbranchFindUniqueArgs>(args: SelectSubset<T, SubbranchFindUniqueArgs<ExtArgs>>): Prisma__SubbranchClient<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subbranch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubbranchFindUniqueOrThrowArgs} args - Arguments to find a Subbranch
     * @example
     * // Get one Subbranch
     * const subbranch = await prisma.subbranch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubbranchFindUniqueOrThrowArgs>(args: SelectSubset<T, SubbranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubbranchClient<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subbranch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubbranchFindFirstArgs} args - Arguments to find a Subbranch
     * @example
     * // Get one Subbranch
     * const subbranch = await prisma.subbranch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubbranchFindFirstArgs>(args?: SelectSubset<T, SubbranchFindFirstArgs<ExtArgs>>): Prisma__SubbranchClient<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subbranch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubbranchFindFirstOrThrowArgs} args - Arguments to find a Subbranch
     * @example
     * // Get one Subbranch
     * const subbranch = await prisma.subbranch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubbranchFindFirstOrThrowArgs>(args?: SelectSubset<T, SubbranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubbranchClient<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subbranches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubbranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subbranches
     * const subbranches = await prisma.subbranch.findMany()
     * 
     * // Get first 10 Subbranches
     * const subbranches = await prisma.subbranch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subbranchWithIdOnly = await prisma.subbranch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubbranchFindManyArgs>(args?: SelectSubset<T, SubbranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subbranch.
     * @param {SubbranchCreateArgs} args - Arguments to create a Subbranch.
     * @example
     * // Create one Subbranch
     * const Subbranch = await prisma.subbranch.create({
     *   data: {
     *     // ... data to create a Subbranch
     *   }
     * })
     * 
     */
    create<T extends SubbranchCreateArgs>(args: SelectSubset<T, SubbranchCreateArgs<ExtArgs>>): Prisma__SubbranchClient<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subbranches.
     * @param {SubbranchCreateManyArgs} args - Arguments to create many Subbranches.
     * @example
     * // Create many Subbranches
     * const subbranch = await prisma.subbranch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubbranchCreateManyArgs>(args?: SelectSubset<T, SubbranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subbranches and returns the data saved in the database.
     * @param {SubbranchCreateManyAndReturnArgs} args - Arguments to create many Subbranches.
     * @example
     * // Create many Subbranches
     * const subbranch = await prisma.subbranch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subbranches and only return the `id`
     * const subbranchWithIdOnly = await prisma.subbranch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubbranchCreateManyAndReturnArgs>(args?: SelectSubset<T, SubbranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subbranch.
     * @param {SubbranchDeleteArgs} args - Arguments to delete one Subbranch.
     * @example
     * // Delete one Subbranch
     * const Subbranch = await prisma.subbranch.delete({
     *   where: {
     *     // ... filter to delete one Subbranch
     *   }
     * })
     * 
     */
    delete<T extends SubbranchDeleteArgs>(args: SelectSubset<T, SubbranchDeleteArgs<ExtArgs>>): Prisma__SubbranchClient<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subbranch.
     * @param {SubbranchUpdateArgs} args - Arguments to update one Subbranch.
     * @example
     * // Update one Subbranch
     * const subbranch = await prisma.subbranch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubbranchUpdateArgs>(args: SelectSubset<T, SubbranchUpdateArgs<ExtArgs>>): Prisma__SubbranchClient<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subbranches.
     * @param {SubbranchDeleteManyArgs} args - Arguments to filter Subbranches to delete.
     * @example
     * // Delete a few Subbranches
     * const { count } = await prisma.subbranch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubbranchDeleteManyArgs>(args?: SelectSubset<T, SubbranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subbranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubbranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subbranches
     * const subbranch = await prisma.subbranch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubbranchUpdateManyArgs>(args: SelectSubset<T, SubbranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subbranches and returns the data updated in the database.
     * @param {SubbranchUpdateManyAndReturnArgs} args - Arguments to update many Subbranches.
     * @example
     * // Update many Subbranches
     * const subbranch = await prisma.subbranch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subbranches and only return the `id`
     * const subbranchWithIdOnly = await prisma.subbranch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubbranchUpdateManyAndReturnArgs>(args: SelectSubset<T, SubbranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subbranch.
     * @param {SubbranchUpsertArgs} args - Arguments to update or create a Subbranch.
     * @example
     * // Update or create a Subbranch
     * const subbranch = await prisma.subbranch.upsert({
     *   create: {
     *     // ... data to create a Subbranch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subbranch we want to update
     *   }
     * })
     */
    upsert<T extends SubbranchUpsertArgs>(args: SelectSubset<T, SubbranchUpsertArgs<ExtArgs>>): Prisma__SubbranchClient<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subbranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubbranchCountArgs} args - Arguments to filter Subbranches to count.
     * @example
     * // Count the number of Subbranches
     * const count = await prisma.subbranch.count({
     *   where: {
     *     // ... the filter for the Subbranches we want to count
     *   }
     * })
    **/
    count<T extends SubbranchCountArgs>(
      args?: Subset<T, SubbranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubbranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subbranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubbranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubbranchAggregateArgs>(args: Subset<T, SubbranchAggregateArgs>): Prisma.PrismaPromise<GetSubbranchAggregateType<T>>

    /**
     * Group by Subbranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubbranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubbranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubbranchGroupByArgs['orderBy'] }
        : { orderBy?: SubbranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubbranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubbranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subbranch model
   */
  readonly fields: SubbranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subbranch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubbranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colorTokens<T extends Subbranch$colorTokensArgs<ExtArgs> = {}>(args?: Subset<T, Subbranch$colorTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subbranch model
   */
  interface SubbranchFieldRefs {
    readonly id: FieldRef<"Subbranch", 'String'>
    readonly name: FieldRef<"Subbranch", 'String'>
    readonly slug: FieldRef<"Subbranch", 'String'>
    readonly description: FieldRef<"Subbranch", 'String'>
    readonly branchId: FieldRef<"Subbranch", 'String'>
    readonly createdAt: FieldRef<"Subbranch", 'DateTime'>
    readonly updatedAt: FieldRef<"Subbranch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subbranch findUnique
   */
  export type SubbranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
    /**
     * Filter, which Subbranch to fetch.
     */
    where: SubbranchWhereUniqueInput
  }

  /**
   * Subbranch findUniqueOrThrow
   */
  export type SubbranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
    /**
     * Filter, which Subbranch to fetch.
     */
    where: SubbranchWhereUniqueInput
  }

  /**
   * Subbranch findFirst
   */
  export type SubbranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
    /**
     * Filter, which Subbranch to fetch.
     */
    where?: SubbranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subbranches to fetch.
     */
    orderBy?: SubbranchOrderByWithRelationInput | SubbranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subbranches.
     */
    cursor?: SubbranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subbranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subbranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subbranches.
     */
    distinct?: SubbranchScalarFieldEnum | SubbranchScalarFieldEnum[]
  }

  /**
   * Subbranch findFirstOrThrow
   */
  export type SubbranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
    /**
     * Filter, which Subbranch to fetch.
     */
    where?: SubbranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subbranches to fetch.
     */
    orderBy?: SubbranchOrderByWithRelationInput | SubbranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subbranches.
     */
    cursor?: SubbranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subbranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subbranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subbranches.
     */
    distinct?: SubbranchScalarFieldEnum | SubbranchScalarFieldEnum[]
  }

  /**
   * Subbranch findMany
   */
  export type SubbranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
    /**
     * Filter, which Subbranches to fetch.
     */
    where?: SubbranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subbranches to fetch.
     */
    orderBy?: SubbranchOrderByWithRelationInput | SubbranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subbranches.
     */
    cursor?: SubbranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subbranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subbranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subbranches.
     */
    distinct?: SubbranchScalarFieldEnum | SubbranchScalarFieldEnum[]
  }

  /**
   * Subbranch create
   */
  export type SubbranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Subbranch.
     */
    data: XOR<SubbranchCreateInput, SubbranchUncheckedCreateInput>
  }

  /**
   * Subbranch createMany
   */
  export type SubbranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subbranches.
     */
    data: SubbranchCreateManyInput | SubbranchCreateManyInput[]
  }

  /**
   * Subbranch createManyAndReturn
   */
  export type SubbranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * The data used to create many Subbranches.
     */
    data: SubbranchCreateManyInput | SubbranchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subbranch update
   */
  export type SubbranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Subbranch.
     */
    data: XOR<SubbranchUpdateInput, SubbranchUncheckedUpdateInput>
    /**
     * Choose, which Subbranch to update.
     */
    where: SubbranchWhereUniqueInput
  }

  /**
   * Subbranch updateMany
   */
  export type SubbranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subbranches.
     */
    data: XOR<SubbranchUpdateManyMutationInput, SubbranchUncheckedUpdateManyInput>
    /**
     * Filter which Subbranches to update
     */
    where?: SubbranchWhereInput
    /**
     * Limit how many Subbranches to update.
     */
    limit?: number
  }

  /**
   * Subbranch updateManyAndReturn
   */
  export type SubbranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * The data used to update Subbranches.
     */
    data: XOR<SubbranchUpdateManyMutationInput, SubbranchUncheckedUpdateManyInput>
    /**
     * Filter which Subbranches to update
     */
    where?: SubbranchWhereInput
    /**
     * Limit how many Subbranches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subbranch upsert
   */
  export type SubbranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Subbranch to update in case it exists.
     */
    where: SubbranchWhereUniqueInput
    /**
     * In case the Subbranch found by the `where` argument doesn't exist, create a new Subbranch with this data.
     */
    create: XOR<SubbranchCreateInput, SubbranchUncheckedCreateInput>
    /**
     * In case the Subbranch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubbranchUpdateInput, SubbranchUncheckedUpdateInput>
  }

  /**
   * Subbranch delete
   */
  export type SubbranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
    /**
     * Filter which Subbranch to delete.
     */
    where: SubbranchWhereUniqueInput
  }

  /**
   * Subbranch deleteMany
   */
  export type SubbranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subbranches to delete
     */
    where?: SubbranchWhereInput
    /**
     * Limit how many Subbranches to delete.
     */
    limit?: number
  }

  /**
   * Subbranch.colorTokens
   */
  export type Subbranch$colorTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
    where?: ColorTokenWhereInput
    orderBy?: ColorTokenOrderByWithRelationInput | ColorTokenOrderByWithRelationInput[]
    cursor?: ColorTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColorTokenScalarFieldEnum | ColorTokenScalarFieldEnum[]
  }

  /**
   * Subbranch without action
   */
  export type SubbranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subbranch
     */
    select?: SubbranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subbranch
     */
    omit?: SubbranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubbranchInclude<ExtArgs> | null
  }


  /**
   * Model ColorToken
   */

  export type AggregateColorToken = {
    _count: ColorTokenCountAggregateOutputType | null
    _min: ColorTokenMinAggregateOutputType | null
    _max: ColorTokenMaxAggregateOutputType | null
  }

  export type ColorTokenMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
    usage: string | null
    subbranchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColorTokenMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
    usage: string | null
    subbranchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColorTokenCountAggregateOutputType = {
    id: number
    name: number
    value: number
    usage: number
    subbranchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ColorTokenMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    usage?: true
    subbranchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColorTokenMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    usage?: true
    subbranchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColorTokenCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    usage?: true
    subbranchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ColorTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColorToken to aggregate.
     */
    where?: ColorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorTokens to fetch.
     */
    orderBy?: ColorTokenOrderByWithRelationInput | ColorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ColorTokens
    **/
    _count?: true | ColorTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorTokenMaxAggregateInputType
  }

  export type GetColorTokenAggregateType<T extends ColorTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateColorToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColorToken[P]>
      : GetScalarType<T[P], AggregateColorToken[P]>
  }




  export type ColorTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorTokenWhereInput
    orderBy?: ColorTokenOrderByWithAggregationInput | ColorTokenOrderByWithAggregationInput[]
    by: ColorTokenScalarFieldEnum[] | ColorTokenScalarFieldEnum
    having?: ColorTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorTokenCountAggregateInputType | true
    _min?: ColorTokenMinAggregateInputType
    _max?: ColorTokenMaxAggregateInputType
  }

  export type ColorTokenGroupByOutputType = {
    id: string
    name: string
    value: string
    usage: string | null
    subbranchId: string
    createdAt: Date
    updatedAt: Date
    _count: ColorTokenCountAggregateOutputType | null
    _min: ColorTokenMinAggregateOutputType | null
    _max: ColorTokenMaxAggregateOutputType | null
  }

  type GetColorTokenGroupByPayload<T extends ColorTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ColorTokenGroupByOutputType[P]>
        }
      >
    >


  export type ColorTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    usage?: boolean
    subbranchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subbranch?: boolean | SubbranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colorToken"]>

  export type ColorTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    usage?: boolean
    subbranchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subbranch?: boolean | SubbranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colorToken"]>

  export type ColorTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    usage?: boolean
    subbranchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subbranch?: boolean | SubbranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colorToken"]>

  export type ColorTokenSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    usage?: boolean
    subbranchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ColorTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "usage" | "subbranchId" | "createdAt" | "updatedAt", ExtArgs["result"]["colorToken"]>
  export type ColorTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subbranch?: boolean | SubbranchDefaultArgs<ExtArgs>
  }
  export type ColorTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subbranch?: boolean | SubbranchDefaultArgs<ExtArgs>
  }
  export type ColorTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subbranch?: boolean | SubbranchDefaultArgs<ExtArgs>
  }

  export type $ColorTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ColorToken"
    objects: {
      subbranch: Prisma.$SubbranchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: string
      usage: string | null
      subbranchId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["colorToken"]>
    composites: {}
  }

  type ColorTokenGetPayload<S extends boolean | null | undefined | ColorTokenDefaultArgs> = $Result.GetResult<Prisma.$ColorTokenPayload, S>

  type ColorTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColorTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColorTokenCountAggregateInputType | true
    }

  export interface ColorTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ColorToken'], meta: { name: 'ColorToken' } }
    /**
     * Find zero or one ColorToken that matches the filter.
     * @param {ColorTokenFindUniqueArgs} args - Arguments to find a ColorToken
     * @example
     * // Get one ColorToken
     * const colorToken = await prisma.colorToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColorTokenFindUniqueArgs>(args: SelectSubset<T, ColorTokenFindUniqueArgs<ExtArgs>>): Prisma__ColorTokenClient<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ColorToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColorTokenFindUniqueOrThrowArgs} args - Arguments to find a ColorToken
     * @example
     * // Get one ColorToken
     * const colorToken = await prisma.colorToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColorTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ColorTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColorTokenClient<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColorToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorTokenFindFirstArgs} args - Arguments to find a ColorToken
     * @example
     * // Get one ColorToken
     * const colorToken = await prisma.colorToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColorTokenFindFirstArgs>(args?: SelectSubset<T, ColorTokenFindFirstArgs<ExtArgs>>): Prisma__ColorTokenClient<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColorToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorTokenFindFirstOrThrowArgs} args - Arguments to find a ColorToken
     * @example
     * // Get one ColorToken
     * const colorToken = await prisma.colorToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColorTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ColorTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColorTokenClient<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ColorTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ColorTokens
     * const colorTokens = await prisma.colorToken.findMany()
     * 
     * // Get first 10 ColorTokens
     * const colorTokens = await prisma.colorToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorTokenWithIdOnly = await prisma.colorToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColorTokenFindManyArgs>(args?: SelectSubset<T, ColorTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ColorToken.
     * @param {ColorTokenCreateArgs} args - Arguments to create a ColorToken.
     * @example
     * // Create one ColorToken
     * const ColorToken = await prisma.colorToken.create({
     *   data: {
     *     // ... data to create a ColorToken
     *   }
     * })
     * 
     */
    create<T extends ColorTokenCreateArgs>(args: SelectSubset<T, ColorTokenCreateArgs<ExtArgs>>): Prisma__ColorTokenClient<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ColorTokens.
     * @param {ColorTokenCreateManyArgs} args - Arguments to create many ColorTokens.
     * @example
     * // Create many ColorTokens
     * const colorToken = await prisma.colorToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColorTokenCreateManyArgs>(args?: SelectSubset<T, ColorTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ColorTokens and returns the data saved in the database.
     * @param {ColorTokenCreateManyAndReturnArgs} args - Arguments to create many ColorTokens.
     * @example
     * // Create many ColorTokens
     * const colorToken = await prisma.colorToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ColorTokens and only return the `id`
     * const colorTokenWithIdOnly = await prisma.colorToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColorTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ColorTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ColorToken.
     * @param {ColorTokenDeleteArgs} args - Arguments to delete one ColorToken.
     * @example
     * // Delete one ColorToken
     * const ColorToken = await prisma.colorToken.delete({
     *   where: {
     *     // ... filter to delete one ColorToken
     *   }
     * })
     * 
     */
    delete<T extends ColorTokenDeleteArgs>(args: SelectSubset<T, ColorTokenDeleteArgs<ExtArgs>>): Prisma__ColorTokenClient<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ColorToken.
     * @param {ColorTokenUpdateArgs} args - Arguments to update one ColorToken.
     * @example
     * // Update one ColorToken
     * const colorToken = await prisma.colorToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColorTokenUpdateArgs>(args: SelectSubset<T, ColorTokenUpdateArgs<ExtArgs>>): Prisma__ColorTokenClient<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ColorTokens.
     * @param {ColorTokenDeleteManyArgs} args - Arguments to filter ColorTokens to delete.
     * @example
     * // Delete a few ColorTokens
     * const { count } = await prisma.colorToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColorTokenDeleteManyArgs>(args?: SelectSubset<T, ColorTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColorTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ColorTokens
     * const colorToken = await prisma.colorToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColorTokenUpdateManyArgs>(args: SelectSubset<T, ColorTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColorTokens and returns the data updated in the database.
     * @param {ColorTokenUpdateManyAndReturnArgs} args - Arguments to update many ColorTokens.
     * @example
     * // Update many ColorTokens
     * const colorToken = await prisma.colorToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ColorTokens and only return the `id`
     * const colorTokenWithIdOnly = await prisma.colorToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColorTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ColorTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ColorToken.
     * @param {ColorTokenUpsertArgs} args - Arguments to update or create a ColorToken.
     * @example
     * // Update or create a ColorToken
     * const colorToken = await prisma.colorToken.upsert({
     *   create: {
     *     // ... data to create a ColorToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ColorToken we want to update
     *   }
     * })
     */
    upsert<T extends ColorTokenUpsertArgs>(args: SelectSubset<T, ColorTokenUpsertArgs<ExtArgs>>): Prisma__ColorTokenClient<$Result.GetResult<Prisma.$ColorTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ColorTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorTokenCountArgs} args - Arguments to filter ColorTokens to count.
     * @example
     * // Count the number of ColorTokens
     * const count = await prisma.colorToken.count({
     *   where: {
     *     // ... the filter for the ColorTokens we want to count
     *   }
     * })
    **/
    count<T extends ColorTokenCountArgs>(
      args?: Subset<T, ColorTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ColorToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColorTokenAggregateArgs>(args: Subset<T, ColorTokenAggregateArgs>): Prisma.PrismaPromise<GetColorTokenAggregateType<T>>

    /**
     * Group by ColorToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColorTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColorTokenGroupByArgs['orderBy'] }
        : { orderBy?: ColorTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColorTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ColorToken model
   */
  readonly fields: ColorTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ColorToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColorTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subbranch<T extends SubbranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubbranchDefaultArgs<ExtArgs>>): Prisma__SubbranchClient<$Result.GetResult<Prisma.$SubbranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ColorToken model
   */
  interface ColorTokenFieldRefs {
    readonly id: FieldRef<"ColorToken", 'String'>
    readonly name: FieldRef<"ColorToken", 'String'>
    readonly value: FieldRef<"ColorToken", 'String'>
    readonly usage: FieldRef<"ColorToken", 'String'>
    readonly subbranchId: FieldRef<"ColorToken", 'String'>
    readonly createdAt: FieldRef<"ColorToken", 'DateTime'>
    readonly updatedAt: FieldRef<"ColorToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ColorToken findUnique
   */
  export type ColorTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
    /**
     * Filter, which ColorToken to fetch.
     */
    where: ColorTokenWhereUniqueInput
  }

  /**
   * ColorToken findUniqueOrThrow
   */
  export type ColorTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
    /**
     * Filter, which ColorToken to fetch.
     */
    where: ColorTokenWhereUniqueInput
  }

  /**
   * ColorToken findFirst
   */
  export type ColorTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
    /**
     * Filter, which ColorToken to fetch.
     */
    where?: ColorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorTokens to fetch.
     */
    orderBy?: ColorTokenOrderByWithRelationInput | ColorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColorTokens.
     */
    cursor?: ColorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColorTokens.
     */
    distinct?: ColorTokenScalarFieldEnum | ColorTokenScalarFieldEnum[]
  }

  /**
   * ColorToken findFirstOrThrow
   */
  export type ColorTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
    /**
     * Filter, which ColorToken to fetch.
     */
    where?: ColorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorTokens to fetch.
     */
    orderBy?: ColorTokenOrderByWithRelationInput | ColorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColorTokens.
     */
    cursor?: ColorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColorTokens.
     */
    distinct?: ColorTokenScalarFieldEnum | ColorTokenScalarFieldEnum[]
  }

  /**
   * ColorToken findMany
   */
  export type ColorTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
    /**
     * Filter, which ColorTokens to fetch.
     */
    where?: ColorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorTokens to fetch.
     */
    orderBy?: ColorTokenOrderByWithRelationInput | ColorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ColorTokens.
     */
    cursor?: ColorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColorTokens.
     */
    distinct?: ColorTokenScalarFieldEnum | ColorTokenScalarFieldEnum[]
  }

  /**
   * ColorToken create
   */
  export type ColorTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a ColorToken.
     */
    data: XOR<ColorTokenCreateInput, ColorTokenUncheckedCreateInput>
  }

  /**
   * ColorToken createMany
   */
  export type ColorTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ColorTokens.
     */
    data: ColorTokenCreateManyInput | ColorTokenCreateManyInput[]
  }

  /**
   * ColorToken createManyAndReturn
   */
  export type ColorTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ColorTokens.
     */
    data: ColorTokenCreateManyInput | ColorTokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColorToken update
   */
  export type ColorTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a ColorToken.
     */
    data: XOR<ColorTokenUpdateInput, ColorTokenUncheckedUpdateInput>
    /**
     * Choose, which ColorToken to update.
     */
    where: ColorTokenWhereUniqueInput
  }

  /**
   * ColorToken updateMany
   */
  export type ColorTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ColorTokens.
     */
    data: XOR<ColorTokenUpdateManyMutationInput, ColorTokenUncheckedUpdateManyInput>
    /**
     * Filter which ColorTokens to update
     */
    where?: ColorTokenWhereInput
    /**
     * Limit how many ColorTokens to update.
     */
    limit?: number
  }

  /**
   * ColorToken updateManyAndReturn
   */
  export type ColorTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * The data used to update ColorTokens.
     */
    data: XOR<ColorTokenUpdateManyMutationInput, ColorTokenUncheckedUpdateManyInput>
    /**
     * Filter which ColorTokens to update
     */
    where?: ColorTokenWhereInput
    /**
     * Limit how many ColorTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColorToken upsert
   */
  export type ColorTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the ColorToken to update in case it exists.
     */
    where: ColorTokenWhereUniqueInput
    /**
     * In case the ColorToken found by the `where` argument doesn't exist, create a new ColorToken with this data.
     */
    create: XOR<ColorTokenCreateInput, ColorTokenUncheckedCreateInput>
    /**
     * In case the ColorToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColorTokenUpdateInput, ColorTokenUncheckedUpdateInput>
  }

  /**
   * ColorToken delete
   */
  export type ColorTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
    /**
     * Filter which ColorToken to delete.
     */
    where: ColorTokenWhereUniqueInput
  }

  /**
   * ColorToken deleteMany
   */
  export type ColorTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColorTokens to delete
     */
    where?: ColorTokenWhereInput
    /**
     * Limit how many ColorTokens to delete.
     */
    limit?: number
  }

  /**
   * ColorToken without action
   */
  export type ColorTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorToken
     */
    select?: ColorTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorToken
     */
    omit?: ColorTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    mood: 'mood',
    isPublic: 'isPublic',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const SubbranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubbranchScalarFieldEnum = (typeof SubbranchScalarFieldEnum)[keyof typeof SubbranchScalarFieldEnum]


  export const ColorTokenScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    usage: 'usage',
    subbranchId: 'subbranchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ColorTokenScalarFieldEnum = (typeof ColorTokenScalarFieldEnum)[keyof typeof ColorTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    branches?: BranchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branches?: BranchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    branches?: BranchListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    slug?: StringFilter<"Branch"> | string
    description?: StringNullableFilter<"Branch"> | string | null
    mood?: StringNullableFilter<"Branch"> | string | null
    isPublic?: BoolFilter<"Branch"> | boolean
    ownerId?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    subbranches?: SubbranchListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    mood?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    subbranches?: SubbranchOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    description?: StringNullableFilter<"Branch"> | string | null
    mood?: StringNullableFilter<"Branch"> | string | null
    isPublic?: BoolFilter<"Branch"> | boolean
    ownerId?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    subbranches?: SubbranchListRelationFilter
  }, "id" | "slug">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    mood?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    slug?: StringWithAggregatesFilter<"Branch"> | string
    description?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    mood?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Branch"> | boolean
    ownerId?: StringWithAggregatesFilter<"Branch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
  }

  export type SubbranchWhereInput = {
    AND?: SubbranchWhereInput | SubbranchWhereInput[]
    OR?: SubbranchWhereInput[]
    NOT?: SubbranchWhereInput | SubbranchWhereInput[]
    id?: StringFilter<"Subbranch"> | string
    name?: StringFilter<"Subbranch"> | string
    slug?: StringFilter<"Subbranch"> | string
    description?: StringNullableFilter<"Subbranch"> | string | null
    branchId?: StringFilter<"Subbranch"> | string
    createdAt?: DateTimeFilter<"Subbranch"> | Date | string
    updatedAt?: DateTimeFilter<"Subbranch"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    colorTokens?: ColorTokenListRelationFilter
  }

  export type SubbranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    colorTokens?: ColorTokenOrderByRelationAggregateInput
  }

  export type SubbranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    branchId_slug?: SubbranchBranchIdSlugCompoundUniqueInput
    AND?: SubbranchWhereInput | SubbranchWhereInput[]
    OR?: SubbranchWhereInput[]
    NOT?: SubbranchWhereInput | SubbranchWhereInput[]
    name?: StringFilter<"Subbranch"> | string
    slug?: StringFilter<"Subbranch"> | string
    description?: StringNullableFilter<"Subbranch"> | string | null
    branchId?: StringFilter<"Subbranch"> | string
    createdAt?: DateTimeFilter<"Subbranch"> | Date | string
    updatedAt?: DateTimeFilter<"Subbranch"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    colorTokens?: ColorTokenListRelationFilter
  }, "id" | "branchId_slug">

  export type SubbranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubbranchCountOrderByAggregateInput
    _max?: SubbranchMaxOrderByAggregateInput
    _min?: SubbranchMinOrderByAggregateInput
  }

  export type SubbranchScalarWhereWithAggregatesInput = {
    AND?: SubbranchScalarWhereWithAggregatesInput | SubbranchScalarWhereWithAggregatesInput[]
    OR?: SubbranchScalarWhereWithAggregatesInput[]
    NOT?: SubbranchScalarWhereWithAggregatesInput | SubbranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subbranch"> | string
    name?: StringWithAggregatesFilter<"Subbranch"> | string
    slug?: StringWithAggregatesFilter<"Subbranch"> | string
    description?: StringNullableWithAggregatesFilter<"Subbranch"> | string | null
    branchId?: StringWithAggregatesFilter<"Subbranch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subbranch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subbranch"> | Date | string
  }

  export type ColorTokenWhereInput = {
    AND?: ColorTokenWhereInput | ColorTokenWhereInput[]
    OR?: ColorTokenWhereInput[]
    NOT?: ColorTokenWhereInput | ColorTokenWhereInput[]
    id?: StringFilter<"ColorToken"> | string
    name?: StringFilter<"ColorToken"> | string
    value?: StringFilter<"ColorToken"> | string
    usage?: StringNullableFilter<"ColorToken"> | string | null
    subbranchId?: StringFilter<"ColorToken"> | string
    createdAt?: DateTimeFilter<"ColorToken"> | Date | string
    updatedAt?: DateTimeFilter<"ColorToken"> | Date | string
    subbranch?: XOR<SubbranchScalarRelationFilter, SubbranchWhereInput>
  }

  export type ColorTokenOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    usage?: SortOrderInput | SortOrder
    subbranchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subbranch?: SubbranchOrderByWithRelationInput
  }

  export type ColorTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subbranchId_name?: ColorTokenSubbranchIdNameCompoundUniqueInput
    AND?: ColorTokenWhereInput | ColorTokenWhereInput[]
    OR?: ColorTokenWhereInput[]
    NOT?: ColorTokenWhereInput | ColorTokenWhereInput[]
    name?: StringFilter<"ColorToken"> | string
    value?: StringFilter<"ColorToken"> | string
    usage?: StringNullableFilter<"ColorToken"> | string | null
    subbranchId?: StringFilter<"ColorToken"> | string
    createdAt?: DateTimeFilter<"ColorToken"> | Date | string
    updatedAt?: DateTimeFilter<"ColorToken"> | Date | string
    subbranch?: XOR<SubbranchScalarRelationFilter, SubbranchWhereInput>
  }, "id" | "subbranchId_name">

  export type ColorTokenOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    usage?: SortOrderInput | SortOrder
    subbranchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ColorTokenCountOrderByAggregateInput
    _max?: ColorTokenMaxOrderByAggregateInput
    _min?: ColorTokenMinOrderByAggregateInput
  }

  export type ColorTokenScalarWhereWithAggregatesInput = {
    AND?: ColorTokenScalarWhereWithAggregatesInput | ColorTokenScalarWhereWithAggregatesInput[]
    OR?: ColorTokenScalarWhereWithAggregatesInput[]
    NOT?: ColorTokenScalarWhereWithAggregatesInput | ColorTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ColorToken"> | string
    name?: StringWithAggregatesFilter<"ColorToken"> | string
    value?: StringWithAggregatesFilter<"ColorToken"> | string
    usage?: StringNullableWithAggregatesFilter<"ColorToken"> | string | null
    subbranchId?: StringWithAggregatesFilter<"ColorToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ColorToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ColorToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    mood?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutBranchesInput
    subbranches?: SubbranchCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    mood?: string | null
    isPublic?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subbranches?: SubbranchUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutBranchesNestedInput
    subbranches?: SubbranchUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subbranches?: SubbranchUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    mood?: string | null
    isPublic?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubbranchCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutSubbranchesInput
    colorTokens?: ColorTokenCreateNestedManyWithoutSubbranchInput
  }

  export type SubbranchUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    colorTokens?: ColorTokenUncheckedCreateNestedManyWithoutSubbranchInput
  }

  export type SubbranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutSubbranchesNestedInput
    colorTokens?: ColorTokenUpdateManyWithoutSubbranchNestedInput
  }

  export type SubbranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colorTokens?: ColorTokenUncheckedUpdateManyWithoutSubbranchNestedInput
  }

  export type SubbranchCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubbranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubbranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorTokenCreateInput = {
    id?: string
    name: string
    value: string
    usage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subbranch: SubbranchCreateNestedOneWithoutColorTokensInput
  }

  export type ColorTokenUncheckedCreateInput = {
    id?: string
    name: string
    value: string
    usage?: string | null
    subbranchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subbranch?: SubbranchUpdateOneRequiredWithoutColorTokensNestedInput
  }

  export type ColorTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    subbranchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorTokenCreateManyInput = {
    id?: string
    name: string
    value: string
    usage?: string | null
    subbranchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    subbranchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BranchListRelationFilter = {
    every?: BranchWhereInput
    some?: BranchWhereInput
    none?: BranchWhereInput
  }

  export type BranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubbranchListRelationFilter = {
    every?: SubbranchWhereInput
    some?: SubbranchWhereInput
    none?: SubbranchWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubbranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mood?: SortOrder
    isPublic?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mood?: SortOrder
    isPublic?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mood?: SortOrder
    isPublic?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type ColorTokenListRelationFilter = {
    every?: ColorTokenWhereInput
    some?: ColorTokenWhereInput
    none?: ColorTokenWhereInput
  }

  export type ColorTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubbranchBranchIdSlugCompoundUniqueInput = {
    branchId: string
    slug: string
  }

  export type SubbranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubbranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubbranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubbranchScalarRelationFilter = {
    is?: SubbranchWhereInput
    isNot?: SubbranchWhereInput
  }

  export type ColorTokenSubbranchIdNameCompoundUniqueInput = {
    subbranchId: string
    name: string
  }

  export type ColorTokenCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    usage?: SortOrder
    subbranchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    usage?: SortOrder
    subbranchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorTokenMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    usage?: SortOrder
    subbranchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BranchCreateWithoutOwnerInput, BranchUncheckedCreateWithoutOwnerInput> | BranchCreateWithoutOwnerInput[] | BranchUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutOwnerInput | BranchCreateOrConnectWithoutOwnerInput[]
    createMany?: BranchCreateManyOwnerInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BranchCreateWithoutOwnerInput, BranchUncheckedCreateWithoutOwnerInput> | BranchCreateWithoutOwnerInput[] | BranchUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutOwnerInput | BranchCreateOrConnectWithoutOwnerInput[]
    createMany?: BranchCreateManyOwnerInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BranchUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BranchCreateWithoutOwnerInput, BranchUncheckedCreateWithoutOwnerInput> | BranchCreateWithoutOwnerInput[] | BranchUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutOwnerInput | BranchCreateOrConnectWithoutOwnerInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutOwnerInput | BranchUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BranchCreateManyOwnerInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutOwnerInput | BranchUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutOwnerInput | BranchUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BranchCreateWithoutOwnerInput, BranchUncheckedCreateWithoutOwnerInput> | BranchCreateWithoutOwnerInput[] | BranchUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutOwnerInput | BranchCreateOrConnectWithoutOwnerInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutOwnerInput | BranchUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BranchCreateManyOwnerInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutOwnerInput | BranchUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutOwnerInput | BranchUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBranchesInput = {
    create?: XOR<UserCreateWithoutBranchesInput, UserUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBranchesInput
    connect?: UserWhereUniqueInput
  }

  export type SubbranchCreateNestedManyWithoutBranchInput = {
    create?: XOR<SubbranchCreateWithoutBranchInput, SubbranchUncheckedCreateWithoutBranchInput> | SubbranchCreateWithoutBranchInput[] | SubbranchUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SubbranchCreateOrConnectWithoutBranchInput | SubbranchCreateOrConnectWithoutBranchInput[]
    createMany?: SubbranchCreateManyBranchInputEnvelope
    connect?: SubbranchWhereUniqueInput | SubbranchWhereUniqueInput[]
  }

  export type SubbranchUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<SubbranchCreateWithoutBranchInput, SubbranchUncheckedCreateWithoutBranchInput> | SubbranchCreateWithoutBranchInput[] | SubbranchUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SubbranchCreateOrConnectWithoutBranchInput | SubbranchCreateOrConnectWithoutBranchInput[]
    createMany?: SubbranchCreateManyBranchInputEnvelope
    connect?: SubbranchWhereUniqueInput | SubbranchWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutBranchesNestedInput = {
    create?: XOR<UserCreateWithoutBranchesInput, UserUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBranchesInput
    upsert?: UserUpsertWithoutBranchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBranchesInput, UserUpdateWithoutBranchesInput>, UserUncheckedUpdateWithoutBranchesInput>
  }

  export type SubbranchUpdateManyWithoutBranchNestedInput = {
    create?: XOR<SubbranchCreateWithoutBranchInput, SubbranchUncheckedCreateWithoutBranchInput> | SubbranchCreateWithoutBranchInput[] | SubbranchUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SubbranchCreateOrConnectWithoutBranchInput | SubbranchCreateOrConnectWithoutBranchInput[]
    upsert?: SubbranchUpsertWithWhereUniqueWithoutBranchInput | SubbranchUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: SubbranchCreateManyBranchInputEnvelope
    set?: SubbranchWhereUniqueInput | SubbranchWhereUniqueInput[]
    disconnect?: SubbranchWhereUniqueInput | SubbranchWhereUniqueInput[]
    delete?: SubbranchWhereUniqueInput | SubbranchWhereUniqueInput[]
    connect?: SubbranchWhereUniqueInput | SubbranchWhereUniqueInput[]
    update?: SubbranchUpdateWithWhereUniqueWithoutBranchInput | SubbranchUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: SubbranchUpdateManyWithWhereWithoutBranchInput | SubbranchUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: SubbranchScalarWhereInput | SubbranchScalarWhereInput[]
  }

  export type SubbranchUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<SubbranchCreateWithoutBranchInput, SubbranchUncheckedCreateWithoutBranchInput> | SubbranchCreateWithoutBranchInput[] | SubbranchUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SubbranchCreateOrConnectWithoutBranchInput | SubbranchCreateOrConnectWithoutBranchInput[]
    upsert?: SubbranchUpsertWithWhereUniqueWithoutBranchInput | SubbranchUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: SubbranchCreateManyBranchInputEnvelope
    set?: SubbranchWhereUniqueInput | SubbranchWhereUniqueInput[]
    disconnect?: SubbranchWhereUniqueInput | SubbranchWhereUniqueInput[]
    delete?: SubbranchWhereUniqueInput | SubbranchWhereUniqueInput[]
    connect?: SubbranchWhereUniqueInput | SubbranchWhereUniqueInput[]
    update?: SubbranchUpdateWithWhereUniqueWithoutBranchInput | SubbranchUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: SubbranchUpdateManyWithWhereWithoutBranchInput | SubbranchUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: SubbranchScalarWhereInput | SubbranchScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutSubbranchesInput = {
    create?: XOR<BranchCreateWithoutSubbranchesInput, BranchUncheckedCreateWithoutSubbranchesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutSubbranchesInput
    connect?: BranchWhereUniqueInput
  }

  export type ColorTokenCreateNestedManyWithoutSubbranchInput = {
    create?: XOR<ColorTokenCreateWithoutSubbranchInput, ColorTokenUncheckedCreateWithoutSubbranchInput> | ColorTokenCreateWithoutSubbranchInput[] | ColorTokenUncheckedCreateWithoutSubbranchInput[]
    connectOrCreate?: ColorTokenCreateOrConnectWithoutSubbranchInput | ColorTokenCreateOrConnectWithoutSubbranchInput[]
    createMany?: ColorTokenCreateManySubbranchInputEnvelope
    connect?: ColorTokenWhereUniqueInput | ColorTokenWhereUniqueInput[]
  }

  export type ColorTokenUncheckedCreateNestedManyWithoutSubbranchInput = {
    create?: XOR<ColorTokenCreateWithoutSubbranchInput, ColorTokenUncheckedCreateWithoutSubbranchInput> | ColorTokenCreateWithoutSubbranchInput[] | ColorTokenUncheckedCreateWithoutSubbranchInput[]
    connectOrCreate?: ColorTokenCreateOrConnectWithoutSubbranchInput | ColorTokenCreateOrConnectWithoutSubbranchInput[]
    createMany?: ColorTokenCreateManySubbranchInputEnvelope
    connect?: ColorTokenWhereUniqueInput | ColorTokenWhereUniqueInput[]
  }

  export type BranchUpdateOneRequiredWithoutSubbranchesNestedInput = {
    create?: XOR<BranchCreateWithoutSubbranchesInput, BranchUncheckedCreateWithoutSubbranchesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutSubbranchesInput
    upsert?: BranchUpsertWithoutSubbranchesInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutSubbranchesInput, BranchUpdateWithoutSubbranchesInput>, BranchUncheckedUpdateWithoutSubbranchesInput>
  }

  export type ColorTokenUpdateManyWithoutSubbranchNestedInput = {
    create?: XOR<ColorTokenCreateWithoutSubbranchInput, ColorTokenUncheckedCreateWithoutSubbranchInput> | ColorTokenCreateWithoutSubbranchInput[] | ColorTokenUncheckedCreateWithoutSubbranchInput[]
    connectOrCreate?: ColorTokenCreateOrConnectWithoutSubbranchInput | ColorTokenCreateOrConnectWithoutSubbranchInput[]
    upsert?: ColorTokenUpsertWithWhereUniqueWithoutSubbranchInput | ColorTokenUpsertWithWhereUniqueWithoutSubbranchInput[]
    createMany?: ColorTokenCreateManySubbranchInputEnvelope
    set?: ColorTokenWhereUniqueInput | ColorTokenWhereUniqueInput[]
    disconnect?: ColorTokenWhereUniqueInput | ColorTokenWhereUniqueInput[]
    delete?: ColorTokenWhereUniqueInput | ColorTokenWhereUniqueInput[]
    connect?: ColorTokenWhereUniqueInput | ColorTokenWhereUniqueInput[]
    update?: ColorTokenUpdateWithWhereUniqueWithoutSubbranchInput | ColorTokenUpdateWithWhereUniqueWithoutSubbranchInput[]
    updateMany?: ColorTokenUpdateManyWithWhereWithoutSubbranchInput | ColorTokenUpdateManyWithWhereWithoutSubbranchInput[]
    deleteMany?: ColorTokenScalarWhereInput | ColorTokenScalarWhereInput[]
  }

  export type ColorTokenUncheckedUpdateManyWithoutSubbranchNestedInput = {
    create?: XOR<ColorTokenCreateWithoutSubbranchInput, ColorTokenUncheckedCreateWithoutSubbranchInput> | ColorTokenCreateWithoutSubbranchInput[] | ColorTokenUncheckedCreateWithoutSubbranchInput[]
    connectOrCreate?: ColorTokenCreateOrConnectWithoutSubbranchInput | ColorTokenCreateOrConnectWithoutSubbranchInput[]
    upsert?: ColorTokenUpsertWithWhereUniqueWithoutSubbranchInput | ColorTokenUpsertWithWhereUniqueWithoutSubbranchInput[]
    createMany?: ColorTokenCreateManySubbranchInputEnvelope
    set?: ColorTokenWhereUniqueInput | ColorTokenWhereUniqueInput[]
    disconnect?: ColorTokenWhereUniqueInput | ColorTokenWhereUniqueInput[]
    delete?: ColorTokenWhereUniqueInput | ColorTokenWhereUniqueInput[]
    connect?: ColorTokenWhereUniqueInput | ColorTokenWhereUniqueInput[]
    update?: ColorTokenUpdateWithWhereUniqueWithoutSubbranchInput | ColorTokenUpdateWithWhereUniqueWithoutSubbranchInput[]
    updateMany?: ColorTokenUpdateManyWithWhereWithoutSubbranchInput | ColorTokenUpdateManyWithWhereWithoutSubbranchInput[]
    deleteMany?: ColorTokenScalarWhereInput | ColorTokenScalarWhereInput[]
  }

  export type SubbranchCreateNestedOneWithoutColorTokensInput = {
    create?: XOR<SubbranchCreateWithoutColorTokensInput, SubbranchUncheckedCreateWithoutColorTokensInput>
    connectOrCreate?: SubbranchCreateOrConnectWithoutColorTokensInput
    connect?: SubbranchWhereUniqueInput
  }

  export type SubbranchUpdateOneRequiredWithoutColorTokensNestedInput = {
    create?: XOR<SubbranchCreateWithoutColorTokensInput, SubbranchUncheckedCreateWithoutColorTokensInput>
    connectOrCreate?: SubbranchCreateOrConnectWithoutColorTokensInput
    upsert?: SubbranchUpsertWithoutColorTokensInput
    connect?: SubbranchWhereUniqueInput
    update?: XOR<XOR<SubbranchUpdateToOneWithWhereWithoutColorTokensInput, SubbranchUpdateWithoutColorTokensInput>, SubbranchUncheckedUpdateWithoutColorTokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BranchCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    mood?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subbranches?: SubbranchCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    mood?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subbranches?: SubbranchUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutOwnerInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutOwnerInput, BranchUncheckedCreateWithoutOwnerInput>
  }

  export type BranchCreateManyOwnerInputEnvelope = {
    data: BranchCreateManyOwnerInput | BranchCreateManyOwnerInput[]
  }

  export type BranchUpsertWithWhereUniqueWithoutOwnerInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutOwnerInput, BranchUncheckedUpdateWithoutOwnerInput>
    create: XOR<BranchCreateWithoutOwnerInput, BranchUncheckedCreateWithoutOwnerInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutOwnerInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutOwnerInput, BranchUncheckedUpdateWithoutOwnerInput>
  }

  export type BranchUpdateManyWithWhereWithoutOwnerInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutOwnerInput>
  }

  export type BranchScalarWhereInput = {
    AND?: BranchScalarWhereInput | BranchScalarWhereInput[]
    OR?: BranchScalarWhereInput[]
    NOT?: BranchScalarWhereInput | BranchScalarWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    slug?: StringFilter<"Branch"> | string
    description?: StringNullableFilter<"Branch"> | string | null
    mood?: StringNullableFilter<"Branch"> | string | null
    isPublic?: BoolFilter<"Branch"> | boolean
    ownerId?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
  }

  export type UserCreateWithoutBranchesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBranchesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBranchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBranchesInput, UserUncheckedCreateWithoutBranchesInput>
  }

  export type SubbranchCreateWithoutBranchInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colorTokens?: ColorTokenCreateNestedManyWithoutSubbranchInput
  }

  export type SubbranchUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colorTokens?: ColorTokenUncheckedCreateNestedManyWithoutSubbranchInput
  }

  export type SubbranchCreateOrConnectWithoutBranchInput = {
    where: SubbranchWhereUniqueInput
    create: XOR<SubbranchCreateWithoutBranchInput, SubbranchUncheckedCreateWithoutBranchInput>
  }

  export type SubbranchCreateManyBranchInputEnvelope = {
    data: SubbranchCreateManyBranchInput | SubbranchCreateManyBranchInput[]
  }

  export type UserUpsertWithoutBranchesInput = {
    update: XOR<UserUpdateWithoutBranchesInput, UserUncheckedUpdateWithoutBranchesInput>
    create: XOR<UserCreateWithoutBranchesInput, UserUncheckedCreateWithoutBranchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBranchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBranchesInput, UserUncheckedUpdateWithoutBranchesInput>
  }

  export type UserUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubbranchUpsertWithWhereUniqueWithoutBranchInput = {
    where: SubbranchWhereUniqueInput
    update: XOR<SubbranchUpdateWithoutBranchInput, SubbranchUncheckedUpdateWithoutBranchInput>
    create: XOR<SubbranchCreateWithoutBranchInput, SubbranchUncheckedCreateWithoutBranchInput>
  }

  export type SubbranchUpdateWithWhereUniqueWithoutBranchInput = {
    where: SubbranchWhereUniqueInput
    data: XOR<SubbranchUpdateWithoutBranchInput, SubbranchUncheckedUpdateWithoutBranchInput>
  }

  export type SubbranchUpdateManyWithWhereWithoutBranchInput = {
    where: SubbranchScalarWhereInput
    data: XOR<SubbranchUpdateManyMutationInput, SubbranchUncheckedUpdateManyWithoutBranchInput>
  }

  export type SubbranchScalarWhereInput = {
    AND?: SubbranchScalarWhereInput | SubbranchScalarWhereInput[]
    OR?: SubbranchScalarWhereInput[]
    NOT?: SubbranchScalarWhereInput | SubbranchScalarWhereInput[]
    id?: StringFilter<"Subbranch"> | string
    name?: StringFilter<"Subbranch"> | string
    slug?: StringFilter<"Subbranch"> | string
    description?: StringNullableFilter<"Subbranch"> | string | null
    branchId?: StringFilter<"Subbranch"> | string
    createdAt?: DateTimeFilter<"Subbranch"> | Date | string
    updatedAt?: DateTimeFilter<"Subbranch"> | Date | string
  }

  export type BranchCreateWithoutSubbranchesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    mood?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutBranchesInput
  }

  export type BranchUncheckedCreateWithoutSubbranchesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    mood?: string | null
    isPublic?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchCreateOrConnectWithoutSubbranchesInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutSubbranchesInput, BranchUncheckedCreateWithoutSubbranchesInput>
  }

  export type ColorTokenCreateWithoutSubbranchInput = {
    id?: string
    name: string
    value: string
    usage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorTokenUncheckedCreateWithoutSubbranchInput = {
    id?: string
    name: string
    value: string
    usage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorTokenCreateOrConnectWithoutSubbranchInput = {
    where: ColorTokenWhereUniqueInput
    create: XOR<ColorTokenCreateWithoutSubbranchInput, ColorTokenUncheckedCreateWithoutSubbranchInput>
  }

  export type ColorTokenCreateManySubbranchInputEnvelope = {
    data: ColorTokenCreateManySubbranchInput | ColorTokenCreateManySubbranchInput[]
  }

  export type BranchUpsertWithoutSubbranchesInput = {
    update: XOR<BranchUpdateWithoutSubbranchesInput, BranchUncheckedUpdateWithoutSubbranchesInput>
    create: XOR<BranchCreateWithoutSubbranchesInput, BranchUncheckedCreateWithoutSubbranchesInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutSubbranchesInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutSubbranchesInput, BranchUncheckedUpdateWithoutSubbranchesInput>
  }

  export type BranchUpdateWithoutSubbranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutBranchesNestedInput
  }

  export type BranchUncheckedUpdateWithoutSubbranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorTokenUpsertWithWhereUniqueWithoutSubbranchInput = {
    where: ColorTokenWhereUniqueInput
    update: XOR<ColorTokenUpdateWithoutSubbranchInput, ColorTokenUncheckedUpdateWithoutSubbranchInput>
    create: XOR<ColorTokenCreateWithoutSubbranchInput, ColorTokenUncheckedCreateWithoutSubbranchInput>
  }

  export type ColorTokenUpdateWithWhereUniqueWithoutSubbranchInput = {
    where: ColorTokenWhereUniqueInput
    data: XOR<ColorTokenUpdateWithoutSubbranchInput, ColorTokenUncheckedUpdateWithoutSubbranchInput>
  }

  export type ColorTokenUpdateManyWithWhereWithoutSubbranchInput = {
    where: ColorTokenScalarWhereInput
    data: XOR<ColorTokenUpdateManyMutationInput, ColorTokenUncheckedUpdateManyWithoutSubbranchInput>
  }

  export type ColorTokenScalarWhereInput = {
    AND?: ColorTokenScalarWhereInput | ColorTokenScalarWhereInput[]
    OR?: ColorTokenScalarWhereInput[]
    NOT?: ColorTokenScalarWhereInput | ColorTokenScalarWhereInput[]
    id?: StringFilter<"ColorToken"> | string
    name?: StringFilter<"ColorToken"> | string
    value?: StringFilter<"ColorToken"> | string
    usage?: StringNullableFilter<"ColorToken"> | string | null
    subbranchId?: StringFilter<"ColorToken"> | string
    createdAt?: DateTimeFilter<"ColorToken"> | Date | string
    updatedAt?: DateTimeFilter<"ColorToken"> | Date | string
  }

  export type SubbranchCreateWithoutColorTokensInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutSubbranchesInput
  }

  export type SubbranchUncheckedCreateWithoutColorTokensInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubbranchCreateOrConnectWithoutColorTokensInput = {
    where: SubbranchWhereUniqueInput
    create: XOR<SubbranchCreateWithoutColorTokensInput, SubbranchUncheckedCreateWithoutColorTokensInput>
  }

  export type SubbranchUpsertWithoutColorTokensInput = {
    update: XOR<SubbranchUpdateWithoutColorTokensInput, SubbranchUncheckedUpdateWithoutColorTokensInput>
    create: XOR<SubbranchCreateWithoutColorTokensInput, SubbranchUncheckedCreateWithoutColorTokensInput>
    where?: SubbranchWhereInput
  }

  export type SubbranchUpdateToOneWithWhereWithoutColorTokensInput = {
    where?: SubbranchWhereInput
    data: XOR<SubbranchUpdateWithoutColorTokensInput, SubbranchUncheckedUpdateWithoutColorTokensInput>
  }

  export type SubbranchUpdateWithoutColorTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutSubbranchesNestedInput
  }

  export type SubbranchUncheckedUpdateWithoutColorTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateManyOwnerInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    mood?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subbranches?: SubbranchUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subbranches?: SubbranchUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubbranchCreateManyBranchInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubbranchUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colorTokens?: ColorTokenUpdateManyWithoutSubbranchNestedInput
  }

  export type SubbranchUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colorTokens?: ColorTokenUncheckedUpdateManyWithoutSubbranchNestedInput
  }

  export type SubbranchUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorTokenCreateManySubbranchInput = {
    id?: string
    name: string
    value: string
    usage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorTokenUpdateWithoutSubbranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorTokenUncheckedUpdateWithoutSubbranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorTokenUncheckedUpdateManyWithoutSubbranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}