/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type IMySuperPrefixAuthUserTypeMySuperSuffix = IMySuperPrefixOmitIdUserTypeMySuperSuffix;

export type IMySuperPrefixExtractedProjectTypeMySuperSuffix = IMySuperPrefixOmitProjectTypeJobMySuperSuffix & {
  /** Information about job */
  job: IMySuperPrefixJobTypeMySuperSuffix;
};

/**
 * Information about job
 */
export interface IMySuperPrefixFooBarMySuperSuffix {
  kind?: IMySuperPrefixJobKindMySuperSuffix;
}

/**
 * Information about job
 */
export interface IMySuperPrefixFooBarBazMySuperSuffix {
  id?: string;
  kind?: IMySuperPrefixJobKindMySuperSuffix;
  link?: string;
  name?: string;
  [key: string]: any;
}

/**
 * Information about job
 */
export interface IMySuperPrefixFooBazMySuperSuffix {
  link?: string;
  name?: string;
}

/**
 * FooBar
 * @format int32
 */
export enum IMySuperPrefixIntEnumWithNamesMySuperSuffix {
  Unknown = 0,
  String = 1,
  Int32 = 2,
  Int64 = 3,
  Double = 4,
  DateTime = 5,
  Test2 = 6,
  Test23 = 7,
  Tess44 = 8,
  BooFar = 9,
}

export enum IMySuperPrefixJobKindMySuperSuffix {
  COMPANY = "COMPANY",
  PERSONAL = "PERSONAL",
  FREELANCE = "FREELANCE",
  OPEN_SOURCE = "OPEN_SOURCE",
}

/**
 * Information about job
 */
export interface IMySuperPrefixJobTypeMySuperSuffix {
  /** web site address */
  address?: string;
  /**
   * Exist only in open source jobs
   * Format: `${username}/${projectName}`
   */
  github?: string;
  id: string;
  /**
   * Exist only in open source jobs
   * Means project is dev. tool (like swagger code generator)
   */
  isTool?: boolean;
  kind: IMySuperPrefixJobKindMySuperSuffix;
  link?: string;
  name?: string;
  /**
   * Exist only in open source jobs
   * Format: `${orgname}/${projectName}`
   */
  npm?: string;
}

export type IMySuperPrefixJobUpdateTypeMySuperSuffix = IMySuperPrefixOmitIdJobTypeMySuperSuffix;

export interface IMySuperPrefixNullableEnumMySuperSuffix {
  /** @format int64 */
  id?: number;
  legalCategory?: "SARL" | "ASSOCIATION" | null;
}

export type IMySuperPrefixOmitIdJobTypeMySuperSuffix = IMySuperPrefixOmitJobTypeIdOrIdMySuperSuffix;

export type IMySuperPrefixOmitIdProjectTypeMySuperSuffix = IMySuperPrefixOmitProjectTypeIdOrIdMySuperSuffix;

export type IMySuperPrefixOmitIdUserTypeMySuperSuffix = IMySuperPrefixOmitUserTypeIdOrIdMySuperSuffix;

export type IMySuperPrefixOmitJobTypeIdOrIdMySuperSuffix = IMySuperPrefixPickJobTypeExcludeKeysIdOrIdMySuperSuffix;

export type IMySuperPrefixOmitProjectTypeIdOrIdMySuperSuffix =
  IMySuperPrefixPickProjectTypeExcludeKeysIdOrIdMySuperSuffix;

export type IMySuperPrefixOmitProjectTypeJobMySuperSuffix = IMySuperPrefixPickProjectTypeExcludeKeysJobMySuperSuffix;

export type IMySuperPrefixOmitUserTypeIdOrIdMySuperSuffix = IMySuperPrefixPickUserTypeExcludeKeysIdOrIdMySuperSuffix;

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface IMySuperPrefixPickJobTypeExcludeKeysIdOrIdMySuperSuffix {
  /** web site address */
  address?: string;
  /**
   * Exist only in open source jobs
   * Format: `${username}/${projectName}`
   */
  github?: string;
  /**
   * Exist only in open source jobs
   * Means project is dev. tool (like swagger code generator)
   */
  isTool?: boolean;
  kind: IMySuperPrefixJobKindMySuperSuffix;
  link?: string;
  name?: string;
  /**
   * Exist only in open source jobs
   * Format: `${orgname}/${projectName}`
   */
  npm?: string;
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface IMySuperPrefixPickProjectTypeExcludeKeysIdOrIdMySuperSuffix {
  description: string;
  job: string;
  name?: string;
  notImportant?: boolean;
  prefix?: string;
  tags: string[];
  teamSize: string;
  /** @format double */
  year: number;
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface IMySuperPrefixPickProjectTypeExcludeKeysJobMySuperSuffix {
  description: string;
  id: string;
  name?: string;
  notImportant?: boolean;
  prefix?: string;
  tags: string[];
  teamSize: string;
  /** @format double */
  year: number;
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface IMySuperPrefixPickUserTypeExcludeKeysIdOrIdMySuperSuffix {
  password: string;
  username: string;
}

export interface IMySuperPrefixProjectTypeMySuperSuffix {
  description: string;
  id: string;
  job: string;
  name?: string;
  notImportant?: boolean;
  prefix?: string;
  tags: string[];
  teamSize: string;
  /** @format double */
  year: number;
}

export type IMySuperPrefixProjectUpdateTypeMySuperSuffix = IMySuperPrefixOmitIdProjectTypeMySuperSuffix;

export type IMySuperPrefixTestAllOfDcMySuperSuffix = (IMySuperPrefixFooBarBazMySuperSuffix &
  IMySuperPrefixFooBarMySuperSuffix) & {
  prop?: string;
};

export type IMySuperPrefixTestAllOfDc2MySuperSuffix = IMySuperPrefixFooBarBazMySuperSuffix & {
  prop?: string;
};

export type IMySuperPrefixTestAnyOfDcMySuperSuffix = (
  | IMySuperPrefixFooBarBazMySuperSuffix
  | IMySuperPrefixFooBarMySuperSuffix
  | (IMySuperPrefixFooBarBazMySuperSuffix & IMySuperPrefixFooBarMySuperSuffix)
) & {
  prop?: string;
};

export type IMySuperPrefixTestOneOfDcMySuperSuffix = (
  | IMySuperPrefixFooBarBazMySuperSuffix
  | IMySuperPrefixFooBarMySuperSuffix
) & {
  prop?: string;
};

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8080/api/v1";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title No title
 * @baseUrl http://localhost:8080/api/v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name Login
     * @request POST:/auth
     */
    login: (data: IMySuperPrefixAuthUserTypeMySuperSuffix, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/auth`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name Refresh
     * @request POST:/auth/refresh
     * @secure
     */
    refresh: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/auth/refresh`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  jobs = {
    /**
     * No description
     *
     * @tags Jobs
     * @name GetJobs
     * @request GET:/jobs
     * @secure
     */
    getJobs: (params: RequestParams = {}) =>
      this.request<IMySuperPrefixJobTypeMySuperSuffix[], any>({
        path: `/jobs`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Jobs
     * @name AddJob
     * @request POST:/jobs
     * @secure
     */
    addJob: (data: IMySuperPrefixJobUpdateTypeMySuperSuffix, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/jobs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Jobs
     * @name GetJob
     * @request GET:/jobs/{id}
     * @secure
     */
    getJob: (id: string, params: RequestParams = {}) =>
      this.request<IMySuperPrefixJobTypeMySuperSuffix, void>({
        path: `/jobs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Jobs
     * @name UpdateJob
     * @request PATCH:/jobs/{id}
     * @secure
     */
    updateJob: (id: string, params: IMySuperPrefixJobUpdateTypeMySuperSuffix, requestParams: RequestParams = {}) =>
      this.request<IMySuperPrefixJobTypeMySuperSuffix, any>({
        path: `/jobs/${id}`,
        method: "PATCH",
        body: params,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...requestParams,
      }),

    /**
     * No description
     *
     * @tags Jobs
     * @name DeleteJob
     * @request DELETE:/jobs/{id}
     * @secure
     */
    deleteJob: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/jobs/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  projects = {
    /**
     * No description
     *
     * @tags Projects
     * @name GetProjects
     * @request GET:/projects
     */
    getProjects: (params: RequestParams = {}) =>
      this.request<IMySuperPrefixExtractedProjectTypeMySuperSuffix[], any>({
        path: `/projects`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name AddProjects
     * @request POST:/projects
     * @secure
     */
    addProjects: (data: IMySuperPrefixProjectUpdateTypeMySuperSuffix, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/projects`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name UpdateProject
     * @request PATCH:/projects/{id}
     * @secure
     */
    updateProject: (id: string, data: IMySuperPrefixProjectUpdateTypeMySuperSuffix, params: RequestParams = {}) =>
      this.request<IMySuperPrefixProjectTypeMySuperSuffix, any>({
        path: `/projects/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name DeleteProject
     * @request DELETE:/projects/{id}
     */
    deleteProject: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/projects/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
}
