import { BASE_URL } from './endpoints';

export async function sendGetRequest(
  endpoint: string,
  authToken: string | null = null,
  data: object | null = null
) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: headers,
  };

  // if (authToken) {
  //   requestOptions.headers['Authorization'] = `Bearer ${authToken}`;
  // } else throw new Error('Unauthorized request');

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);

  if (!response.ok) {
    if (response.status === 401) {
      alert('This Session has expired. Log in again');
      window.location.href = '/login';
      localStorage.clear();
      return;
    }
    const errorObject = await response.json();
    throw errorObject;
  }

  return await response.json();
}

export async function sendPostRequest(
  endpoint: string,
  authToken: string | null = null,
  data: object | null = null,
  formData: FormData | null = null
) {
  // const requestOptions: any = {
  //   method: 'POST',
  //   headers: {} as IRequestHeaders,
  // };

  // if (authToken) {
  //   requestOptions.headers['Authorization'] = `Bearer ${authToken}`;
  // }

  // if (data) {
  //   if (formData) {
  //     requestOptions.body = data;
  //   } else {
  //     requestOptions.headers['Content-Type'] = 'application/json';
  //     requestOptions.body = JSON.stringify(data);
  //   }
  // }
  const headers = new Headers();

  if (formData) {
    return;
  } else {
    headers.append('Content-Type', 'application/json');
  }

  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: headers,
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }
  if (formData) {
    requestOptions.body = formData;
  }
  const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);

  if (!response.ok) {
    if (response.status === 401) {
      alert('This Session has expired. Log in again');
      window.location.href = '/login';
      localStorage.clear();
      return;
    }
    const errorObject = await response.json();
    throw errorObject;
  }

  return await response.json();
}
export async function sendPutRequest(
  endpoint: string,
  authToken: string | null = null,
  data: object | null = null,
  formData: FormData | null = null
) {
  // const requestOptions: any = {
  //   method: 'PUT',
  //   headers: {} as IRequestHeaders,
  // };

  // if (authToken) {
  //   requestOptions.headers['Authorization'] = `Bearer ${authToken}`;
  // }

  // if (data) {
  //   if (formData) {
  //     // requestOptions.headers['Content-Type'] = 'multipart/form-data';
  //     requestOptions.body = data;
  //   } else {
  //     requestOptions.headers['Content-Type'] = 'application/json';
  //     requestOptions.body = JSON.stringify(data);
  //   }
  // }
  const headers = new Headers();

  if (formData) {
    return;
  } else {
    headers.append('Content-Type', 'application/json');
  }

  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }

  const requestOptions: RequestInit = {
    method: 'PUT',
    headers: headers,
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }
  if (formData) {
    requestOptions.body = formData;
  }

  const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);

  if (!response.ok) {
    if (response.status === 401) {
      alert('This Session has expired. Log in again');
      window.location.href = '/login';
      localStorage.clear();
      return;
    }
    const errorObject = await response.json();
    throw errorObject;
  }

  return await response.json();
}

export async function sendDeleteRequest(
  endpoint: string,
  authToken: string | null = null
) {
  // const requestOptions: any = {
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   } as IRequestHeaders,
  // };

  // if (authToken) {
  //   requestOptions.headers['Authorization'] = `Bearer ${authToken}`;
  // } else throw new Error('Unauthorized request');

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }
  const requestOptions: RequestInit = {
    method: 'DELETE',
    headers: headers,
  };
  const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);

  if (!response.ok) {
    if (response.status === 401) {
      alert('This Session has expired. Log in again');
      window.location.href = '/login';
      localStorage.clear();
      return;
    }
    const errorObject = await response.json();
    throw errorObject;
  }

  return await response.json();
}
