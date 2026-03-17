/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Product } from "./pages/Product";
import { About } from "./pages/About";
import { Journal } from "./pages/Journal";
import { JournalArticle } from "./pages/JournalArticle";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Category />} />
          <Route path="shop/:categoryId" element={<Category />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="journal" element={<Journal />} />
          <Route path="journal/:id" element={<JournalArticle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
