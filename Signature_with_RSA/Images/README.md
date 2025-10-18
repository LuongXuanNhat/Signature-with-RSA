# Thư Mục Lưu Trữ CKFinder

Thư mục này được sử dụng bởi CKFinder để lưu trữ files upload.

## Cấu Trúc

```
Images/
├── files/      - Files tài liệu (PDF, DOC, XLS, ZIP, etc)
└── images/     - Files ảnh (JPG, PNG, GIF, etc)
```

## Permissions Required

**Windows:**

- IIS_IUSRS: Full Control
- NETWORK SERVICE: Modify

**Cấp quyền:**

```cmd
icacls "D:\BTMONHOC\SĐH\MaHoa_ThamMa\Signature_with_RSA\Images" /grant "IIS_IUSRS:(OI)(CI)F" /T
```

## Cấu Hình

File: `Content/ckfinder/config.ascx`

```csharp
BaseUrl = "/Images/";
BaseDir = "";  // Auto-resolve từ BaseUrl
```
