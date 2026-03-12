-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'OPERATOR', 'GUARD');

-- CreateEnum
CREATE TYPE "TipoContentor" AS ENUM ('PES_20', 'PES_40', 'REEFER', 'TANQUE');

-- CreateEnum
CREATE TYPE "EstadoContentor" AS ENUM ('VAZIO', 'CHEIO');

-- CreateEnum
CREATE TYPE "TipoMovimentacao" AS ENUM ('GATE_IN', 'GATE_OUT');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'OPERATOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "motorista" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "telefone" TEXT,

    CONSTRAINT "motorista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "veiculo" (
    "id" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "modelo" TEXT,
    "motoristaId" TEXT NOT NULL,

    CONSTRAINT "veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zona" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "zona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contentor" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "tipo" "TipoContentor" NOT NULL,
    "estado" "EstadoContentor" NOT NULL,
    "zonaId" TEXT,

    CONSTRAINT "contentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movimentacao" (
    "id" TEXT NOT NULL,
    "tipo" "TipoMovimentacao" NOT NULL,
    "contentorId" TEXT NOT NULL,
    "veiculoId" TEXT NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movimentacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "motorista_documento_key" ON "motorista"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "veiculo_placa_key" ON "veiculo"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "zona_nome_key" ON "zona"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "contentor_codigo_key" ON "contentor"("codigo");

-- AddForeignKey
ALTER TABLE "veiculo" ADD CONSTRAINT "veiculo_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "motorista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contentor" ADD CONSTRAINT "contentor_zonaId_fkey" FOREIGN KEY ("zonaId") REFERENCES "zona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentacao" ADD CONSTRAINT "movimentacao_contentorId_fkey" FOREIGN KEY ("contentorId") REFERENCES "contentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentacao" ADD CONSTRAINT "movimentacao_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "veiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
