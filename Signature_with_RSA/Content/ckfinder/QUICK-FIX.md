# ⚡ FIX NHANH - Lỗi CKFinder Connector

## ❌ LỖI

```
It was not possible to properly load the XML response from the web server.
```

## ✅ GIẢI PHÁP 3 BƯỚC

### 1️⃣ Đã Sửa Web.config ✅

Thêm handler cho connector.aspx

### 2️⃣ Tạo Thư Mục Images ✅

```
/Images/files/
/Images/images/
```

### 3️⃣ RESTART PROJECT ⚠️

**QUAN TRỌNG: Bạn phải làm bước này!**

#### Cách 1: Visual Studio

```
1. Stop (Shift + F5)
2. Build → Clean Solution
3. Build → Rebuild Solution
4. Run (F5)
```

#### Cách 2: Command Line

```cmd
iisreset
```

---

## 🧪 TEST NGAY

Sau khi restart, truy cập:

### Test 1: Connector XML

```
http://localhost:[port]/Content/ckfinder/core/connector/aspx/connector.aspx?command=Init
```

**Kết quả đúng:** XML response
**Kết quả sai:** Mã nguồn ASPX

### Test 2: CKFinder UI

```
http://localhost:[port]/Content/ckfinder/test-page.html
```

---

## 🎯 NẾU VẪN LỖI

### Kiểm Tra Nhanh:

1. **CKFinder.dll có trong /bin/?**

   ```
   ✓ Có → OK
   ✗ Không → Copy từ Content/ckfinder/bin/Release/
   ```

2. **Thư mục Images đã tạo?**

   ```
   ✓ /Images/files/ và /Images/images/
   ```

3. **Đã restart project?**

   ```
   ✓ Clean + Rebuild + Run
   ```

4. **Application Pool dùng .NET 4.0+?**
   ```
   IIS Manager → App Pools → Check version
   ```

---

## 📚 CHI TIẾT

Đọc file: **FIX-CONNECTOR-ERROR.md**

---

## 🎉 SAU KHI FIX

CKFinder sẽ hoạt động với:

- ✅ Upload files
- ✅ Tạo folders
- ✅ Xóa files
- ✅ Xem thumbnails
- ✅ Giao diện hiện đại

**Chúc may mắn!** 🚀
