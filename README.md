# dev.akademi Projesi

Verilen API'daki datayı görüntülemek için bir frontend hazırladım. Bunun için küçük bir proxy API'ı yazdım.

Bunu yaparken front-end için Vue ve Buefy kullandım. State management için Vuex kullandım. API proxy'si için Node.js ve express kullandım.

## Hazırlama

Projeyi yüklemek için `frontend` ve `server` dosyalarında gereksinimlerimizi indiriyoruz.
```sh
npm install
```

Sonra proje root'undan aşağıdakileri çalıştırmak yeterli:

```sh
cd frontend
npm run serve
cd ../server
npm run start
```

## Yapılabilenler
- API'dan ilanları çekebiliyoruz. 
- Admin olarak log in olabiliyoruz
- Proxy API'ımız bütün endpointlere sahip, admin token'ı middleware ile kontrol ediliyor.

## Planlanıp yapılamayanlar
- Admin token'ı ile API'dan admine özel ilanlarını çekmek
    - Bu kısmı Proxy API'ımızda var, ancak frontendi bağlamayı yetiştiremedim.
- Yalnızca `WAITING_APPROVAL` olanlarda `Approve` seçeneği olmasını ve kendi API'ıma mock bir POST isteği göndermeyi düşünüyordum.

