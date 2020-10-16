<template>
  <div class="card my-3">
    <header class="card-header">
      <p class="card-header-title">{{ data.title }}</p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>

    <div class="card-content">
      <div class="content">
        <!-- <div class="columns is-vcentered">
          <b class="column is-narrow has-text-right"> Bilgi</b>
          <div class="column has-text-left">{{ data.description }}</div>
        </div>

        <div class="columns is-vcentered">
          <b class="column is-narrow has-text-right"> İlan tarihi </b>
          <div class="column">{{ new Date(data.date).toLocaleString() }}</div>
        </div> -->

        <div class="grid">
          <div class="has-text-weight-bold">
            <div>Bilgi</div>
          </div>
          <div class="has-text-left">{{ data.description }}</div>

          <div class="has-text-weight-bold">
            <div>İlan tarihi</div>
          </div>
          <div class="has-text-left">
            {{ new Date(data.date).toLocaleString() }}
          </div>

          <div class="has-text-weight-bold">
            <div>İlan son tarihi</div>
          </div>
          <div class="has-text-left">
            {{ new Date(data.expiryDate).toLocaleString() }}
          </div>

          <div class="has-text-weight-bold">
            <div>Fiyat</div>
          </div>
          <div class="has-text-left">
            {{ data.price }}
          </div>

          <div class="has-text-weight-bold">
            <div>Statü</div>
          </div>
          <div class="has-text-left">
            {{ data.status }}
          </div>

        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Save</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Posting",
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "ilan başlığı",
        description: "ilan açıklaması",
        categories: {
          category0: {
            id: 0,
            title: "Kategori 1",
          },
          category1: {
            id: 1,
            title: "Kategori 2",
          },
        },
        price: 22,
        date: 1602543849,
        expiryDate: 1605135849,
        live: true,
        status: "ACTIVE",
        // “ACTIVE”: İlanın aktif olma durumudur.
        // “WAITING_APPROVAL”: İlanın onay beklediği durumdur.
        // “PASSIVATED”: Kullanıcı tarafından ilanın pasife çekildiği durumdur.
        // “REJECTED”: İlanın admin tarafından reddedilmesi durumudur.
        // “EXPIRED”: İlanın süresinin dolması durumudur.
        adminID: 11111,
        // "WAITING_APPROVAL", "PASSIVATED", "EXPIRED" durumlarında 0 olarak gelir.
      }),
    },
  },
  mounted() {},
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.5rem 1rem;
}

.grid > * {
  width: 100%;
  height: 100%;
  padding: 0.25rem;

  /* display: flex;
  align-content: center;
  justify-content: center; */
}

.grid :nth-child(2n + 1) {
  justify-self: end;
  align-self: center;
}

</style>
