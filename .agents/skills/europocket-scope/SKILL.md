---
name: europocket-scope
description: >-
  명령어 접두사([public], [private], 또는 접두사 없음)에 따라 유로포켓(EuroPocket) 가계부의 
  배포용(public) 및 개인용(private) 파일 수정 범위를 분기 처리하는 규칙 및 절차입니다.
---

# EuroPocket 작업 범위 분기 가이드

유로포켓 앱 수정 요청 시 명령어 맨 앞의 접두사에 따라 대상을 엄격히 분기합니다.

## 분기 규칙

### 1. `[public]` 접두사로 시작하는 경우
- **대상 파일**: `europocket_public.html` 만 수정
- **주의 사항**:
  - `europocket.html` 및 `index.html`은 절대 수정하지 않습니다.
  - 배포용 파일의 초기 거래 내역은 항상 클린 상태(`INITIAL_DATA = []`)를 유지해야 하며, 개인 거래 내역이 포함되지 않도록 합니다.
  - 스토리지 키(`europocket_pub_*`) 격리를 유지합니다.

### 2. `[private]` 접두사로 시작하는 경우
- **대상 파일**: `europocket.html` 및 `index.html` 만 수정
- **주의 사항**:
  - `europocket_public.html`은 절대 수정하지 않습니다.
  - `europocket.html`을 수정한 후에는 항상 `index.html`에 동일하게 복사/동기화합니다.
  - 개인 거래 내역(622건 및 수기 작성 내역)을 온전하게 보존합니다.

### 3. 접두사가 없는 경우 (기본 모드)
- **대상 파일**: `europocket_public.html`, `europocket.html`, `index.html` **모두 동시 수정**
- **주의 사항**:
  - 두 버전의 기능, UI, 버그 수정 등을 동시에 적용합니다.
  - 단, 각 버전의 고유 특성(public의 클린 초기데이터/`europocket_pub_*` 키, private의 개인 데이터/`europocket_*` 키)은 유지하면서 공통 로직과 화면 요소를 일치시킵니다.
  - `europocket.html` 수정 후 `index.html` 동기화를 잊지 않습니다.

