
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Motorista
 * 
 */
export type Motorista = $Result.DefaultSelection<Prisma.$MotoristaPayload>
/**
 * Model Veiculo
 * 
 */
export type Veiculo = $Result.DefaultSelection<Prisma.$VeiculoPayload>
/**
 * Model Zona
 * 
 */
export type Zona = $Result.DefaultSelection<Prisma.$ZonaPayload>
/**
 * Model Contentor
 * 
 */
export type Contentor = $Result.DefaultSelection<Prisma.$ContentorPayload>
/**
 * Model Movimentacao
 * 
 */
export type Movimentacao = $Result.DefaultSelection<Prisma.$MovimentacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  OPERATOR: 'OPERATOR',
  GUARD: 'GUARD'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TipoContentor: {
  PES_20: 'PES_20',
  PES_40: 'PES_40',
  REEFER: 'REEFER',
  TANQUE: 'TANQUE'
};

export type TipoContentor = (typeof TipoContentor)[keyof typeof TipoContentor]


export const EstadoContentor: {
  VAZIO: 'VAZIO',
  CHEIO: 'CHEIO'
};

export type EstadoContentor = (typeof EstadoContentor)[keyof typeof EstadoContentor]


export const TipoMovimentacao: {
  GATE_IN: 'GATE_IN',
  GATE_OUT: 'GATE_OUT'
};

export type TipoMovimentacao = (typeof TipoMovimentacao)[keyof typeof TipoMovimentacao]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TipoContentor = $Enums.TipoContentor

export const TipoContentor: typeof $Enums.TipoContentor

export type EstadoContentor = $Enums.EstadoContentor

export const EstadoContentor: typeof $Enums.EstadoContentor

export type TipoMovimentacao = $Enums.TipoMovimentacao

export const TipoMovimentacao: typeof $Enums.TipoMovimentacao

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.motorista`: Exposes CRUD operations for the **Motorista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Motoristas
    * const motoristas = await prisma.motorista.findMany()
    * ```
    */
  get motorista(): Prisma.MotoristaDelegate<ExtArgs>;

  /**
   * `prisma.veiculo`: Exposes CRUD operations for the **Veiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculo.findMany()
    * ```
    */
  get veiculo(): Prisma.VeiculoDelegate<ExtArgs>;

  /**
   * `prisma.zona`: Exposes CRUD operations for the **Zona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zonas
    * const zonas = await prisma.zona.findMany()
    * ```
    */
  get zona(): Prisma.ZonaDelegate<ExtArgs>;

  /**
   * `prisma.contentor`: Exposes CRUD operations for the **Contentor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contentors
    * const contentors = await prisma.contentor.findMany()
    * ```
    */
  get contentor(): Prisma.ContentorDelegate<ExtArgs>;

  /**
   * `prisma.movimentacao`: Exposes CRUD operations for the **Movimentacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimentacaos
    * const movimentacaos = await prisma.movimentacao.findMany()
    * ```
    */
  get movimentacao(): Prisma.MovimentacaoDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Motorista: 'Motorista',
    Veiculo: 'Veiculo',
    Zona: 'Zona',
    Contentor: 'Contentor',
    Movimentacao: 'Movimentacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'motorista' | 'veiculo' | 'zona' | 'contentor' | 'movimentacao'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Motorista: {
        payload: Prisma.$MotoristaPayload<ExtArgs>
        fields: Prisma.MotoristaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MotoristaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MotoristaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          findFirst: {
            args: Prisma.MotoristaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MotoristaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          findMany: {
            args: Prisma.MotoristaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>[]
          }
          create: {
            args: Prisma.MotoristaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          createMany: {
            args: Prisma.MotoristaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MotoristaCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>[]
          }
          delete: {
            args: Prisma.MotoristaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          update: {
            args: Prisma.MotoristaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          deleteMany: {
            args: Prisma.MotoristaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MotoristaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MotoristaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          aggregate: {
            args: Prisma.MotoristaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMotorista>
          }
          groupBy: {
            args: Prisma.MotoristaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MotoristaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MotoristaCountArgs<ExtArgs>,
            result: $Utils.Optional<MotoristaCountAggregateOutputType> | number
          }
        }
      }
      Veiculo: {
        payload: Prisma.$VeiculoPayload<ExtArgs>
        fields: Prisma.VeiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findFirst: {
            args: Prisma.VeiculoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findMany: {
            args: Prisma.VeiculoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          create: {
            args: Prisma.VeiculoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          createMany: {
            args: Prisma.VeiculoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeiculoCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          delete: {
            args: Prisma.VeiculoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          update: {
            args: Prisma.VeiculoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VeiculoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          aggregate: {
            args: Prisma.VeiculoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVeiculo>
          }
          groupBy: {
            args: Prisma.VeiculoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoCountArgs<ExtArgs>,
            result: $Utils.Optional<VeiculoCountAggregateOutputType> | number
          }
        }
      }
      Zona: {
        payload: Prisma.$ZonaPayload<ExtArgs>
        fields: Prisma.ZonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZonaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZonaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          findFirst: {
            args: Prisma.ZonaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZonaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          findMany: {
            args: Prisma.ZonaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>[]
          }
          create: {
            args: Prisma.ZonaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          createMany: {
            args: Prisma.ZonaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZonaCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>[]
          }
          delete: {
            args: Prisma.ZonaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          update: {
            args: Prisma.ZonaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          deleteMany: {
            args: Prisma.ZonaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ZonaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ZonaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          aggregate: {
            args: Prisma.ZonaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateZona>
          }
          groupBy: {
            args: Prisma.ZonaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ZonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZonaCountArgs<ExtArgs>,
            result: $Utils.Optional<ZonaCountAggregateOutputType> | number
          }
        }
      }
      Contentor: {
        payload: Prisma.$ContentorPayload<ExtArgs>
        fields: Prisma.ContentorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContentorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContentorPayload>
          }
          findFirst: {
            args: Prisma.ContentorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContentorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContentorPayload>
          }
          findMany: {
            args: Prisma.ContentorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContentorPayload>[]
          }
          create: {
            args: Prisma.ContentorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContentorPayload>
          }
          createMany: {
            args: Prisma.ContentorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentorCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContentorPayload>[]
          }
          delete: {
            args: Prisma.ContentorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContentorPayload>
          }
          update: {
            args: Prisma.ContentorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContentorPayload>
          }
          deleteMany: {
            args: Prisma.ContentorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContentorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContentorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContentorPayload>
          }
          aggregate: {
            args: Prisma.ContentorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContentor>
          }
          groupBy: {
            args: Prisma.ContentorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContentorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentorCountArgs<ExtArgs>,
            result: $Utils.Optional<ContentorCountAggregateOutputType> | number
          }
        }
      }
      Movimentacao: {
        payload: Prisma.$MovimentacaoPayload<ExtArgs>
        fields: Prisma.MovimentacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentacaoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentacaoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findFirst: {
            args: Prisma.MovimentacaoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentacaoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findMany: {
            args: Prisma.MovimentacaoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          create: {
            args: Prisma.MovimentacaoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          createMany: {
            args: Prisma.MovimentacaoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimentacaoCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          delete: {
            args: Prisma.MovimentacaoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          update: {
            args: Prisma.MovimentacaoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          deleteMany: {
            args: Prisma.MovimentacaoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentacaoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MovimentacaoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          aggregate: {
            args: Prisma.MovimentacaoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovimentacao>
          }
          groupBy: {
            args: Prisma.MovimentacaoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovimentacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimentacaoCountArgs<ExtArgs>,
            result: $Utils.Optional<MovimentacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type MotoristaCountOutputType
   */

  export type MotoristaCountOutputType = {
    veiculos: number
  }

  export type MotoristaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculos?: boolean | MotoristaCountOutputTypeCountVeiculosArgs
  }

  // Custom InputTypes
  /**
   * MotoristaCountOutputType without action
   */
  export type MotoristaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotoristaCountOutputType
     */
    select?: MotoristaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MotoristaCountOutputType without action
   */
  export type MotoristaCountOutputTypeCountVeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
  }


  /**
   * Count Type VeiculoCountOutputType
   */

  export type VeiculoCountOutputType = {
    movimentacoes: number
  }

  export type VeiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes?: boolean | VeiculoCountOutputTypeCountMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoCountOutputType
     */
    select?: VeiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
  }


  /**
   * Count Type ZonaCountOutputType
   */

  export type ZonaCountOutputType = {
    contentores: number
  }

  export type ZonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentores?: boolean | ZonaCountOutputTypeCountContentoresArgs
  }

  // Custom InputTypes
  /**
   * ZonaCountOutputType without action
   */
  export type ZonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaCountOutputType
     */
    select?: ZonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZonaCountOutputType without action
   */
  export type ZonaCountOutputTypeCountContentoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentorWhereInput
  }


  /**
   * Count Type ContentorCountOutputType
   */

  export type ContentorCountOutputType = {
    movimentacoes: number
  }

  export type ContentorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes?: boolean | ContentorCountOutputTypeCountMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * ContentorCountOutputType without action
   */
  export type ContentorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentorCountOutputType
     */
    select?: ContentorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentorCountOutputType without action
   */
  export type ContentorCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
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
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
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
    password: string
    role: $Enums.Role
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
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
    skipDuplicates?: boolean
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Motorista
   */

  export type AggregateMotorista = {
    _count: MotoristaCountAggregateOutputType | null
    _min: MotoristaMinAggregateOutputType | null
    _max: MotoristaMaxAggregateOutputType | null
  }

  export type MotoristaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    documento: string | null
    telefone: string | null
  }

  export type MotoristaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    documento: string | null
    telefone: string | null
  }

  export type MotoristaCountAggregateOutputType = {
    id: number
    nome: number
    documento: number
    telefone: number
    _all: number
  }


  export type MotoristaMinAggregateInputType = {
    id?: true
    nome?: true
    documento?: true
    telefone?: true
  }

  export type MotoristaMaxAggregateInputType = {
    id?: true
    nome?: true
    documento?: true
    telefone?: true
  }

  export type MotoristaCountAggregateInputType = {
    id?: true
    nome?: true
    documento?: true
    telefone?: true
    _all?: true
  }

  export type MotoristaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motorista to aggregate.
     */
    where?: MotoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motoristas to fetch.
     */
    orderBy?: MotoristaOrderByWithRelationInput | MotoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MotoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Motoristas
    **/
    _count?: true | MotoristaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotoristaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotoristaMaxAggregateInputType
  }

  export type GetMotoristaAggregateType<T extends MotoristaAggregateArgs> = {
        [P in keyof T & keyof AggregateMotorista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMotorista[P]>
      : GetScalarType<T[P], AggregateMotorista[P]>
  }




  export type MotoristaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotoristaWhereInput
    orderBy?: MotoristaOrderByWithAggregationInput | MotoristaOrderByWithAggregationInput[]
    by: MotoristaScalarFieldEnum[] | MotoristaScalarFieldEnum
    having?: MotoristaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotoristaCountAggregateInputType | true
    _min?: MotoristaMinAggregateInputType
    _max?: MotoristaMaxAggregateInputType
  }

  export type MotoristaGroupByOutputType = {
    id: string
    nome: string
    documento: string
    telefone: string | null
    _count: MotoristaCountAggregateOutputType | null
    _min: MotoristaMinAggregateOutputType | null
    _max: MotoristaMaxAggregateOutputType | null
  }

  type GetMotoristaGroupByPayload<T extends MotoristaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotoristaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotoristaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotoristaGroupByOutputType[P]>
            : GetScalarType<T[P], MotoristaGroupByOutputType[P]>
        }
      >
    >


  export type MotoristaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    documento?: boolean
    telefone?: boolean
    veiculos?: boolean | Motorista$veiculosArgs<ExtArgs>
    _count?: boolean | MotoristaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorista"]>

  export type MotoristaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    documento?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["motorista"]>

  export type MotoristaSelectScalar = {
    id?: boolean
    nome?: boolean
    documento?: boolean
    telefone?: boolean
  }

  export type MotoristaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculos?: boolean | Motorista$veiculosArgs<ExtArgs>
    _count?: boolean | MotoristaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MotoristaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MotoristaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Motorista"
    objects: {
      veiculos: Prisma.$VeiculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      documento: string
      telefone: string | null
    }, ExtArgs["result"]["motorista"]>
    composites: {}
  }

  type MotoristaGetPayload<S extends boolean | null | undefined | MotoristaDefaultArgs> = $Result.GetResult<Prisma.$MotoristaPayload, S>

  type MotoristaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MotoristaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MotoristaCountAggregateInputType | true
    }

  export interface MotoristaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Motorista'], meta: { name: 'Motorista' } }
    /**
     * Find zero or one Motorista that matches the filter.
     * @param {MotoristaFindUniqueArgs} args - Arguments to find a Motorista
     * @example
     * // Get one Motorista
     * const motorista = await prisma.motorista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MotoristaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MotoristaFindUniqueArgs<ExtArgs>>
    ): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Motorista that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MotoristaFindUniqueOrThrowArgs} args - Arguments to find a Motorista
     * @example
     * // Get one Motorista
     * const motorista = await prisma.motorista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MotoristaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MotoristaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Motorista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaFindFirstArgs} args - Arguments to find a Motorista
     * @example
     * // Get one Motorista
     * const motorista = await prisma.motorista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MotoristaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MotoristaFindFirstArgs<ExtArgs>>
    ): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Motorista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaFindFirstOrThrowArgs} args - Arguments to find a Motorista
     * @example
     * // Get one Motorista
     * const motorista = await prisma.motorista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MotoristaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MotoristaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Motoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Motoristas
     * const motoristas = await prisma.motorista.findMany()
     * 
     * // Get first 10 Motoristas
     * const motoristas = await prisma.motorista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const motoristaWithIdOnly = await prisma.motorista.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MotoristaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MotoristaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Motorista.
     * @param {MotoristaCreateArgs} args - Arguments to create a Motorista.
     * @example
     * // Create one Motorista
     * const Motorista = await prisma.motorista.create({
     *   data: {
     *     // ... data to create a Motorista
     *   }
     * })
     * 
    **/
    create<T extends MotoristaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MotoristaCreateArgs<ExtArgs>>
    ): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Motoristas.
     * @param {MotoristaCreateManyArgs} args - Arguments to create many Motoristas.
     * @example
     * // Create many Motoristas
     * const motorista = await prisma.motorista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends MotoristaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MotoristaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Motoristas and returns the data saved in the database.
     * @param {MotoristaCreateManyAndReturnArgs} args - Arguments to create many Motoristas.
     * @example
     * // Create many Motoristas
     * const motorista = await prisma.motorista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Motoristas and only return the `id`
     * const motoristaWithIdOnly = await prisma.motorista.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends MotoristaCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MotoristaCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Motorista.
     * @param {MotoristaDeleteArgs} args - Arguments to delete one Motorista.
     * @example
     * // Delete one Motorista
     * const Motorista = await prisma.motorista.delete({
     *   where: {
     *     // ... filter to delete one Motorista
     *   }
     * })
     * 
    **/
    delete<T extends MotoristaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MotoristaDeleteArgs<ExtArgs>>
    ): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Motorista.
     * @param {MotoristaUpdateArgs} args - Arguments to update one Motorista.
     * @example
     * // Update one Motorista
     * const motorista = await prisma.motorista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MotoristaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MotoristaUpdateArgs<ExtArgs>>
    ): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Motoristas.
     * @param {MotoristaDeleteManyArgs} args - Arguments to filter Motoristas to delete.
     * @example
     * // Delete a few Motoristas
     * const { count } = await prisma.motorista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MotoristaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MotoristaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Motoristas
     * const motorista = await prisma.motorista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MotoristaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MotoristaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Motorista.
     * @param {MotoristaUpsertArgs} args - Arguments to update or create a Motorista.
     * @example
     * // Update or create a Motorista
     * const motorista = await prisma.motorista.upsert({
     *   create: {
     *     // ... data to create a Motorista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Motorista we want to update
     *   }
     * })
    **/
    upsert<T extends MotoristaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MotoristaUpsertArgs<ExtArgs>>
    ): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaCountArgs} args - Arguments to filter Motoristas to count.
     * @example
     * // Count the number of Motoristas
     * const count = await prisma.motorista.count({
     *   where: {
     *     // ... the filter for the Motoristas we want to count
     *   }
     * })
    **/
    count<T extends MotoristaCountArgs>(
      args?: Subset<T, MotoristaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotoristaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Motorista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MotoristaAggregateArgs>(args: Subset<T, MotoristaAggregateArgs>): Prisma.PrismaPromise<GetMotoristaAggregateType<T>>

    /**
     * Group by Motorista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaGroupByArgs} args - Group by arguments.
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
      T extends MotoristaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotoristaGroupByArgs['orderBy'] }
        : { orderBy?: MotoristaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MotoristaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotoristaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Motorista model
   */
  readonly fields: MotoristaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Motorista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MotoristaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    veiculos<T extends Motorista$veiculosArgs<ExtArgs> = {}>(args?: Subset<T, Motorista$veiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Motorista model
   */ 
  interface MotoristaFieldRefs {
    readonly id: FieldRef<"Motorista", 'String'>
    readonly nome: FieldRef<"Motorista", 'String'>
    readonly documento: FieldRef<"Motorista", 'String'>
    readonly telefone: FieldRef<"Motorista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Motorista findUnique
   */
  export type MotoristaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter, which Motorista to fetch.
     */
    where: MotoristaWhereUniqueInput
  }

  /**
   * Motorista findUniqueOrThrow
   */
  export type MotoristaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter, which Motorista to fetch.
     */
    where: MotoristaWhereUniqueInput
  }

  /**
   * Motorista findFirst
   */
  export type MotoristaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter, which Motorista to fetch.
     */
    where?: MotoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motoristas to fetch.
     */
    orderBy?: MotoristaOrderByWithRelationInput | MotoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motoristas.
     */
    cursor?: MotoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motoristas.
     */
    distinct?: MotoristaScalarFieldEnum | MotoristaScalarFieldEnum[]
  }

  /**
   * Motorista findFirstOrThrow
   */
  export type MotoristaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter, which Motorista to fetch.
     */
    where?: MotoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motoristas to fetch.
     */
    orderBy?: MotoristaOrderByWithRelationInput | MotoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motoristas.
     */
    cursor?: MotoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motoristas.
     */
    distinct?: MotoristaScalarFieldEnum | MotoristaScalarFieldEnum[]
  }

  /**
   * Motorista findMany
   */
  export type MotoristaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter, which Motoristas to fetch.
     */
    where?: MotoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motoristas to fetch.
     */
    orderBy?: MotoristaOrderByWithRelationInput | MotoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Motoristas.
     */
    cursor?: MotoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motoristas.
     */
    skip?: number
    distinct?: MotoristaScalarFieldEnum | MotoristaScalarFieldEnum[]
  }

  /**
   * Motorista create
   */
  export type MotoristaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * The data needed to create a Motorista.
     */
    data: XOR<MotoristaCreateInput, MotoristaUncheckedCreateInput>
  }

  /**
   * Motorista createMany
   */
  export type MotoristaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Motoristas.
     */
    data: MotoristaCreateManyInput | MotoristaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motorista createManyAndReturn
   */
  export type MotoristaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Motoristas.
     */
    data: MotoristaCreateManyInput | MotoristaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motorista update
   */
  export type MotoristaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * The data needed to update a Motorista.
     */
    data: XOR<MotoristaUpdateInput, MotoristaUncheckedUpdateInput>
    /**
     * Choose, which Motorista to update.
     */
    where: MotoristaWhereUniqueInput
  }

  /**
   * Motorista updateMany
   */
  export type MotoristaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Motoristas.
     */
    data: XOR<MotoristaUpdateManyMutationInput, MotoristaUncheckedUpdateManyInput>
    /**
     * Filter which Motoristas to update
     */
    where?: MotoristaWhereInput
  }

  /**
   * Motorista upsert
   */
  export type MotoristaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * The filter to search for the Motorista to update in case it exists.
     */
    where: MotoristaWhereUniqueInput
    /**
     * In case the Motorista found by the `where` argument doesn't exist, create a new Motorista with this data.
     */
    create: XOR<MotoristaCreateInput, MotoristaUncheckedCreateInput>
    /**
     * In case the Motorista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MotoristaUpdateInput, MotoristaUncheckedUpdateInput>
  }

  /**
   * Motorista delete
   */
  export type MotoristaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter which Motorista to delete.
     */
    where: MotoristaWhereUniqueInput
  }

  /**
   * Motorista deleteMany
   */
  export type MotoristaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motoristas to delete
     */
    where?: MotoristaWhereInput
  }

  /**
   * Motorista.veiculos
   */
  export type Motorista$veiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    cursor?: VeiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Motorista without action
   */
  export type MotoristaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
  }


  /**
   * Model Veiculo
   */

  export type AggregateVeiculo = {
    _count: VeiculoCountAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  export type VeiculoMinAggregateOutputType = {
    id: string | null
    placa: string | null
    modelo: string | null
    motoristaId: string | null
  }

  export type VeiculoMaxAggregateOutputType = {
    id: string | null
    placa: string | null
    modelo: string | null
    motoristaId: string | null
  }

  export type VeiculoCountAggregateOutputType = {
    id: number
    placa: number
    modelo: number
    motoristaId: number
    _all: number
  }


  export type VeiculoMinAggregateInputType = {
    id?: true
    placa?: true
    modelo?: true
    motoristaId?: true
  }

  export type VeiculoMaxAggregateInputType = {
    id?: true
    placa?: true
    modelo?: true
    motoristaId?: true
  }

  export type VeiculoCountAggregateInputType = {
    id?: true
    placa?: true
    modelo?: true
    motoristaId?: true
    _all?: true
  }

  export type VeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculo to aggregate.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veiculos
    **/
    _count?: true | VeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoMaxAggregateInputType
  }

  export type GetVeiculoAggregateType<T extends VeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculo[P]>
      : GetScalarType<T[P], AggregateVeiculo[P]>
  }




  export type VeiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithAggregationInput | VeiculoOrderByWithAggregationInput[]
    by: VeiculoScalarFieldEnum[] | VeiculoScalarFieldEnum
    having?: VeiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoCountAggregateInputType | true
    _min?: VeiculoMinAggregateInputType
    _max?: VeiculoMaxAggregateInputType
  }

  export type VeiculoGroupByOutputType = {
    id: string
    placa: string
    modelo: string | null
    motoristaId: string
    _count: VeiculoCountAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  type GetVeiculoGroupByPayload<T extends VeiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    modelo?: boolean
    motoristaId?: boolean
    motorista?: boolean | MotoristaDefaultArgs<ExtArgs>
    movimentacoes?: boolean | Veiculo$movimentacoesArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    modelo?: boolean
    motoristaId?: boolean
    motorista?: boolean | MotoristaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectScalar = {
    id?: boolean
    placa?: boolean
    modelo?: boolean
    motoristaId?: boolean
  }

  export type VeiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorista?: boolean | MotoristaDefaultArgs<ExtArgs>
    movimentacoes?: boolean | Veiculo$movimentacoesArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorista?: boolean | MotoristaDefaultArgs<ExtArgs>
  }

  export type $VeiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veiculo"
    objects: {
      motorista: Prisma.$MotoristaPayload<ExtArgs>
      movimentacoes: Prisma.$MovimentacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      placa: string
      modelo: string | null
      motoristaId: string
    }, ExtArgs["result"]["veiculo"]>
    composites: {}
  }

  type VeiculoGetPayload<S extends boolean | null | undefined | VeiculoDefaultArgs> = $Result.GetResult<Prisma.$VeiculoPayload, S>

  type VeiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VeiculoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VeiculoCountAggregateInputType | true
    }

  export interface VeiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veiculo'], meta: { name: 'Veiculo' } }
    /**
     * Find zero or one Veiculo that matches the filter.
     * @param {VeiculoFindUniqueArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VeiculoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoFindUniqueArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Veiculo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VeiculoFindUniqueOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VeiculoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Veiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VeiculoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoFindFirstArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Veiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VeiculoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculo.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VeiculoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Veiculo.
     * @param {VeiculoCreateArgs} args - Arguments to create a Veiculo.
     * @example
     * // Create one Veiculo
     * const Veiculo = await prisma.veiculo.create({
     *   data: {
     *     // ... data to create a Veiculo
     *   }
     * })
     * 
    **/
    create<T extends VeiculoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoCreateArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Veiculos.
     * @param {VeiculoCreateManyArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VeiculoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veiculos and returns the data saved in the database.
     * @param {VeiculoCreateManyAndReturnArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veiculos and only return the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends VeiculoCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Veiculo.
     * @param {VeiculoDeleteArgs} args - Arguments to delete one Veiculo.
     * @example
     * // Delete one Veiculo
     * const Veiculo = await prisma.veiculo.delete({
     *   where: {
     *     // ... filter to delete one Veiculo
     *   }
     * })
     * 
    **/
    delete<T extends VeiculoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoDeleteArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Veiculo.
     * @param {VeiculoUpdateArgs} args - Arguments to update one Veiculo.
     * @example
     * // Update one Veiculo
     * const veiculo = await prisma.veiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VeiculoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoUpdateArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Veiculos.
     * @param {VeiculoDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VeiculoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VeiculoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Veiculo.
     * @param {VeiculoUpsertArgs} args - Arguments to update or create a Veiculo.
     * @example
     * // Update or create a Veiculo
     * const veiculo = await prisma.veiculo.upsert({
     *   create: {
     *     // ... data to create a Veiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculo we want to update
     *   }
     * })
    **/
    upsert<T extends VeiculoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoUpsertArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculo.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends VeiculoCountArgs>(
      args?: Subset<T, VeiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeiculoAggregateArgs>(args: Subset<T, VeiculoAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAggregateType<T>>

    /**
     * Group by Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoGroupByArgs} args - Group by arguments.
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
      T extends VeiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VeiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veiculo model
   */
  readonly fields: VeiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    motorista<T extends MotoristaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MotoristaDefaultArgs<ExtArgs>>): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    movimentacoes<T extends Veiculo$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Veiculo$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Veiculo model
   */ 
  interface VeiculoFieldRefs {
    readonly id: FieldRef<"Veiculo", 'String'>
    readonly placa: FieldRef<"Veiculo", 'String'>
    readonly modelo: FieldRef<"Veiculo", 'String'>
    readonly motoristaId: FieldRef<"Veiculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Veiculo findUnique
   */
  export type VeiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findUniqueOrThrow
   */
  export type VeiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findFirst
   */
  export type VeiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findFirstOrThrow
   */
  export type VeiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findMany
   */
  export type VeiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo create
   */
  export type VeiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Veiculo.
     */
    data: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
  }

  /**
   * Veiculo createMany
   */
  export type VeiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veiculo createManyAndReturn
   */
  export type VeiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veiculo update
   */
  export type VeiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Veiculo.
     */
    data: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
    /**
     * Choose, which Veiculo to update.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo updateMany
   */
  export type VeiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
  }

  /**
   * Veiculo upsert
   */
  export type VeiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Veiculo to update in case it exists.
     */
    where: VeiculoWhereUniqueInput
    /**
     * In case the Veiculo found by the `where` argument doesn't exist, create a new Veiculo with this data.
     */
    create: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
    /**
     * In case the Veiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
  }

  /**
   * Veiculo delete
   */
  export type VeiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter which Veiculo to delete.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo deleteMany
   */
  export type VeiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculos to delete
     */
    where?: VeiculoWhereInput
  }

  /**
   * Veiculo.movimentacoes
   */
  export type Veiculo$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Veiculo without action
   */
  export type VeiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
  }


  /**
   * Model Zona
   */

  export type AggregateZona = {
    _count: ZonaCountAggregateOutputType | null
    _min: ZonaMinAggregateOutputType | null
    _max: ZonaMaxAggregateOutputType | null
  }

  export type ZonaMinAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type ZonaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type ZonaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type ZonaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type ZonaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type ZonaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type ZonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zona to aggregate.
     */
    where?: ZonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zonas to fetch.
     */
    orderBy?: ZonaOrderByWithRelationInput | ZonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zonas
    **/
    _count?: true | ZonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZonaMaxAggregateInputType
  }

  export type GetZonaAggregateType<T extends ZonaAggregateArgs> = {
        [P in keyof T & keyof AggregateZona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZona[P]>
      : GetScalarType<T[P], AggregateZona[P]>
  }




  export type ZonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZonaWhereInput
    orderBy?: ZonaOrderByWithAggregationInput | ZonaOrderByWithAggregationInput[]
    by: ZonaScalarFieldEnum[] | ZonaScalarFieldEnum
    having?: ZonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZonaCountAggregateInputType | true
    _min?: ZonaMinAggregateInputType
    _max?: ZonaMaxAggregateInputType
  }

  export type ZonaGroupByOutputType = {
    id: string
    nome: string
    _count: ZonaCountAggregateOutputType | null
    _min: ZonaMinAggregateOutputType | null
    _max: ZonaMaxAggregateOutputType | null
  }

  type GetZonaGroupByPayload<T extends ZonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZonaGroupByOutputType[P]>
            : GetScalarType<T[P], ZonaGroupByOutputType[P]>
        }
      >
    >


  export type ZonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    contentores?: boolean | Zona$contentoresArgs<ExtArgs>
    _count?: boolean | ZonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zona"]>

  export type ZonaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["zona"]>

  export type ZonaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type ZonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentores?: boolean | Zona$contentoresArgs<ExtArgs>
    _count?: boolean | ZonaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZonaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ZonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zona"
    objects: {
      contentores: Prisma.$ContentorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
    }, ExtArgs["result"]["zona"]>
    composites: {}
  }

  type ZonaGetPayload<S extends boolean | null | undefined | ZonaDefaultArgs> = $Result.GetResult<Prisma.$ZonaPayload, S>

  type ZonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ZonaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ZonaCountAggregateInputType | true
    }

  export interface ZonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zona'], meta: { name: 'Zona' } }
    /**
     * Find zero or one Zona that matches the filter.
     * @param {ZonaFindUniqueArgs} args - Arguments to find a Zona
     * @example
     * // Get one Zona
     * const zona = await prisma.zona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZonaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ZonaFindUniqueArgs<ExtArgs>>
    ): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Zona that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ZonaFindUniqueOrThrowArgs} args - Arguments to find a Zona
     * @example
     * // Get one Zona
     * const zona = await prisma.zona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ZonaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ZonaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Zona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaFindFirstArgs} args - Arguments to find a Zona
     * @example
     * // Get one Zona
     * const zona = await prisma.zona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZonaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ZonaFindFirstArgs<ExtArgs>>
    ): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Zona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaFindFirstOrThrowArgs} args - Arguments to find a Zona
     * @example
     * // Get one Zona
     * const zona = await prisma.zona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ZonaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ZonaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Zonas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zonas
     * const zonas = await prisma.zona.findMany()
     * 
     * // Get first 10 Zonas
     * const zonas = await prisma.zona.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zonaWithIdOnly = await prisma.zona.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ZonaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ZonaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Zona.
     * @param {ZonaCreateArgs} args - Arguments to create a Zona.
     * @example
     * // Create one Zona
     * const Zona = await prisma.zona.create({
     *   data: {
     *     // ... data to create a Zona
     *   }
     * })
     * 
    **/
    create<T extends ZonaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ZonaCreateArgs<ExtArgs>>
    ): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Zonas.
     * @param {ZonaCreateManyArgs} args - Arguments to create many Zonas.
     * @example
     * // Create many Zonas
     * const zona = await prisma.zona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ZonaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ZonaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zonas and returns the data saved in the database.
     * @param {ZonaCreateManyAndReturnArgs} args - Arguments to create many Zonas.
     * @example
     * // Create many Zonas
     * const zona = await prisma.zona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zonas and only return the `id`
     * const zonaWithIdOnly = await prisma.zona.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ZonaCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ZonaCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Zona.
     * @param {ZonaDeleteArgs} args - Arguments to delete one Zona.
     * @example
     * // Delete one Zona
     * const Zona = await prisma.zona.delete({
     *   where: {
     *     // ... filter to delete one Zona
     *   }
     * })
     * 
    **/
    delete<T extends ZonaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ZonaDeleteArgs<ExtArgs>>
    ): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Zona.
     * @param {ZonaUpdateArgs} args - Arguments to update one Zona.
     * @example
     * // Update one Zona
     * const zona = await prisma.zona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZonaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ZonaUpdateArgs<ExtArgs>>
    ): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Zonas.
     * @param {ZonaDeleteManyArgs} args - Arguments to filter Zonas to delete.
     * @example
     * // Delete a few Zonas
     * const { count } = await prisma.zona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZonaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ZonaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zonas
     * const zona = await prisma.zona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZonaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ZonaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Zona.
     * @param {ZonaUpsertArgs} args - Arguments to update or create a Zona.
     * @example
     * // Update or create a Zona
     * const zona = await prisma.zona.upsert({
     *   create: {
     *     // ... data to create a Zona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zona we want to update
     *   }
     * })
    **/
    upsert<T extends ZonaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ZonaUpsertArgs<ExtArgs>>
    ): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Zonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaCountArgs} args - Arguments to filter Zonas to count.
     * @example
     * // Count the number of Zonas
     * const count = await prisma.zona.count({
     *   where: {
     *     // ... the filter for the Zonas we want to count
     *   }
     * })
    **/
    count<T extends ZonaCountArgs>(
      args?: Subset<T, ZonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZonaAggregateArgs>(args: Subset<T, ZonaAggregateArgs>): Prisma.PrismaPromise<GetZonaAggregateType<T>>

    /**
     * Group by Zona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaGroupByArgs} args - Group by arguments.
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
      T extends ZonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZonaGroupByArgs['orderBy'] }
        : { orderBy?: ZonaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zona model
   */
  readonly fields: ZonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contentores<T extends Zona$contentoresArgs<ExtArgs> = {}>(args?: Subset<T, Zona$contentoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Zona model
   */ 
  interface ZonaFieldRefs {
    readonly id: FieldRef<"Zona", 'String'>
    readonly nome: FieldRef<"Zona", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Zona findUnique
   */
  export type ZonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter, which Zona to fetch.
     */
    where: ZonaWhereUniqueInput
  }

  /**
   * Zona findUniqueOrThrow
   */
  export type ZonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter, which Zona to fetch.
     */
    where: ZonaWhereUniqueInput
  }

  /**
   * Zona findFirst
   */
  export type ZonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter, which Zona to fetch.
     */
    where?: ZonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zonas to fetch.
     */
    orderBy?: ZonaOrderByWithRelationInput | ZonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zonas.
     */
    cursor?: ZonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zonas.
     */
    distinct?: ZonaScalarFieldEnum | ZonaScalarFieldEnum[]
  }

  /**
   * Zona findFirstOrThrow
   */
  export type ZonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter, which Zona to fetch.
     */
    where?: ZonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zonas to fetch.
     */
    orderBy?: ZonaOrderByWithRelationInput | ZonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zonas.
     */
    cursor?: ZonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zonas.
     */
    distinct?: ZonaScalarFieldEnum | ZonaScalarFieldEnum[]
  }

  /**
   * Zona findMany
   */
  export type ZonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter, which Zonas to fetch.
     */
    where?: ZonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zonas to fetch.
     */
    orderBy?: ZonaOrderByWithRelationInput | ZonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zonas.
     */
    cursor?: ZonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zonas.
     */
    skip?: number
    distinct?: ZonaScalarFieldEnum | ZonaScalarFieldEnum[]
  }

  /**
   * Zona create
   */
  export type ZonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * The data needed to create a Zona.
     */
    data: XOR<ZonaCreateInput, ZonaUncheckedCreateInput>
  }

  /**
   * Zona createMany
   */
  export type ZonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zonas.
     */
    data: ZonaCreateManyInput | ZonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zona createManyAndReturn
   */
  export type ZonaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Zonas.
     */
    data: ZonaCreateManyInput | ZonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zona update
   */
  export type ZonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * The data needed to update a Zona.
     */
    data: XOR<ZonaUpdateInput, ZonaUncheckedUpdateInput>
    /**
     * Choose, which Zona to update.
     */
    where: ZonaWhereUniqueInput
  }

  /**
   * Zona updateMany
   */
  export type ZonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zonas.
     */
    data: XOR<ZonaUpdateManyMutationInput, ZonaUncheckedUpdateManyInput>
    /**
     * Filter which Zonas to update
     */
    where?: ZonaWhereInput
  }

  /**
   * Zona upsert
   */
  export type ZonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * The filter to search for the Zona to update in case it exists.
     */
    where: ZonaWhereUniqueInput
    /**
     * In case the Zona found by the `where` argument doesn't exist, create a new Zona with this data.
     */
    create: XOR<ZonaCreateInput, ZonaUncheckedCreateInput>
    /**
     * In case the Zona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZonaUpdateInput, ZonaUncheckedUpdateInput>
  }

  /**
   * Zona delete
   */
  export type ZonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter which Zona to delete.
     */
    where: ZonaWhereUniqueInput
  }

  /**
   * Zona deleteMany
   */
  export type ZonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zonas to delete
     */
    where?: ZonaWhereInput
  }

  /**
   * Zona.contentores
   */
  export type Zona$contentoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
    where?: ContentorWhereInput
    orderBy?: ContentorOrderByWithRelationInput | ContentorOrderByWithRelationInput[]
    cursor?: ContentorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentorScalarFieldEnum | ContentorScalarFieldEnum[]
  }

  /**
   * Zona without action
   */
  export type ZonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
  }


  /**
   * Model Contentor
   */

  export type AggregateContentor = {
    _count: ContentorCountAggregateOutputType | null
    _min: ContentorMinAggregateOutputType | null
    _max: ContentorMaxAggregateOutputType | null
  }

  export type ContentorMinAggregateOutputType = {
    id: string | null
    codigo: string | null
    tipo: $Enums.TipoContentor | null
    estado: $Enums.EstadoContentor | null
    zonaId: string | null
  }

  export type ContentorMaxAggregateOutputType = {
    id: string | null
    codigo: string | null
    tipo: $Enums.TipoContentor | null
    estado: $Enums.EstadoContentor | null
    zonaId: string | null
  }

  export type ContentorCountAggregateOutputType = {
    id: number
    codigo: number
    tipo: number
    estado: number
    zonaId: number
    _all: number
  }


  export type ContentorMinAggregateInputType = {
    id?: true
    codigo?: true
    tipo?: true
    estado?: true
    zonaId?: true
  }

  export type ContentorMaxAggregateInputType = {
    id?: true
    codigo?: true
    tipo?: true
    estado?: true
    zonaId?: true
  }

  export type ContentorCountAggregateInputType = {
    id?: true
    codigo?: true
    tipo?: true
    estado?: true
    zonaId?: true
    _all?: true
  }

  export type ContentorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contentor to aggregate.
     */
    where?: ContentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contentors to fetch.
     */
    orderBy?: ContentorOrderByWithRelationInput | ContentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contentors
    **/
    _count?: true | ContentorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentorMaxAggregateInputType
  }

  export type GetContentorAggregateType<T extends ContentorAggregateArgs> = {
        [P in keyof T & keyof AggregateContentor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentor[P]>
      : GetScalarType<T[P], AggregateContentor[P]>
  }




  export type ContentorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentorWhereInput
    orderBy?: ContentorOrderByWithAggregationInput | ContentorOrderByWithAggregationInput[]
    by: ContentorScalarFieldEnum[] | ContentorScalarFieldEnum
    having?: ContentorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentorCountAggregateInputType | true
    _min?: ContentorMinAggregateInputType
    _max?: ContentorMaxAggregateInputType
  }

  export type ContentorGroupByOutputType = {
    id: string
    codigo: string
    tipo: $Enums.TipoContentor
    estado: $Enums.EstadoContentor
    zonaId: string | null
    _count: ContentorCountAggregateOutputType | null
    _min: ContentorMinAggregateOutputType | null
    _max: ContentorMaxAggregateOutputType | null
  }

  type GetContentorGroupByPayload<T extends ContentorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentorGroupByOutputType[P]>
            : GetScalarType<T[P], ContentorGroupByOutputType[P]>
        }
      >
    >


  export type ContentorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    tipo?: boolean
    estado?: boolean
    zonaId?: boolean
    zona?: boolean | Contentor$zonaArgs<ExtArgs>
    movimentacoes?: boolean | Contentor$movimentacoesArgs<ExtArgs>
    _count?: boolean | ContentorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentor"]>

  export type ContentorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    tipo?: boolean
    estado?: boolean
    zonaId?: boolean
    zona?: boolean | Contentor$zonaArgs<ExtArgs>
  }, ExtArgs["result"]["contentor"]>

  export type ContentorSelectScalar = {
    id?: boolean
    codigo?: boolean
    tipo?: boolean
    estado?: boolean
    zonaId?: boolean
  }

  export type ContentorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zona?: boolean | Contentor$zonaArgs<ExtArgs>
    movimentacoes?: boolean | Contentor$movimentacoesArgs<ExtArgs>
    _count?: boolean | ContentorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zona?: boolean | Contentor$zonaArgs<ExtArgs>
  }

  export type $ContentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contentor"
    objects: {
      zona: Prisma.$ZonaPayload<ExtArgs> | null
      movimentacoes: Prisma.$MovimentacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo: string
      tipo: $Enums.TipoContentor
      estado: $Enums.EstadoContentor
      zonaId: string | null
    }, ExtArgs["result"]["contentor"]>
    composites: {}
  }

  type ContentorGetPayload<S extends boolean | null | undefined | ContentorDefaultArgs> = $Result.GetResult<Prisma.$ContentorPayload, S>

  type ContentorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContentorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContentorCountAggregateInputType | true
    }

  export interface ContentorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contentor'], meta: { name: 'Contentor' } }
    /**
     * Find zero or one Contentor that matches the filter.
     * @param {ContentorFindUniqueArgs} args - Arguments to find a Contentor
     * @example
     * // Get one Contentor
     * const contentor = await prisma.contentor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContentorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContentorFindUniqueArgs<ExtArgs>>
    ): Prisma__ContentorClient<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contentor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContentorFindUniqueOrThrowArgs} args - Arguments to find a Contentor
     * @example
     * // Get one Contentor
     * const contentor = await prisma.contentor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContentorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContentorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContentorClient<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contentor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentorFindFirstArgs} args - Arguments to find a Contentor
     * @example
     * // Get one Contentor
     * const contentor = await prisma.contentor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContentorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContentorFindFirstArgs<ExtArgs>>
    ): Prisma__ContentorClient<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contentor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentorFindFirstOrThrowArgs} args - Arguments to find a Contentor
     * @example
     * // Get one Contentor
     * const contentor = await prisma.contentor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContentorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContentorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContentorClient<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contentors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contentors
     * const contentors = await prisma.contentor.findMany()
     * 
     * // Get first 10 Contentors
     * const contentors = await prisma.contentor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentorWithIdOnly = await prisma.contentor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContentorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContentorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contentor.
     * @param {ContentorCreateArgs} args - Arguments to create a Contentor.
     * @example
     * // Create one Contentor
     * const Contentor = await prisma.contentor.create({
     *   data: {
     *     // ... data to create a Contentor
     *   }
     * })
     * 
    **/
    create<T extends ContentorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContentorCreateArgs<ExtArgs>>
    ): Prisma__ContentorClient<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contentors.
     * @param {ContentorCreateManyArgs} args - Arguments to create many Contentors.
     * @example
     * // Create many Contentors
     * const contentor = await prisma.contentor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ContentorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContentorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contentors and returns the data saved in the database.
     * @param {ContentorCreateManyAndReturnArgs} args - Arguments to create many Contentors.
     * @example
     * // Create many Contentors
     * const contentor = await prisma.contentor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contentors and only return the `id`
     * const contentorWithIdOnly = await prisma.contentor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ContentorCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ContentorCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Contentor.
     * @param {ContentorDeleteArgs} args - Arguments to delete one Contentor.
     * @example
     * // Delete one Contentor
     * const Contentor = await prisma.contentor.delete({
     *   where: {
     *     // ... filter to delete one Contentor
     *   }
     * })
     * 
    **/
    delete<T extends ContentorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContentorDeleteArgs<ExtArgs>>
    ): Prisma__ContentorClient<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contentor.
     * @param {ContentorUpdateArgs} args - Arguments to update one Contentor.
     * @example
     * // Update one Contentor
     * const contentor = await prisma.contentor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContentorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContentorUpdateArgs<ExtArgs>>
    ): Prisma__ContentorClient<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contentors.
     * @param {ContentorDeleteManyArgs} args - Arguments to filter Contentors to delete.
     * @example
     * // Delete a few Contentors
     * const { count } = await prisma.contentor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContentorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContentorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contentors
     * const contentor = await prisma.contentor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContentorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContentorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contentor.
     * @param {ContentorUpsertArgs} args - Arguments to update or create a Contentor.
     * @example
     * // Update or create a Contentor
     * const contentor = await prisma.contentor.upsert({
     *   create: {
     *     // ... data to create a Contentor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contentor we want to update
     *   }
     * })
    **/
    upsert<T extends ContentorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContentorUpsertArgs<ExtArgs>>
    ): Prisma__ContentorClient<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentorCountArgs} args - Arguments to filter Contentors to count.
     * @example
     * // Count the number of Contentors
     * const count = await prisma.contentor.count({
     *   where: {
     *     // ... the filter for the Contentors we want to count
     *   }
     * })
    **/
    count<T extends ContentorCountArgs>(
      args?: Subset<T, ContentorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentorAggregateArgs>(args: Subset<T, ContentorAggregateArgs>): Prisma.PrismaPromise<GetContentorAggregateType<T>>

    /**
     * Group by Contentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentorGroupByArgs} args - Group by arguments.
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
      T extends ContentorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentorGroupByArgs['orderBy'] }
        : { orderBy?: ContentorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contentor model
   */
  readonly fields: ContentorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contentor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    zona<T extends Contentor$zonaArgs<ExtArgs> = {}>(args?: Subset<T, Contentor$zonaArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    movimentacoes<T extends Contentor$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Contentor$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contentor model
   */ 
  interface ContentorFieldRefs {
    readonly id: FieldRef<"Contentor", 'String'>
    readonly codigo: FieldRef<"Contentor", 'String'>
    readonly tipo: FieldRef<"Contentor", 'TipoContentor'>
    readonly estado: FieldRef<"Contentor", 'EstadoContentor'>
    readonly zonaId: FieldRef<"Contentor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contentor findUnique
   */
  export type ContentorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
    /**
     * Filter, which Contentor to fetch.
     */
    where: ContentorWhereUniqueInput
  }

  /**
   * Contentor findUniqueOrThrow
   */
  export type ContentorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
    /**
     * Filter, which Contentor to fetch.
     */
    where: ContentorWhereUniqueInput
  }

  /**
   * Contentor findFirst
   */
  export type ContentorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
    /**
     * Filter, which Contentor to fetch.
     */
    where?: ContentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contentors to fetch.
     */
    orderBy?: ContentorOrderByWithRelationInput | ContentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contentors.
     */
    cursor?: ContentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contentors.
     */
    distinct?: ContentorScalarFieldEnum | ContentorScalarFieldEnum[]
  }

  /**
   * Contentor findFirstOrThrow
   */
  export type ContentorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
    /**
     * Filter, which Contentor to fetch.
     */
    where?: ContentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contentors to fetch.
     */
    orderBy?: ContentorOrderByWithRelationInput | ContentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contentors.
     */
    cursor?: ContentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contentors.
     */
    distinct?: ContentorScalarFieldEnum | ContentorScalarFieldEnum[]
  }

  /**
   * Contentor findMany
   */
  export type ContentorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
    /**
     * Filter, which Contentors to fetch.
     */
    where?: ContentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contentors to fetch.
     */
    orderBy?: ContentorOrderByWithRelationInput | ContentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contentors.
     */
    cursor?: ContentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contentors.
     */
    skip?: number
    distinct?: ContentorScalarFieldEnum | ContentorScalarFieldEnum[]
  }

  /**
   * Contentor create
   */
  export type ContentorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
    /**
     * The data needed to create a Contentor.
     */
    data: XOR<ContentorCreateInput, ContentorUncheckedCreateInput>
  }

  /**
   * Contentor createMany
   */
  export type ContentorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contentors.
     */
    data: ContentorCreateManyInput | ContentorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contentor createManyAndReturn
   */
  export type ContentorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Contentors.
     */
    data: ContentorCreateManyInput | ContentorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contentor update
   */
  export type ContentorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
    /**
     * The data needed to update a Contentor.
     */
    data: XOR<ContentorUpdateInput, ContentorUncheckedUpdateInput>
    /**
     * Choose, which Contentor to update.
     */
    where: ContentorWhereUniqueInput
  }

  /**
   * Contentor updateMany
   */
  export type ContentorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contentors.
     */
    data: XOR<ContentorUpdateManyMutationInput, ContentorUncheckedUpdateManyInput>
    /**
     * Filter which Contentors to update
     */
    where?: ContentorWhereInput
  }

  /**
   * Contentor upsert
   */
  export type ContentorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
    /**
     * The filter to search for the Contentor to update in case it exists.
     */
    where: ContentorWhereUniqueInput
    /**
     * In case the Contentor found by the `where` argument doesn't exist, create a new Contentor with this data.
     */
    create: XOR<ContentorCreateInput, ContentorUncheckedCreateInput>
    /**
     * In case the Contentor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentorUpdateInput, ContentorUncheckedUpdateInput>
  }

  /**
   * Contentor delete
   */
  export type ContentorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
    /**
     * Filter which Contentor to delete.
     */
    where: ContentorWhereUniqueInput
  }

  /**
   * Contentor deleteMany
   */
  export type ContentorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contentors to delete
     */
    where?: ContentorWhereInput
  }

  /**
   * Contentor.zona
   */
  export type Contentor$zonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    where?: ZonaWhereInput
  }

  /**
   * Contentor.movimentacoes
   */
  export type Contentor$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Contentor without action
   */
  export type ContentorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contentor
     */
    select?: ContentorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentorInclude<ExtArgs> | null
  }


  /**
   * Model Movimentacao
   */

  export type AggregateMovimentacao = {
    _count: MovimentacaoCountAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  export type MovimentacaoMinAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoMovimentacao | null
    contentorId: string | null
    veiculoId: string | null
    dataHora: Date | null
  }

  export type MovimentacaoMaxAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoMovimentacao | null
    contentorId: string | null
    veiculoId: string | null
    dataHora: Date | null
  }

  export type MovimentacaoCountAggregateOutputType = {
    id: number
    tipo: number
    contentorId: number
    veiculoId: number
    dataHora: number
    _all: number
  }


  export type MovimentacaoMinAggregateInputType = {
    id?: true
    tipo?: true
    contentorId?: true
    veiculoId?: true
    dataHora?: true
  }

  export type MovimentacaoMaxAggregateInputType = {
    id?: true
    tipo?: true
    contentorId?: true
    veiculoId?: true
    dataHora?: true
  }

  export type MovimentacaoCountAggregateInputType = {
    id?: true
    tipo?: true
    contentorId?: true
    veiculoId?: true
    dataHora?: true
    _all?: true
  }

  export type MovimentacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacao to aggregate.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movimentacaos
    **/
    _count?: true | MovimentacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type GetMovimentacaoAggregateType<T extends MovimentacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacao[P]>
      : GetScalarType<T[P], AggregateMovimentacao[P]>
  }




  export type MovimentacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithAggregationInput | MovimentacaoOrderByWithAggregationInput[]
    by: MovimentacaoScalarFieldEnum[] | MovimentacaoScalarFieldEnum
    having?: MovimentacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacaoCountAggregateInputType | true
    _min?: MovimentacaoMinAggregateInputType
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type MovimentacaoGroupByOutputType = {
    id: string
    tipo: $Enums.TipoMovimentacao
    contentorId: string
    veiculoId: string
    dataHora: Date
    _count: MovimentacaoCountAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  type GetMovimentacaoGroupByPayload<T extends MovimentacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
        }
      >
    >


  export type MovimentacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    contentorId?: boolean
    veiculoId?: boolean
    dataHora?: boolean
    contentor?: boolean | ContentorDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    contentorId?: boolean
    veiculoId?: boolean
    dataHora?: boolean
    contentor?: boolean | ContentorDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectScalar = {
    id?: boolean
    tipo?: boolean
    contentorId?: boolean
    veiculoId?: boolean
    dataHora?: boolean
  }

  export type MovimentacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentor?: boolean | ContentorDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }
  export type MovimentacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentor?: boolean | ContentorDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }

  export type $MovimentacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movimentacao"
    objects: {
      contentor: Prisma.$ContentorPayload<ExtArgs>
      veiculo: Prisma.$VeiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: $Enums.TipoMovimentacao
      contentorId: string
      veiculoId: string
      dataHora: Date
    }, ExtArgs["result"]["movimentacao"]>
    composites: {}
  }

  type MovimentacaoGetPayload<S extends boolean | null | undefined | MovimentacaoDefaultArgs> = $Result.GetResult<Prisma.$MovimentacaoPayload, S>

  type MovimentacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovimentacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovimentacaoCountAggregateInputType | true
    }

  export interface MovimentacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movimentacao'], meta: { name: 'Movimentacao' } }
    /**
     * Find zero or one Movimentacao that matches the filter.
     * @param {MovimentacaoFindUniqueArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovimentacaoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MovimentacaoFindUniqueArgs<ExtArgs>>
    ): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Movimentacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MovimentacaoFindUniqueOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovimentacaoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovimentacaoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Movimentacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovimentacaoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MovimentacaoFindFirstArgs<ExtArgs>>
    ): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Movimentacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovimentacaoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovimentacaoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Movimentacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany()
     * 
     * // Get first 10 Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovimentacaoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovimentacaoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Movimentacao.
     * @param {MovimentacaoCreateArgs} args - Arguments to create a Movimentacao.
     * @example
     * // Create one Movimentacao
     * const Movimentacao = await prisma.movimentacao.create({
     *   data: {
     *     // ... data to create a Movimentacao
     *   }
     * })
     * 
    **/
    create<T extends MovimentacaoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MovimentacaoCreateArgs<ExtArgs>>
    ): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Movimentacaos.
     * @param {MovimentacaoCreateManyArgs} args - Arguments to create many Movimentacaos.
     * @example
     * // Create many Movimentacaos
     * const movimentacao = await prisma.movimentacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends MovimentacaoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovimentacaoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movimentacaos and returns the data saved in the database.
     * @param {MovimentacaoCreateManyAndReturnArgs} args - Arguments to create many Movimentacaos.
     * @example
     * // Create many Movimentacaos
     * const movimentacao = await prisma.movimentacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movimentacaos and only return the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends MovimentacaoCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MovimentacaoCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Movimentacao.
     * @param {MovimentacaoDeleteArgs} args - Arguments to delete one Movimentacao.
     * @example
     * // Delete one Movimentacao
     * const Movimentacao = await prisma.movimentacao.delete({
     *   where: {
     *     // ... filter to delete one Movimentacao
     *   }
     * })
     * 
    **/
    delete<T extends MovimentacaoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MovimentacaoDeleteArgs<ExtArgs>>
    ): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Movimentacao.
     * @param {MovimentacaoUpdateArgs} args - Arguments to update one Movimentacao.
     * @example
     * // Update one Movimentacao
     * const movimentacao = await prisma.movimentacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovimentacaoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MovimentacaoUpdateArgs<ExtArgs>>
    ): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Movimentacaos.
     * @param {MovimentacaoDeleteManyArgs} args - Arguments to filter Movimentacaos to delete.
     * @example
     * // Delete a few Movimentacaos
     * const { count } = await prisma.movimentacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovimentacaoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovimentacaoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimentacaos
     * const movimentacao = await prisma.movimentacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovimentacaoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MovimentacaoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movimentacao.
     * @param {MovimentacaoUpsertArgs} args - Arguments to update or create a Movimentacao.
     * @example
     * // Update or create a Movimentacao
     * const movimentacao = await prisma.movimentacao.upsert({
     *   create: {
     *     // ... data to create a Movimentacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimentacao we want to update
     *   }
     * })
    **/
    upsert<T extends MovimentacaoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MovimentacaoUpsertArgs<ExtArgs>>
    ): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCountArgs} args - Arguments to filter Movimentacaos to count.
     * @example
     * // Count the number of Movimentacaos
     * const count = await prisma.movimentacao.count({
     *   where: {
     *     // ... the filter for the Movimentacaos we want to count
     *   }
     * })
    **/
    count<T extends MovimentacaoCountArgs>(
      args?: Subset<T, MovimentacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimentacaoAggregateArgs>(args: Subset<T, MovimentacaoAggregateArgs>): Prisma.PrismaPromise<GetMovimentacaoAggregateType<T>>

    /**
     * Group by Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoGroupByArgs} args - Group by arguments.
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
      T extends MovimentacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentacaoGroupByArgs['orderBy'] }
        : { orderBy?: MovimentacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovimentacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movimentacao model
   */
  readonly fields: MovimentacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movimentacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contentor<T extends ContentorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentorDefaultArgs<ExtArgs>>): Prisma__ContentorClient<$Result.GetResult<Prisma.$ContentorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    veiculo<T extends VeiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeiculoDefaultArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Movimentacao model
   */ 
  interface MovimentacaoFieldRefs {
    readonly id: FieldRef<"Movimentacao", 'String'>
    readonly tipo: FieldRef<"Movimentacao", 'TipoMovimentacao'>
    readonly contentorId: FieldRef<"Movimentacao", 'String'>
    readonly veiculoId: FieldRef<"Movimentacao", 'String'>
    readonly dataHora: FieldRef<"Movimentacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movimentacao findUnique
   */
  export type MovimentacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findUniqueOrThrow
   */
  export type MovimentacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findFirst
   */
  export type MovimentacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findFirstOrThrow
   */
  export type MovimentacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findMany
   */
  export type MovimentacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacaos to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao create
   */
  export type MovimentacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Movimentacao.
     */
    data: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
  }

  /**
   * Movimentacao createMany
   */
  export type MovimentacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movimentacaos.
     */
    data: MovimentacaoCreateManyInput | MovimentacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movimentacao createManyAndReturn
   */
  export type MovimentacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Movimentacaos.
     */
    data: MovimentacaoCreateManyInput | MovimentacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movimentacao update
   */
  export type MovimentacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Movimentacao.
     */
    data: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
    /**
     * Choose, which Movimentacao to update.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao updateMany
   */
  export type MovimentacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movimentacaos.
     */
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyInput>
    /**
     * Filter which Movimentacaos to update
     */
    where?: MovimentacaoWhereInput
  }

  /**
   * Movimentacao upsert
   */
  export type MovimentacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Movimentacao to update in case it exists.
     */
    where: MovimentacaoWhereUniqueInput
    /**
     * In case the Movimentacao found by the `where` argument doesn't exist, create a new Movimentacao with this data.
     */
    create: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
    /**
     * In case the Movimentacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
  }

  /**
   * Movimentacao delete
   */
  export type MovimentacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter which Movimentacao to delete.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao deleteMany
   */
  export type MovimentacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacaos to delete
     */
    where?: MovimentacaoWhereInput
  }

  /**
   * Movimentacao without action
   */
  export type MovimentacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MotoristaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    documento: 'documento',
    telefone: 'telefone'
  };

  export type MotoristaScalarFieldEnum = (typeof MotoristaScalarFieldEnum)[keyof typeof MotoristaScalarFieldEnum]


  export const VeiculoScalarFieldEnum: {
    id: 'id',
    placa: 'placa',
    modelo: 'modelo',
    motoristaId: 'motoristaId'
  };

  export type VeiculoScalarFieldEnum = (typeof VeiculoScalarFieldEnum)[keyof typeof VeiculoScalarFieldEnum]


  export const ZonaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type ZonaScalarFieldEnum = (typeof ZonaScalarFieldEnum)[keyof typeof ZonaScalarFieldEnum]


  export const ContentorScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    tipo: 'tipo',
    estado: 'estado',
    zonaId: 'zonaId'
  };

  export type ContentorScalarFieldEnum = (typeof ContentorScalarFieldEnum)[keyof typeof ContentorScalarFieldEnum]


  export const MovimentacaoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    contentorId: 'contentorId',
    veiculoId: 'veiculoId',
    dataHora: 'dataHora'
  };

  export type MovimentacaoScalarFieldEnum = (typeof MovimentacaoScalarFieldEnum)[keyof typeof MovimentacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoContentor'
   */
  export type EnumTipoContentorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoContentor'>
    


  /**
   * Reference to a field of type 'TipoContentor[]'
   */
  export type ListEnumTipoContentorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoContentor[]'>
    


  /**
   * Reference to a field of type 'EstadoContentor'
   */
  export type EnumEstadoContentorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoContentor'>
    


  /**
   * Reference to a field of type 'EstadoContentor[]'
   */
  export type ListEnumEstadoContentorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoContentor[]'>
    


  /**
   * Reference to a field of type 'TipoMovimentacao'
   */
  export type EnumTipoMovimentacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimentacao'>
    


  /**
   * Reference to a field of type 'TipoMovimentacao[]'
   */
  export type ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimentacao[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
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
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MotoristaWhereInput = {
    AND?: MotoristaWhereInput | MotoristaWhereInput[]
    OR?: MotoristaWhereInput[]
    NOT?: MotoristaWhereInput | MotoristaWhereInput[]
    id?: StringFilter<"Motorista"> | string
    nome?: StringFilter<"Motorista"> | string
    documento?: StringFilter<"Motorista"> | string
    telefone?: StringNullableFilter<"Motorista"> | string | null
    veiculos?: VeiculoListRelationFilter
  }

  export type MotoristaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    documento?: SortOrder
    telefone?: SortOrderInput | SortOrder
    veiculos?: VeiculoOrderByRelationAggregateInput
  }

  export type MotoristaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documento?: string
    AND?: MotoristaWhereInput | MotoristaWhereInput[]
    OR?: MotoristaWhereInput[]
    NOT?: MotoristaWhereInput | MotoristaWhereInput[]
    nome?: StringFilter<"Motorista"> | string
    telefone?: StringNullableFilter<"Motorista"> | string | null
    veiculos?: VeiculoListRelationFilter
  }, "id" | "documento">

  export type MotoristaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    documento?: SortOrder
    telefone?: SortOrderInput | SortOrder
    _count?: MotoristaCountOrderByAggregateInput
    _max?: MotoristaMaxOrderByAggregateInput
    _min?: MotoristaMinOrderByAggregateInput
  }

  export type MotoristaScalarWhereWithAggregatesInput = {
    AND?: MotoristaScalarWhereWithAggregatesInput | MotoristaScalarWhereWithAggregatesInput[]
    OR?: MotoristaScalarWhereWithAggregatesInput[]
    NOT?: MotoristaScalarWhereWithAggregatesInput | MotoristaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Motorista"> | string
    nome?: StringWithAggregatesFilter<"Motorista"> | string
    documento?: StringWithAggregatesFilter<"Motorista"> | string
    telefone?: StringNullableWithAggregatesFilter<"Motorista"> | string | null
  }

  export type VeiculoWhereInput = {
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    id?: StringFilter<"Veiculo"> | string
    placa?: StringFilter<"Veiculo"> | string
    modelo?: StringNullableFilter<"Veiculo"> | string | null
    motoristaId?: StringFilter<"Veiculo"> | string
    motorista?: XOR<MotoristaRelationFilter, MotoristaWhereInput>
    movimentacoes?: MovimentacaoListRelationFilter
  }

  export type VeiculoOrderByWithRelationInput = {
    id?: SortOrder
    placa?: SortOrder
    modelo?: SortOrderInput | SortOrder
    motoristaId?: SortOrder
    motorista?: MotoristaOrderByWithRelationInput
    movimentacoes?: MovimentacaoOrderByRelationAggregateInput
  }

  export type VeiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    placa?: string
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    modelo?: StringNullableFilter<"Veiculo"> | string | null
    motoristaId?: StringFilter<"Veiculo"> | string
    motorista?: XOR<MotoristaRelationFilter, MotoristaWhereInput>
    movimentacoes?: MovimentacaoListRelationFilter
  }, "id" | "placa">

  export type VeiculoOrderByWithAggregationInput = {
    id?: SortOrder
    placa?: SortOrder
    modelo?: SortOrderInput | SortOrder
    motoristaId?: SortOrder
    _count?: VeiculoCountOrderByAggregateInput
    _max?: VeiculoMaxOrderByAggregateInput
    _min?: VeiculoMinOrderByAggregateInput
  }

  export type VeiculoScalarWhereWithAggregatesInput = {
    AND?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    OR?: VeiculoScalarWhereWithAggregatesInput[]
    NOT?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Veiculo"> | string
    placa?: StringWithAggregatesFilter<"Veiculo"> | string
    modelo?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    motoristaId?: StringWithAggregatesFilter<"Veiculo"> | string
  }

  export type ZonaWhereInput = {
    AND?: ZonaWhereInput | ZonaWhereInput[]
    OR?: ZonaWhereInput[]
    NOT?: ZonaWhereInput | ZonaWhereInput[]
    id?: StringFilter<"Zona"> | string
    nome?: StringFilter<"Zona"> | string
    contentores?: ContentorListRelationFilter
  }

  export type ZonaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    contentores?: ContentorOrderByRelationAggregateInput
  }

  export type ZonaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: ZonaWhereInput | ZonaWhereInput[]
    OR?: ZonaWhereInput[]
    NOT?: ZonaWhereInput | ZonaWhereInput[]
    contentores?: ContentorListRelationFilter
  }, "id" | "nome">

  export type ZonaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: ZonaCountOrderByAggregateInput
    _max?: ZonaMaxOrderByAggregateInput
    _min?: ZonaMinOrderByAggregateInput
  }

  export type ZonaScalarWhereWithAggregatesInput = {
    AND?: ZonaScalarWhereWithAggregatesInput | ZonaScalarWhereWithAggregatesInput[]
    OR?: ZonaScalarWhereWithAggregatesInput[]
    NOT?: ZonaScalarWhereWithAggregatesInput | ZonaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zona"> | string
    nome?: StringWithAggregatesFilter<"Zona"> | string
  }

  export type ContentorWhereInput = {
    AND?: ContentorWhereInput | ContentorWhereInput[]
    OR?: ContentorWhereInput[]
    NOT?: ContentorWhereInput | ContentorWhereInput[]
    id?: StringFilter<"Contentor"> | string
    codigo?: StringFilter<"Contentor"> | string
    tipo?: EnumTipoContentorFilter<"Contentor"> | $Enums.TipoContentor
    estado?: EnumEstadoContentorFilter<"Contentor"> | $Enums.EstadoContentor
    zonaId?: StringNullableFilter<"Contentor"> | string | null
    zona?: XOR<ZonaNullableRelationFilter, ZonaWhereInput> | null
    movimentacoes?: MovimentacaoListRelationFilter
  }

  export type ContentorOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    zonaId?: SortOrderInput | SortOrder
    zona?: ZonaOrderByWithRelationInput
    movimentacoes?: MovimentacaoOrderByRelationAggregateInput
  }

  export type ContentorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: ContentorWhereInput | ContentorWhereInput[]
    OR?: ContentorWhereInput[]
    NOT?: ContentorWhereInput | ContentorWhereInput[]
    tipo?: EnumTipoContentorFilter<"Contentor"> | $Enums.TipoContentor
    estado?: EnumEstadoContentorFilter<"Contentor"> | $Enums.EstadoContentor
    zonaId?: StringNullableFilter<"Contentor"> | string | null
    zona?: XOR<ZonaNullableRelationFilter, ZonaWhereInput> | null
    movimentacoes?: MovimentacaoListRelationFilter
  }, "id" | "codigo">

  export type ContentorOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    zonaId?: SortOrderInput | SortOrder
    _count?: ContentorCountOrderByAggregateInput
    _max?: ContentorMaxOrderByAggregateInput
    _min?: ContentorMinOrderByAggregateInput
  }

  export type ContentorScalarWhereWithAggregatesInput = {
    AND?: ContentorScalarWhereWithAggregatesInput | ContentorScalarWhereWithAggregatesInput[]
    OR?: ContentorScalarWhereWithAggregatesInput[]
    NOT?: ContentorScalarWhereWithAggregatesInput | ContentorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contentor"> | string
    codigo?: StringWithAggregatesFilter<"Contentor"> | string
    tipo?: EnumTipoContentorWithAggregatesFilter<"Contentor"> | $Enums.TipoContentor
    estado?: EnumEstadoContentorWithAggregatesFilter<"Contentor"> | $Enums.EstadoContentor
    zonaId?: StringNullableWithAggregatesFilter<"Contentor"> | string | null
  }

  export type MovimentacaoWhereInput = {
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    id?: StringFilter<"Movimentacao"> | string
    tipo?: EnumTipoMovimentacaoFilter<"Movimentacao"> | $Enums.TipoMovimentacao
    contentorId?: StringFilter<"Movimentacao"> | string
    veiculoId?: StringFilter<"Movimentacao"> | string
    dataHora?: DateTimeFilter<"Movimentacao"> | Date | string
    contentor?: XOR<ContentorRelationFilter, ContentorWhereInput>
    veiculo?: XOR<VeiculoRelationFilter, VeiculoWhereInput>
  }

  export type MovimentacaoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    contentorId?: SortOrder
    veiculoId?: SortOrder
    dataHora?: SortOrder
    contentor?: ContentorOrderByWithRelationInput
    veiculo?: VeiculoOrderByWithRelationInput
  }

  export type MovimentacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    tipo?: EnumTipoMovimentacaoFilter<"Movimentacao"> | $Enums.TipoMovimentacao
    contentorId?: StringFilter<"Movimentacao"> | string
    veiculoId?: StringFilter<"Movimentacao"> | string
    dataHora?: DateTimeFilter<"Movimentacao"> | Date | string
    contentor?: XOR<ContentorRelationFilter, ContentorWhereInput>
    veiculo?: XOR<VeiculoRelationFilter, VeiculoWhereInput>
  }, "id">

  export type MovimentacaoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    contentorId?: SortOrder
    veiculoId?: SortOrder
    dataHora?: SortOrder
    _count?: MovimentacaoCountOrderByAggregateInput
    _max?: MovimentacaoMaxOrderByAggregateInput
    _min?: MovimentacaoMinOrderByAggregateInput
  }

  export type MovimentacaoScalarWhereWithAggregatesInput = {
    AND?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    OR?: MovimentacaoScalarWhereWithAggregatesInput[]
    NOT?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movimentacao"> | string
    tipo?: EnumTipoMovimentacaoWithAggregatesFilter<"Movimentacao"> | $Enums.TipoMovimentacao
    contentorId?: StringWithAggregatesFilter<"Movimentacao"> | string
    veiculoId?: StringWithAggregatesFilter<"Movimentacao"> | string
    dataHora?: DateTimeWithAggregatesFilter<"Movimentacao"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotoristaCreateInput = {
    id?: string
    nome: string
    documento: string
    telefone?: string | null
    veiculos?: VeiculoCreateNestedManyWithoutMotoristaInput
  }

  export type MotoristaUncheckedCreateInput = {
    id?: string
    nome: string
    documento: string
    telefone?: string | null
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutMotoristaInput
  }

  export type MotoristaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    veiculos?: VeiculoUpdateManyWithoutMotoristaNestedInput
  }

  export type MotoristaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    veiculos?: VeiculoUncheckedUpdateManyWithoutMotoristaNestedInput
  }

  export type MotoristaCreateManyInput = {
    id?: string
    nome: string
    documento: string
    telefone?: string | null
  }

  export type MotoristaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MotoristaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoCreateInput = {
    id?: string
    placa: string
    modelo?: string | null
    motorista: MotoristaCreateNestedOneWithoutVeiculosInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateInput = {
    id?: string
    placa: string
    modelo?: string | null
    motoristaId: string
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    motorista?: MotoristaUpdateOneRequiredWithoutVeiculosNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    motoristaId?: StringFieldUpdateOperationsInput | string
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoCreateManyInput = {
    id?: string
    placa: string
    modelo?: string | null
    motoristaId: string
  }

  export type VeiculoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    motoristaId?: StringFieldUpdateOperationsInput | string
  }

  export type ZonaCreateInput = {
    id?: string
    nome: string
    contentores?: ContentorCreateNestedManyWithoutZonaInput
  }

  export type ZonaUncheckedCreateInput = {
    id?: string
    nome: string
    contentores?: ContentorUncheckedCreateNestedManyWithoutZonaInput
  }

  export type ZonaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contentores?: ContentorUpdateManyWithoutZonaNestedInput
  }

  export type ZonaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contentores?: ContentorUncheckedUpdateManyWithoutZonaNestedInput
  }

  export type ZonaCreateManyInput = {
    id?: string
    nome: string
  }

  export type ZonaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ZonaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ContentorCreateInput = {
    id?: string
    codigo: string
    tipo: $Enums.TipoContentor
    estado: $Enums.EstadoContentor
    zona?: ZonaCreateNestedOneWithoutContentoresInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutContentorInput
  }

  export type ContentorUncheckedCreateInput = {
    id?: string
    codigo: string
    tipo: $Enums.TipoContentor
    estado: $Enums.EstadoContentor
    zonaId?: string | null
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutContentorInput
  }

  export type ContentorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContentorFieldUpdateOperationsInput | $Enums.TipoContentor
    estado?: EnumEstadoContentorFieldUpdateOperationsInput | $Enums.EstadoContentor
    zona?: ZonaUpdateOneWithoutContentoresNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutContentorNestedInput
  }

  export type ContentorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContentorFieldUpdateOperationsInput | $Enums.TipoContentor
    estado?: EnumEstadoContentorFieldUpdateOperationsInput | $Enums.EstadoContentor
    zonaId?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutContentorNestedInput
  }

  export type ContentorCreateManyInput = {
    id?: string
    codigo: string
    tipo: $Enums.TipoContentor
    estado: $Enums.EstadoContentor
    zonaId?: string | null
  }

  export type ContentorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContentorFieldUpdateOperationsInput | $Enums.TipoContentor
    estado?: EnumEstadoContentorFieldUpdateOperationsInput | $Enums.EstadoContentor
  }

  export type ContentorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContentorFieldUpdateOperationsInput | $Enums.TipoContentor
    estado?: EnumEstadoContentorFieldUpdateOperationsInput | $Enums.EstadoContentor
    zonaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoCreateInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    dataHora?: Date | string
    contentor: ContentorCreateNestedOneWithoutMovimentacoesInput
    veiculo: VeiculoCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    contentorId: string
    veiculoId: string
    dataHora?: Date | string
  }

  export type MovimentacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    contentor?: ContentorUpdateOneRequiredWithoutMovimentacoesNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    contentorId?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoCreateManyInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    contentorId: string
    veiculoId: string
    dataHora?: Date | string
  }

  export type MovimentacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    contentorId?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VeiculoListRelationFilter = {
    every?: VeiculoWhereInput
    some?: VeiculoWhereInput
    none?: VeiculoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VeiculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MotoristaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    documento?: SortOrder
    telefone?: SortOrder
  }

  export type MotoristaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    documento?: SortOrder
    telefone?: SortOrder
  }

  export type MotoristaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    documento?: SortOrder
    telefone?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MotoristaRelationFilter = {
    is?: MotoristaWhereInput
    isNot?: MotoristaWhereInput
  }

  export type MovimentacaoListRelationFilter = {
    every?: MovimentacaoWhereInput
    some?: MovimentacaoWhereInput
    none?: MovimentacaoWhereInput
  }

  export type MovimentacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoCountOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    modelo?: SortOrder
    motoristaId?: SortOrder
  }

  export type VeiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    modelo?: SortOrder
    motoristaId?: SortOrder
  }

  export type VeiculoMinOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    modelo?: SortOrder
    motoristaId?: SortOrder
  }

  export type ContentorListRelationFilter = {
    every?: ContentorWhereInput
    some?: ContentorWhereInput
    none?: ContentorWhereInput
  }

  export type ContentorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZonaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type ZonaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type ZonaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type EnumTipoContentorFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoContentor | EnumTipoContentorFieldRefInput<$PrismaModel>
    in?: $Enums.TipoContentor[] | ListEnumTipoContentorFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoContentor[] | ListEnumTipoContentorFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoContentorFilter<$PrismaModel> | $Enums.TipoContentor
  }

  export type EnumEstadoContentorFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoContentor | EnumEstadoContentorFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoContentor[] | ListEnumEstadoContentorFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoContentor[] | ListEnumEstadoContentorFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoContentorFilter<$PrismaModel> | $Enums.EstadoContentor
  }

  export type ZonaNullableRelationFilter = {
    is?: ZonaWhereInput | null
    isNot?: ZonaWhereInput | null
  }

  export type ContentorCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    zonaId?: SortOrder
  }

  export type ContentorMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    zonaId?: SortOrder
  }

  export type ContentorMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    zonaId?: SortOrder
  }

  export type EnumTipoContentorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoContentor | EnumTipoContentorFieldRefInput<$PrismaModel>
    in?: $Enums.TipoContentor[] | ListEnumTipoContentorFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoContentor[] | ListEnumTipoContentorFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoContentorWithAggregatesFilter<$PrismaModel> | $Enums.TipoContentor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoContentorFilter<$PrismaModel>
    _max?: NestedEnumTipoContentorFilter<$PrismaModel>
  }

  export type EnumEstadoContentorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoContentor | EnumEstadoContentorFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoContentor[] | ListEnumEstadoContentorFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoContentor[] | ListEnumEstadoContentorFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoContentorWithAggregatesFilter<$PrismaModel> | $Enums.EstadoContentor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoContentorFilter<$PrismaModel>
    _max?: NestedEnumEstadoContentorFilter<$PrismaModel>
  }

  export type EnumTipoMovimentacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoFilter<$PrismaModel> | $Enums.TipoMovimentacao
  }

  export type ContentorRelationFilter = {
    is?: ContentorWhereInput
    isNot?: ContentorWhereInput
  }

  export type VeiculoRelationFilter = {
    is?: VeiculoWhereInput
    isNot?: VeiculoWhereInput
  }

  export type MovimentacaoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    contentorId?: SortOrder
    veiculoId?: SortOrder
    dataHora?: SortOrder
  }

  export type MovimentacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    contentorId?: SortOrder
    veiculoId?: SortOrder
    dataHora?: SortOrder
  }

  export type MovimentacaoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    contentorId?: SortOrder
    veiculoId?: SortOrder
    dataHora?: SortOrder
  }

  export type EnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimentacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VeiculoCreateNestedManyWithoutMotoristaInput = {
    create?: XOR<VeiculoCreateWithoutMotoristaInput, VeiculoUncheckedCreateWithoutMotoristaInput> | VeiculoCreateWithoutMotoristaInput[] | VeiculoUncheckedCreateWithoutMotoristaInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutMotoristaInput | VeiculoCreateOrConnectWithoutMotoristaInput[]
    createMany?: VeiculoCreateManyMotoristaInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type VeiculoUncheckedCreateNestedManyWithoutMotoristaInput = {
    create?: XOR<VeiculoCreateWithoutMotoristaInput, VeiculoUncheckedCreateWithoutMotoristaInput> | VeiculoCreateWithoutMotoristaInput[] | VeiculoUncheckedCreateWithoutMotoristaInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutMotoristaInput | VeiculoCreateOrConnectWithoutMotoristaInput[]
    createMany?: VeiculoCreateManyMotoristaInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VeiculoUpdateManyWithoutMotoristaNestedInput = {
    create?: XOR<VeiculoCreateWithoutMotoristaInput, VeiculoUncheckedCreateWithoutMotoristaInput> | VeiculoCreateWithoutMotoristaInput[] | VeiculoUncheckedCreateWithoutMotoristaInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutMotoristaInput | VeiculoCreateOrConnectWithoutMotoristaInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutMotoristaInput | VeiculoUpsertWithWhereUniqueWithoutMotoristaInput[]
    createMany?: VeiculoCreateManyMotoristaInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutMotoristaInput | VeiculoUpdateWithWhereUniqueWithoutMotoristaInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutMotoristaInput | VeiculoUpdateManyWithWhereWithoutMotoristaInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type VeiculoUncheckedUpdateManyWithoutMotoristaNestedInput = {
    create?: XOR<VeiculoCreateWithoutMotoristaInput, VeiculoUncheckedCreateWithoutMotoristaInput> | VeiculoCreateWithoutMotoristaInput[] | VeiculoUncheckedCreateWithoutMotoristaInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutMotoristaInput | VeiculoCreateOrConnectWithoutMotoristaInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutMotoristaInput | VeiculoUpsertWithWhereUniqueWithoutMotoristaInput[]
    createMany?: VeiculoCreateManyMotoristaInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutMotoristaInput | VeiculoUpdateWithWhereUniqueWithoutMotoristaInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutMotoristaInput | VeiculoUpdateManyWithWhereWithoutMotoristaInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type MotoristaCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<MotoristaCreateWithoutVeiculosInput, MotoristaUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: MotoristaCreateOrConnectWithoutVeiculosInput
    connect?: MotoristaWhereUniqueInput
  }

  export type MovimentacaoCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<MovimentacaoCreateWithoutVeiculoInput, MovimentacaoUncheckedCreateWithoutVeiculoInput> | MovimentacaoCreateWithoutVeiculoInput[] | MovimentacaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutVeiculoInput | MovimentacaoCreateOrConnectWithoutVeiculoInput[]
    createMany?: MovimentacaoCreateManyVeiculoInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type MovimentacaoUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<MovimentacaoCreateWithoutVeiculoInput, MovimentacaoUncheckedCreateWithoutVeiculoInput> | MovimentacaoCreateWithoutVeiculoInput[] | MovimentacaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutVeiculoInput | MovimentacaoCreateOrConnectWithoutVeiculoInput[]
    createMany?: MovimentacaoCreateManyVeiculoInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type MotoristaUpdateOneRequiredWithoutVeiculosNestedInput = {
    create?: XOR<MotoristaCreateWithoutVeiculosInput, MotoristaUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: MotoristaCreateOrConnectWithoutVeiculosInput
    upsert?: MotoristaUpsertWithoutVeiculosInput
    connect?: MotoristaWhereUniqueInput
    update?: XOR<XOR<MotoristaUpdateToOneWithWhereWithoutVeiculosInput, MotoristaUpdateWithoutVeiculosInput>, MotoristaUncheckedUpdateWithoutVeiculosInput>
  }

  export type MovimentacaoUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutVeiculoInput, MovimentacaoUncheckedCreateWithoutVeiculoInput> | MovimentacaoCreateWithoutVeiculoInput[] | MovimentacaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutVeiculoInput | MovimentacaoCreateOrConnectWithoutVeiculoInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutVeiculoInput | MovimentacaoUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: MovimentacaoCreateManyVeiculoInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutVeiculoInput | MovimentacaoUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutVeiculoInput | MovimentacaoUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type MovimentacaoUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutVeiculoInput, MovimentacaoUncheckedCreateWithoutVeiculoInput> | MovimentacaoCreateWithoutVeiculoInput[] | MovimentacaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutVeiculoInput | MovimentacaoCreateOrConnectWithoutVeiculoInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutVeiculoInput | MovimentacaoUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: MovimentacaoCreateManyVeiculoInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutVeiculoInput | MovimentacaoUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutVeiculoInput | MovimentacaoUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type ContentorCreateNestedManyWithoutZonaInput = {
    create?: XOR<ContentorCreateWithoutZonaInput, ContentorUncheckedCreateWithoutZonaInput> | ContentorCreateWithoutZonaInput[] | ContentorUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: ContentorCreateOrConnectWithoutZonaInput | ContentorCreateOrConnectWithoutZonaInput[]
    createMany?: ContentorCreateManyZonaInputEnvelope
    connect?: ContentorWhereUniqueInput | ContentorWhereUniqueInput[]
  }

  export type ContentorUncheckedCreateNestedManyWithoutZonaInput = {
    create?: XOR<ContentorCreateWithoutZonaInput, ContentorUncheckedCreateWithoutZonaInput> | ContentorCreateWithoutZonaInput[] | ContentorUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: ContentorCreateOrConnectWithoutZonaInput | ContentorCreateOrConnectWithoutZonaInput[]
    createMany?: ContentorCreateManyZonaInputEnvelope
    connect?: ContentorWhereUniqueInput | ContentorWhereUniqueInput[]
  }

  export type ContentorUpdateManyWithoutZonaNestedInput = {
    create?: XOR<ContentorCreateWithoutZonaInput, ContentorUncheckedCreateWithoutZonaInput> | ContentorCreateWithoutZonaInput[] | ContentorUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: ContentorCreateOrConnectWithoutZonaInput | ContentorCreateOrConnectWithoutZonaInput[]
    upsert?: ContentorUpsertWithWhereUniqueWithoutZonaInput | ContentorUpsertWithWhereUniqueWithoutZonaInput[]
    createMany?: ContentorCreateManyZonaInputEnvelope
    set?: ContentorWhereUniqueInput | ContentorWhereUniqueInput[]
    disconnect?: ContentorWhereUniqueInput | ContentorWhereUniqueInput[]
    delete?: ContentorWhereUniqueInput | ContentorWhereUniqueInput[]
    connect?: ContentorWhereUniqueInput | ContentorWhereUniqueInput[]
    update?: ContentorUpdateWithWhereUniqueWithoutZonaInput | ContentorUpdateWithWhereUniqueWithoutZonaInput[]
    updateMany?: ContentorUpdateManyWithWhereWithoutZonaInput | ContentorUpdateManyWithWhereWithoutZonaInput[]
    deleteMany?: ContentorScalarWhereInput | ContentorScalarWhereInput[]
  }

  export type ContentorUncheckedUpdateManyWithoutZonaNestedInput = {
    create?: XOR<ContentorCreateWithoutZonaInput, ContentorUncheckedCreateWithoutZonaInput> | ContentorCreateWithoutZonaInput[] | ContentorUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: ContentorCreateOrConnectWithoutZonaInput | ContentorCreateOrConnectWithoutZonaInput[]
    upsert?: ContentorUpsertWithWhereUniqueWithoutZonaInput | ContentorUpsertWithWhereUniqueWithoutZonaInput[]
    createMany?: ContentorCreateManyZonaInputEnvelope
    set?: ContentorWhereUniqueInput | ContentorWhereUniqueInput[]
    disconnect?: ContentorWhereUniqueInput | ContentorWhereUniqueInput[]
    delete?: ContentorWhereUniqueInput | ContentorWhereUniqueInput[]
    connect?: ContentorWhereUniqueInput | ContentorWhereUniqueInput[]
    update?: ContentorUpdateWithWhereUniqueWithoutZonaInput | ContentorUpdateWithWhereUniqueWithoutZonaInput[]
    updateMany?: ContentorUpdateManyWithWhereWithoutZonaInput | ContentorUpdateManyWithWhereWithoutZonaInput[]
    deleteMany?: ContentorScalarWhereInput | ContentorScalarWhereInput[]
  }

  export type ZonaCreateNestedOneWithoutContentoresInput = {
    create?: XOR<ZonaCreateWithoutContentoresInput, ZonaUncheckedCreateWithoutContentoresInput>
    connectOrCreate?: ZonaCreateOrConnectWithoutContentoresInput
    connect?: ZonaWhereUniqueInput
  }

  export type MovimentacaoCreateNestedManyWithoutContentorInput = {
    create?: XOR<MovimentacaoCreateWithoutContentorInput, MovimentacaoUncheckedCreateWithoutContentorInput> | MovimentacaoCreateWithoutContentorInput[] | MovimentacaoUncheckedCreateWithoutContentorInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutContentorInput | MovimentacaoCreateOrConnectWithoutContentorInput[]
    createMany?: MovimentacaoCreateManyContentorInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type MovimentacaoUncheckedCreateNestedManyWithoutContentorInput = {
    create?: XOR<MovimentacaoCreateWithoutContentorInput, MovimentacaoUncheckedCreateWithoutContentorInput> | MovimentacaoCreateWithoutContentorInput[] | MovimentacaoUncheckedCreateWithoutContentorInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutContentorInput | MovimentacaoCreateOrConnectWithoutContentorInput[]
    createMany?: MovimentacaoCreateManyContentorInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type EnumTipoContentorFieldUpdateOperationsInput = {
    set?: $Enums.TipoContentor
  }

  export type EnumEstadoContentorFieldUpdateOperationsInput = {
    set?: $Enums.EstadoContentor
  }

  export type ZonaUpdateOneWithoutContentoresNestedInput = {
    create?: XOR<ZonaCreateWithoutContentoresInput, ZonaUncheckedCreateWithoutContentoresInput>
    connectOrCreate?: ZonaCreateOrConnectWithoutContentoresInput
    upsert?: ZonaUpsertWithoutContentoresInput
    disconnect?: ZonaWhereInput | boolean
    delete?: ZonaWhereInput | boolean
    connect?: ZonaWhereUniqueInput
    update?: XOR<XOR<ZonaUpdateToOneWithWhereWithoutContentoresInput, ZonaUpdateWithoutContentoresInput>, ZonaUncheckedUpdateWithoutContentoresInput>
  }

  export type MovimentacaoUpdateManyWithoutContentorNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutContentorInput, MovimentacaoUncheckedCreateWithoutContentorInput> | MovimentacaoCreateWithoutContentorInput[] | MovimentacaoUncheckedCreateWithoutContentorInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutContentorInput | MovimentacaoCreateOrConnectWithoutContentorInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutContentorInput | MovimentacaoUpsertWithWhereUniqueWithoutContentorInput[]
    createMany?: MovimentacaoCreateManyContentorInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutContentorInput | MovimentacaoUpdateWithWhereUniqueWithoutContentorInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutContentorInput | MovimentacaoUpdateManyWithWhereWithoutContentorInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type MovimentacaoUncheckedUpdateManyWithoutContentorNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutContentorInput, MovimentacaoUncheckedCreateWithoutContentorInput> | MovimentacaoCreateWithoutContentorInput[] | MovimentacaoUncheckedCreateWithoutContentorInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutContentorInput | MovimentacaoCreateOrConnectWithoutContentorInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutContentorInput | MovimentacaoUpsertWithWhereUniqueWithoutContentorInput[]
    createMany?: MovimentacaoCreateManyContentorInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutContentorInput | MovimentacaoUpdateWithWhereUniqueWithoutContentorInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutContentorInput | MovimentacaoUpdateManyWithWhereWithoutContentorInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type ContentorCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<ContentorCreateWithoutMovimentacoesInput, ContentorUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: ContentorCreateOrConnectWithoutMovimentacoesInput
    connect?: ContentorWhereUniqueInput
  }

  export type VeiculoCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<VeiculoCreateWithoutMovimentacoesInput, VeiculoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutMovimentacoesInput
    connect?: VeiculoWhereUniqueInput
  }

  export type EnumTipoMovimentacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMovimentacao
  }

  export type ContentorUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<ContentorCreateWithoutMovimentacoesInput, ContentorUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: ContentorCreateOrConnectWithoutMovimentacoesInput
    upsert?: ContentorUpsertWithoutMovimentacoesInput
    connect?: ContentorWhereUniqueInput
    update?: XOR<XOR<ContentorUpdateToOneWithWhereWithoutMovimentacoesInput, ContentorUpdateWithoutMovimentacoesInput>, ContentorUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type VeiculoUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<VeiculoCreateWithoutMovimentacoesInput, VeiculoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutMovimentacoesInput
    upsert?: VeiculoUpsertWithoutMovimentacoesInput
    connect?: VeiculoWhereUniqueInput
    update?: XOR<XOR<VeiculoUpdateToOneWithWhereWithoutMovimentacoesInput, VeiculoUpdateWithoutMovimentacoesInput>, VeiculoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoContentorFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoContentor | EnumTipoContentorFieldRefInput<$PrismaModel>
    in?: $Enums.TipoContentor[] | ListEnumTipoContentorFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoContentor[] | ListEnumTipoContentorFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoContentorFilter<$PrismaModel> | $Enums.TipoContentor
  }

  export type NestedEnumEstadoContentorFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoContentor | EnumEstadoContentorFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoContentor[] | ListEnumEstadoContentorFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoContentor[] | ListEnumEstadoContentorFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoContentorFilter<$PrismaModel> | $Enums.EstadoContentor
  }

  export type NestedEnumTipoContentorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoContentor | EnumTipoContentorFieldRefInput<$PrismaModel>
    in?: $Enums.TipoContentor[] | ListEnumTipoContentorFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoContentor[] | ListEnumTipoContentorFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoContentorWithAggregatesFilter<$PrismaModel> | $Enums.TipoContentor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoContentorFilter<$PrismaModel>
    _max?: NestedEnumTipoContentorFilter<$PrismaModel>
  }

  export type NestedEnumEstadoContentorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoContentor | EnumEstadoContentorFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoContentor[] | ListEnumEstadoContentorFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoContentor[] | ListEnumEstadoContentorFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoContentorWithAggregatesFilter<$PrismaModel> | $Enums.EstadoContentor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoContentorFilter<$PrismaModel>
    _max?: NestedEnumEstadoContentorFilter<$PrismaModel>
  }

  export type NestedEnumTipoMovimentacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoFilter<$PrismaModel> | $Enums.TipoMovimentacao
  }

  export type NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimentacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
  }

  export type VeiculoCreateWithoutMotoristaInput = {
    id?: string
    placa: string
    modelo?: string | null
    movimentacoes?: MovimentacaoCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateWithoutMotoristaInput = {
    id?: string
    placa: string
    modelo?: string | null
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoCreateOrConnectWithoutMotoristaInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutMotoristaInput, VeiculoUncheckedCreateWithoutMotoristaInput>
  }

  export type VeiculoCreateManyMotoristaInputEnvelope = {
    data: VeiculoCreateManyMotoristaInput | VeiculoCreateManyMotoristaInput[]
    skipDuplicates?: boolean
  }

  export type VeiculoUpsertWithWhereUniqueWithoutMotoristaInput = {
    where: VeiculoWhereUniqueInput
    update: XOR<VeiculoUpdateWithoutMotoristaInput, VeiculoUncheckedUpdateWithoutMotoristaInput>
    create: XOR<VeiculoCreateWithoutMotoristaInput, VeiculoUncheckedCreateWithoutMotoristaInput>
  }

  export type VeiculoUpdateWithWhereUniqueWithoutMotoristaInput = {
    where: VeiculoWhereUniqueInput
    data: XOR<VeiculoUpdateWithoutMotoristaInput, VeiculoUncheckedUpdateWithoutMotoristaInput>
  }

  export type VeiculoUpdateManyWithWhereWithoutMotoristaInput = {
    where: VeiculoScalarWhereInput
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyWithoutMotoristaInput>
  }

  export type VeiculoScalarWhereInput = {
    AND?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
    OR?: VeiculoScalarWhereInput[]
    NOT?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
    id?: StringFilter<"Veiculo"> | string
    placa?: StringFilter<"Veiculo"> | string
    modelo?: StringNullableFilter<"Veiculo"> | string | null
    motoristaId?: StringFilter<"Veiculo"> | string
  }

  export type MotoristaCreateWithoutVeiculosInput = {
    id?: string
    nome: string
    documento: string
    telefone?: string | null
  }

  export type MotoristaUncheckedCreateWithoutVeiculosInput = {
    id?: string
    nome: string
    documento: string
    telefone?: string | null
  }

  export type MotoristaCreateOrConnectWithoutVeiculosInput = {
    where: MotoristaWhereUniqueInput
    create: XOR<MotoristaCreateWithoutVeiculosInput, MotoristaUncheckedCreateWithoutVeiculosInput>
  }

  export type MovimentacaoCreateWithoutVeiculoInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    dataHora?: Date | string
    contentor: ContentorCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateWithoutVeiculoInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    contentorId: string
    dataHora?: Date | string
  }

  export type MovimentacaoCreateOrConnectWithoutVeiculoInput = {
    where: MovimentacaoWhereUniqueInput
    create: XOR<MovimentacaoCreateWithoutVeiculoInput, MovimentacaoUncheckedCreateWithoutVeiculoInput>
  }

  export type MovimentacaoCreateManyVeiculoInputEnvelope = {
    data: MovimentacaoCreateManyVeiculoInput | MovimentacaoCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type MotoristaUpsertWithoutVeiculosInput = {
    update: XOR<MotoristaUpdateWithoutVeiculosInput, MotoristaUncheckedUpdateWithoutVeiculosInput>
    create: XOR<MotoristaCreateWithoutVeiculosInput, MotoristaUncheckedCreateWithoutVeiculosInput>
    where?: MotoristaWhereInput
  }

  export type MotoristaUpdateToOneWithWhereWithoutVeiculosInput = {
    where?: MotoristaWhereInput
    data: XOR<MotoristaUpdateWithoutVeiculosInput, MotoristaUncheckedUpdateWithoutVeiculosInput>
  }

  export type MotoristaUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MotoristaUncheckedUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: MovimentacaoWhereUniqueInput
    update: XOR<MovimentacaoUpdateWithoutVeiculoInput, MovimentacaoUncheckedUpdateWithoutVeiculoInput>
    create: XOR<MovimentacaoCreateWithoutVeiculoInput, MovimentacaoUncheckedCreateWithoutVeiculoInput>
  }

  export type MovimentacaoUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: MovimentacaoWhereUniqueInput
    data: XOR<MovimentacaoUpdateWithoutVeiculoInput, MovimentacaoUncheckedUpdateWithoutVeiculoInput>
  }

  export type MovimentacaoUpdateManyWithWhereWithoutVeiculoInput = {
    where: MovimentacaoScalarWhereInput
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type MovimentacaoScalarWhereInput = {
    AND?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    OR?: MovimentacaoScalarWhereInput[]
    NOT?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    id?: StringFilter<"Movimentacao"> | string
    tipo?: EnumTipoMovimentacaoFilter<"Movimentacao"> | $Enums.TipoMovimentacao
    contentorId?: StringFilter<"Movimentacao"> | string
    veiculoId?: StringFilter<"Movimentacao"> | string
    dataHora?: DateTimeFilter<"Movimentacao"> | Date | string
  }

  export type ContentorCreateWithoutZonaInput = {
    id?: string
    codigo: string
    tipo: $Enums.TipoContentor
    estado: $Enums.EstadoContentor
    movimentacoes?: MovimentacaoCreateNestedManyWithoutContentorInput
  }

  export type ContentorUncheckedCreateWithoutZonaInput = {
    id?: string
    codigo: string
    tipo: $Enums.TipoContentor
    estado: $Enums.EstadoContentor
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutContentorInput
  }

  export type ContentorCreateOrConnectWithoutZonaInput = {
    where: ContentorWhereUniqueInput
    create: XOR<ContentorCreateWithoutZonaInput, ContentorUncheckedCreateWithoutZonaInput>
  }

  export type ContentorCreateManyZonaInputEnvelope = {
    data: ContentorCreateManyZonaInput | ContentorCreateManyZonaInput[]
    skipDuplicates?: boolean
  }

  export type ContentorUpsertWithWhereUniqueWithoutZonaInput = {
    where: ContentorWhereUniqueInput
    update: XOR<ContentorUpdateWithoutZonaInput, ContentorUncheckedUpdateWithoutZonaInput>
    create: XOR<ContentorCreateWithoutZonaInput, ContentorUncheckedCreateWithoutZonaInput>
  }

  export type ContentorUpdateWithWhereUniqueWithoutZonaInput = {
    where: ContentorWhereUniqueInput
    data: XOR<ContentorUpdateWithoutZonaInput, ContentorUncheckedUpdateWithoutZonaInput>
  }

  export type ContentorUpdateManyWithWhereWithoutZonaInput = {
    where: ContentorScalarWhereInput
    data: XOR<ContentorUpdateManyMutationInput, ContentorUncheckedUpdateManyWithoutZonaInput>
  }

  export type ContentorScalarWhereInput = {
    AND?: ContentorScalarWhereInput | ContentorScalarWhereInput[]
    OR?: ContentorScalarWhereInput[]
    NOT?: ContentorScalarWhereInput | ContentorScalarWhereInput[]
    id?: StringFilter<"Contentor"> | string
    codigo?: StringFilter<"Contentor"> | string
    tipo?: EnumTipoContentorFilter<"Contentor"> | $Enums.TipoContentor
    estado?: EnumEstadoContentorFilter<"Contentor"> | $Enums.EstadoContentor
    zonaId?: StringNullableFilter<"Contentor"> | string | null
  }

  export type ZonaCreateWithoutContentoresInput = {
    id?: string
    nome: string
  }

  export type ZonaUncheckedCreateWithoutContentoresInput = {
    id?: string
    nome: string
  }

  export type ZonaCreateOrConnectWithoutContentoresInput = {
    where: ZonaWhereUniqueInput
    create: XOR<ZonaCreateWithoutContentoresInput, ZonaUncheckedCreateWithoutContentoresInput>
  }

  export type MovimentacaoCreateWithoutContentorInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    dataHora?: Date | string
    veiculo: VeiculoCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateWithoutContentorInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    veiculoId: string
    dataHora?: Date | string
  }

  export type MovimentacaoCreateOrConnectWithoutContentorInput = {
    where: MovimentacaoWhereUniqueInput
    create: XOR<MovimentacaoCreateWithoutContentorInput, MovimentacaoUncheckedCreateWithoutContentorInput>
  }

  export type MovimentacaoCreateManyContentorInputEnvelope = {
    data: MovimentacaoCreateManyContentorInput | MovimentacaoCreateManyContentorInput[]
    skipDuplicates?: boolean
  }

  export type ZonaUpsertWithoutContentoresInput = {
    update: XOR<ZonaUpdateWithoutContentoresInput, ZonaUncheckedUpdateWithoutContentoresInput>
    create: XOR<ZonaCreateWithoutContentoresInput, ZonaUncheckedCreateWithoutContentoresInput>
    where?: ZonaWhereInput
  }

  export type ZonaUpdateToOneWithWhereWithoutContentoresInput = {
    where?: ZonaWhereInput
    data: XOR<ZonaUpdateWithoutContentoresInput, ZonaUncheckedUpdateWithoutContentoresInput>
  }

  export type ZonaUpdateWithoutContentoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ZonaUncheckedUpdateWithoutContentoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoUpsertWithWhereUniqueWithoutContentorInput = {
    where: MovimentacaoWhereUniqueInput
    update: XOR<MovimentacaoUpdateWithoutContentorInput, MovimentacaoUncheckedUpdateWithoutContentorInput>
    create: XOR<MovimentacaoCreateWithoutContentorInput, MovimentacaoUncheckedCreateWithoutContentorInput>
  }

  export type MovimentacaoUpdateWithWhereUniqueWithoutContentorInput = {
    where: MovimentacaoWhereUniqueInput
    data: XOR<MovimentacaoUpdateWithoutContentorInput, MovimentacaoUncheckedUpdateWithoutContentorInput>
  }

  export type MovimentacaoUpdateManyWithWhereWithoutContentorInput = {
    where: MovimentacaoScalarWhereInput
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyWithoutContentorInput>
  }

  export type ContentorCreateWithoutMovimentacoesInput = {
    id?: string
    codigo: string
    tipo: $Enums.TipoContentor
    estado: $Enums.EstadoContentor
    zona?: ZonaCreateNestedOneWithoutContentoresInput
  }

  export type ContentorUncheckedCreateWithoutMovimentacoesInput = {
    id?: string
    codigo: string
    tipo: $Enums.TipoContentor
    estado: $Enums.EstadoContentor
    zonaId?: string | null
  }

  export type ContentorCreateOrConnectWithoutMovimentacoesInput = {
    where: ContentorWhereUniqueInput
    create: XOR<ContentorCreateWithoutMovimentacoesInput, ContentorUncheckedCreateWithoutMovimentacoesInput>
  }

  export type VeiculoCreateWithoutMovimentacoesInput = {
    id?: string
    placa: string
    modelo?: string | null
    motorista: MotoristaCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculoUncheckedCreateWithoutMovimentacoesInput = {
    id?: string
    placa: string
    modelo?: string | null
    motoristaId: string
  }

  export type VeiculoCreateOrConnectWithoutMovimentacoesInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutMovimentacoesInput, VeiculoUncheckedCreateWithoutMovimentacoesInput>
  }

  export type ContentorUpsertWithoutMovimentacoesInput = {
    update: XOR<ContentorUpdateWithoutMovimentacoesInput, ContentorUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<ContentorCreateWithoutMovimentacoesInput, ContentorUncheckedCreateWithoutMovimentacoesInput>
    where?: ContentorWhereInput
  }

  export type ContentorUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: ContentorWhereInput
    data: XOR<ContentorUpdateWithoutMovimentacoesInput, ContentorUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type ContentorUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContentorFieldUpdateOperationsInput | $Enums.TipoContentor
    estado?: EnumEstadoContentorFieldUpdateOperationsInput | $Enums.EstadoContentor
    zona?: ZonaUpdateOneWithoutContentoresNestedInput
  }

  export type ContentorUncheckedUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContentorFieldUpdateOperationsInput | $Enums.TipoContentor
    estado?: EnumEstadoContentorFieldUpdateOperationsInput | $Enums.EstadoContentor
    zonaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoUpsertWithoutMovimentacoesInput = {
    update: XOR<VeiculoUpdateWithoutMovimentacoesInput, VeiculoUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<VeiculoCreateWithoutMovimentacoesInput, VeiculoUncheckedCreateWithoutMovimentacoesInput>
    where?: VeiculoWhereInput
  }

  export type VeiculoUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: VeiculoWhereInput
    data: XOR<VeiculoUpdateWithoutMovimentacoesInput, VeiculoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type VeiculoUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    motorista?: MotoristaUpdateOneRequiredWithoutVeiculosNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    motoristaId?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoCreateManyMotoristaInput = {
    id?: string
    placa: string
    modelo?: string | null
  }

  export type VeiculoUpdateWithoutMotoristaInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: MovimentacaoUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutMotoristaInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateManyWithoutMotoristaInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoCreateManyVeiculoInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    contentorId: string
    dataHora?: Date | string
  }

  export type MovimentacaoUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    contentor?: ContentorUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    contentorId?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoUncheckedUpdateManyWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    contentorId?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentorCreateManyZonaInput = {
    id?: string
    codigo: string
    tipo: $Enums.TipoContentor
    estado: $Enums.EstadoContentor
  }

  export type ContentorUpdateWithoutZonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContentorFieldUpdateOperationsInput | $Enums.TipoContentor
    estado?: EnumEstadoContentorFieldUpdateOperationsInput | $Enums.EstadoContentor
    movimentacoes?: MovimentacaoUpdateManyWithoutContentorNestedInput
  }

  export type ContentorUncheckedUpdateWithoutZonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContentorFieldUpdateOperationsInput | $Enums.TipoContentor
    estado?: EnumEstadoContentorFieldUpdateOperationsInput | $Enums.EstadoContentor
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutContentorNestedInput
  }

  export type ContentorUncheckedUpdateManyWithoutZonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContentorFieldUpdateOperationsInput | $Enums.TipoContentor
    estado?: EnumEstadoContentorFieldUpdateOperationsInput | $Enums.EstadoContentor
  }

  export type MovimentacaoCreateManyContentorInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    veiculoId: string
    dataHora?: Date | string
  }

  export type MovimentacaoUpdateWithoutContentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculo?: VeiculoUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateWithoutContentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    veiculoId?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoUncheckedUpdateManyWithoutContentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    veiculoId?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MotoristaCountOutputTypeDefaultArgs instead
     */
    export type MotoristaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MotoristaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VeiculoCountOutputTypeDefaultArgs instead
     */
    export type VeiculoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VeiculoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ZonaCountOutputTypeDefaultArgs instead
     */
    export type ZonaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ZonaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContentorCountOutputTypeDefaultArgs instead
     */
    export type ContentorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContentorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MotoristaDefaultArgs instead
     */
    export type MotoristaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MotoristaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VeiculoDefaultArgs instead
     */
    export type VeiculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VeiculoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ZonaDefaultArgs instead
     */
    export type ZonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ZonaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContentorDefaultArgs instead
     */
    export type ContentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContentorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovimentacaoDefaultArgs instead
     */
    export type MovimentacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovimentacaoDefaultArgs<ExtArgs>

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