# Hello World API - Makefile

.PHONY: help build run test clean deps

# デフォルトターゲット
help:
	@echo "🚀 Hello World API - 利用可能なコマンド:"
	@echo ""
	@echo "  make build    - アプリケーションをビルド"
	@echo "  make run      - アプリケーションを実行"
	@echo "  make test     - テストを実行"
	@echo "  make clean    - ビルドファイルをクリーン"
	@echo "  make deps     - 依存関係を更新"
	@echo "  make swagger  - Swaggerドキュメントを生成"
	@echo "  make docker   - Docker Composeで起動"
	@echo ""
	@echo "環境変数管理:"
	@echo "  make env-init ENV=development # 環境変数ファイルを初期化"
	@echo "  make env-validate # 環境変数ファイルを検証"
	@echo "  make env-backup # 環境変数ファイルをバックアップ"
	@echo "  make env-restore FILE=backup # バックアップから復元"
	@echo "  make env-list # 利用可能な環境を一覧表示"
	@echo ""
	@echo "  make help     - このヘルプを表示"

# アプリケーションをビルド
build:
	@echo "🔨 Hello World API をビルド中..."
	cd src && go build -o ../bin/hello-world-api main.go
	@echo "✅ ビルド完了: bin/hello-world-api"

# アプリケーションを実行
run:
	@echo "🚀 Hello World API を起動中..."
	cd src && go run main.go

# テストを実行（テストDB使用）
test:
	@echo "🧪 テストDBを使用したテストを実行中..."
	@echo "🔧 テスト用環境変数ファイルを生成中..."
	@./script/gen-local-test-env.sh
	@echo "🔧 テスト用DBを起動中..."
	@docker compose -f docker/docker-compose.test.yml up -d db-test
	@echo "⏳ DB起動を待機中..."
	@sleep 10
	@echo "🧪 テストを実行中..."
	@cd src && GIN_MODE=test go test -v ./test/... -timeout 60s
	@echo "🐳 テスト用DBを停止中..."
	@docker compose -f docker/docker-compose.test.yml down

# ビルドファイルをクリーン
clean:
	@echo "🧹 ビルドファイルをクリーン中..."
	rm -rf bin/
	go clean
	@echo "✅ クリーン完了"

# 依存関係を更新
deps:
	@echo "📦 依存関係を更新中..."
	go mod tidy
	go mod download
	@echo "✅ 依存関係更新完了"

# 環境変数ファイルの管理
env-init:
	@echo "🔧 環境変数ファイルを初期化中..."
	@if [ -z "$(ENV)" ]; then \
		echo "⚠️  環境タイプを指定してください: make env-init ENV=development"; \
		echo "利用可能な環境: development, test, local, production"; \
		exit 1; \
	fi
	@./script/env-manager.sh init $(ENV)

env-validate:
	@echo "🔍 環境変数ファイルを検証中..."
	@./script/env-manager.sh validate

env-backup:
	@echo "💾 環境変数ファイルをバックアップ中..."
	@./script/env-manager.sh backup

env-restore:
	@echo "🔄 環境変数ファイルを復元中..."
	@if [ -z "$(FILE)" ]; then \
		echo "⚠️  復元ファイルを指定してください: make env-restore FILE=.env.backup.20240101_120000"; \
		exit 1; \
	fi
	@./script/env-manager.sh restore $(FILE)

env-list:
	@echo "📋 利用可能な環境を一覧表示中..."
	@./script/env-manager.sh list

# 開発用（ホットリロード）
dev:
	@echo "🔥 開発モードで起動中..."
	@if command -v air > /dev/null; then \
		air; \
	else \
		echo "⚠️  air がインストールされていません。通常モードで起動します。"; \
		go run main.go; \
	fi

# 本番用ビルド
build-prod:
	@echo "🏭 本番用ビルド中..."
	cd src && CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o ../bin/hello-world-api main.go
	@echo "✅ 本番用ビルド完了: bin/hello-world-api"

# コードフォーマット
fmt:
	@echo "🎨 コードをフォーマット中..."
	go fmt ./...
	@echo "✅ フォーマット完了"

# リント
lint:
	@echo "🔍 コードをリント中..."
	@if command -v golangci-lint > /dev/null; then \
		golangci-lint run; \
	else \
		echo "⚠️  golangci-lint がインストールされていません。"; \
	fi

# Swaggerドキュメントを生成
swagger:
	@echo "📖 Swaggerドキュメントを生成中..."
	@if command -v swag > /dev/null; then \
		cd src && swag init -g main.go; \
	else \
		echo "⚠️  swag がインストールされていません。go install github.com/swaggo/swag/cmd/swag@latest を実行してください。"; \
	fi

# Swaggerテストを実行
test-swagger:
	@echo "🧪 Swaggerテストを実行中..."
	go test -v ./test/... -run "TestSwagger"

# ローカルテスト用DBを起動
test-db-up:
	@echo "🐳 テスト用DBを起動中..."
	docker compose -f docker/docker-compose.test.yml up -d db-test

# ローカルテスト用DBを停止
test-db-down:
	@echo "🐳 テスト用DBを停止中..."
	docker compose -f docker/docker-compose.test.yml down

# ローカルテストを実行（Docker DB使用）
test-local:
	@echo "🧪 ローカルテストを実行中（Docker DB使用）..."
	@if [ ! -f .env.test ]; then \
		echo "⚠️  .env.test ファイルが見つかりません。"; \
		echo "   script/gen-local-test-env.sh を実行してください。"; \
		exit 1; \
	fi
	@echo "🔧 テスト用DBを起動中..."
	@docker compose -f docker/docker-compose.test.yml up -d db-test
	@echo "⏳ DB起動を待機中..."
	@sleep 10
	@echo "🧪 テストを実行中..."
	@GIN_MODE=test go test -v ./test/... -timeout 30s
	@echo "🐳 テスト用DBを停止中..."
	@docker compose -f docker/docker-compose.test.yml down

# ローカルテストを実行（ローカルDB使用）
test-local-db:
	@echo "🧪 ローカルテストを実行中（ローカルDB使用）..."
	@if [ ! -f .env.local ]; then \
		echo "⚠️  .env.local ファイルが見つかりません。"; \
		echo "   script/gen-local-test-env.sh を実行してください。"; \
		exit 1; \
	fi
	@echo "🧪 テストを実行中..."
	@GIN_MODE=test go test -v ./test/... -timeout 30s

# Docker Composeで起動
docker:
	@echo "🐳 Docker Composeで起動中..."
	docker compose -f docker/docker-compose.yml up --build

# Docker Composeでバックグラウンド起動
docker-bg:
	@echo "🐳 Docker Composeでバックグラウンド起動中..."
	docker compose -f docker/docker-compose.yml up -d --build

# Docker Composeで停止
docker-down:
	@echo "🐳 Docker Composeで停止中..."
	docker compose -f docker/docker-compose.yml down
