# App contoh UKL

## Penggunaan

### Install package-package ini:
```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y git nodejs docker
sudo systemctl start docker
```

### Clone repository ini kemudian jalankan:
```bash
git clone https://github.com/teguhbayu/latihan-ukl-frontend.git

cd latihan-ukl-frontend/ # PASTIKAN KALIAN MASUK KE DIRECTORY INI!!!!!!

touch .env.local
nano .env.local

#Isi file .env.local :
API_URI = "XXXXXXXXXXXXXXXXXXXXX" # ganti placeholder X menjadi invoke URL api gateway
```

### Buat image container docker dan jalankan containernya:
```bash
sudo docker build -t ukl/latihan:1.0.0 .
sudo docker run -d -p 80:3000 ukl/latihan:1.0.0
```