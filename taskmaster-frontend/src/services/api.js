const BASE_URL = "http://localhost:3000/api/tasks";

export const getTasks = async (status, sort) => {
  let url = "http://localhost:3000/api/tasks";

  const params = [];

  if (status && status !== "all") params.push(`status=${status}`);
  if (sort) params.push(`sort=${sort}`);

  if (params.length) {
    url += "?" + params.join("&");
  }

  const res = await fetch(url);
  return res.json();
};

export const createTask = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const toggleTask = async (id) => {
  await fetch(`${BASE_URL}/${id}/toggle`, {
    method: "PATCH",
  });
};

export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};