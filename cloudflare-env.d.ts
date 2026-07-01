type D1Result<T = unknown> = {
  results?: T[];
  success: boolean;
  meta: unknown;
};

type D1PreparedStatement = {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(): Promise<T | null>;
  all<T = unknown>(): Promise<D1Result<T>>;
  run(): Promise<D1Result>;
};

type D1Database = {
  prepare(query: string): D1PreparedStatement;
};

type R2ObjectBody = {
  body: ReadableStream;
  httpMetadata?: { contentType?: string };
};

type R2Bucket = {
  put(
    key: string,
    value: ReadableStream | ArrayBuffer | ArrayBufferView | string,
    options?: { httpMetadata?: { contentType?: string } }
  ): Promise<unknown>;
  get(key: string): Promise<R2ObjectBody | null>;
};

type PagesFunction<Env = unknown> = (context: {
  request: Request;
  env: Env;
  params: Record<string, string | string[]>;
}) => Response | Promise<Response>;
