
import { Project, ActivityLog, Language } from "../types";

// Static mock data - no API calls needed

const projectsEn: Project[] = [
  {
    id: "1",
    name: "Hyper_State",
    description: "A blazing-fast state management library with zero dependencies. Built for performance-critical applications where every millisecond counts.",
    tags: ["TypeScript", "State", "Performance"],
    stars: "2.4k",
    order: "01"
  },
  {
    id: "2",
    name: "Img_Crush_CLI",
    description: "Command-line image optimization tool. Lossless compression with support for WebP, AVIF, and next-gen formats.",
    tags: ["Rust", "CLI", "Images"],
    stars: "1.8k",
    order: "02"
  },
  {
    id: "3",
    name: "DB_Sync_Pro",
    description: "Real-time database synchronization across multiple providers. PostgreSQL, MongoDB, Redis unified under one API.",
    tags: ["Go", "Database", "Sync"],
    stars: "956",
    order: "03"
  }
];

const projectsTr: Project[] = [
  {
    id: "1",
    name: "Hyper_State",
    description: "Sıfır bağımlılıkla çalışan inanılmaz hızlı durum yönetim kütüphanesi. Her milisaniyenin önemli olduğu performans odaklı uygulamalar için tasarlandı.",
    tags: ["TypeScript", "State", "Performans"],
    stars: "2.4k",
    order: "01"
  },
  {
    id: "2",
    name: "Img_Crush_CLI",
    description: "Komut satırı görüntü optimizasyon aracı. WebP, AVIF ve yeni nesil formatlar için kayıpsız sıkıştırma desteği.",
    tags: ["Rust", "CLI", "Görüntü"],
    stars: "1.8k",
    order: "02"
  },
  {
    id: "3",
    name: "DB_Sync_Pro",
    description: "Birden fazla sağlayıcı arasında gerçek zamanlı veritabanı senkronizasyonu. PostgreSQL, MongoDB, Redis tek bir API altında birleşti.",
    tags: ["Go", "Veritabanı", "Senk"],
    stars: "956",
    order: "03"
  }
];

const logsEn: ActivityLog[] = [
  {
    timestamp: "2024-12-25 23:45",
    type: "commit",
    hash: "a3f2c1d",
    message: "Refactored memory allocation for 40% faster cold starts"
  },
  {
    timestamp: "2024-12-25 21:30",
    type: "merge",
    hash: "b7e4a2f",
    message: "Merged feature/async-streaming into main"
  },
  {
    timestamp: "2024-12-25 18:15",
    type: "deploy",
    message: "Production deployment v2.3.1 successful"
  },
  {
    timestamp: "2024-12-24 14:22",
    type: "commit",
    hash: "c9d3b5e",
    message: "Fixed memory leak in WebSocket handler"
  },
  {
    timestamp: "2024-12-24 09:00",
    type: "alert",
    message: "CPU optimization: reduced idle usage by 25%"
  }
];

const logsTr: ActivityLog[] = [
  {
    timestamp: "2024-12-25 23:45",
    type: "commit",
    hash: "a3f2c1d",
    message: "Soğuk başlangıçları %40 hızlandırmak için bellek tahsisi yeniden düzenlendi"
  },
  {
    timestamp: "2024-12-25 21:30",
    type: "merge",
    hash: "b7e4a2f",
    message: "feature/async-streaming dalı main ile birleştirildi"
  },
  {
    timestamp: "2024-12-25 18:15",
    type: "deploy",
    message: "Canlı ortam dağıtımı v2.3.1 başarılı"
  },
  {
    timestamp: "2024-12-24 14:22",
    type: "commit",
    hash: "c9d3b5e",
    message: "WebSocket işleyicisindeki bellek sızıntısı düzeltildi"
  },
  {
    timestamp: "2024-12-24 09:00",
    type: "alert",
    message: "CPU optimizasyonu: bekleme kullanımı %25 azaltıldı"
  }
];

export const mockProjects: Record<Language, Project[]> = {
  en: projectsEn,
  tr: projectsTr
};

export const mockLogs: Record<Language, ActivityLog[]> = {
  en: logsEn,
  tr: logsTr
};
