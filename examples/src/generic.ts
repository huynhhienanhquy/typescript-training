interface User1 {
  id: number;
  name: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

function getData<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    data,
  };
}

const response = getData<User1>({
  id: 1,
  name: "Quy",
});

console.log(response);
