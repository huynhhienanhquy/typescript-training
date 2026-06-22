//Conditional types + generic + type inference

type apiResponse<T> = T extends string
  ? { message: T}
  : { date: T};

type userResponse = apiResponse<{
  id: number;
  name: string;
}>;

type messageResponse = apiResponse<"success">;
