import httpApi from "./http.Api";

export function getBooks() {
    return httpApi.get("/book");
}

export function getBook() {
    return httpApi.get(`/book/${id}`);
}

export function addBook(data) {
    return httpApi.post("/book", data);
}

export function deleteBook(id) {
    return httpApi.delete(`/book/${id}`);
}

export function updateBook(id, data) {
    return httpApi.put(`/book/${id}`, data);
}

export function getCategories() {
    return httpApi.get("/category");
}

export function getCategory(id) {
    return httpApi.get(`/category/${id}`);
}

export function addCategory(data) {
    return httpApi.post("/category", data);
}

export function updateCategory(id, data) {
    return httpApi.put(`/category/${id}`, data);
}

export function deleteCategory(id) {
    return httpApi.delete(`/category/${id}`);
}

export function getCarts() {
    return httpApi.get("/cart");
}

export function getCartItem(id) {
    return httpApi.get(`/cart/${id}`);
}

export function addCartItem(data) {
    return httpApi.post("/cart", data);
}

export function deleteCartItem(data) {
    return httpApi.post(`/cart/remove`, data);
}
