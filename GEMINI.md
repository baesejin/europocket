# EuroPocket 프로젝트 개발 규칙

## 작업 대상 분기 규칙 (Scope Prefix Rules)
유저의 요청 프롬프트 맨 앞의 접두사에 따라 수정 대상 파일을 아래와 같이 엄격히 구분하여 작업합니다:

1. **`[public]` 으로 시작하는 경우**:
   - `europocket_public.html` **만 수정**합니다.
   - `europocket.html`, `index.html`은 절대 수정하지 않습니다.
   - 배포용 앱의 데이터 클린 상태(`INITIAL_DATA = []`, `europocket_pub_*`)를 유지합니다.

2. **`[private]` 으로 시작하는 경우**:
   - `europocket.html` **만 수정**하고, 수정한 내용을 `index.html`에 동기화 복사합니다.
   - `europocket_public.html`은 절대 수정하지 않습니다.
   - 개인 거래 데이터 및 기존 개인 설정을 보존합니다.

3. **접두사가 없는 경우 (기본)**:
   - `europocket.html` (및 `index.html`)과 `europocket_public.html` **둘 다 동시에 수정**합니다.
   - 공통 기능, UI 개선, 스타일, 버그 수정을 두 버전에 모두 반영하되, 각 버전의 고유 특성(public의 클린 상태 vs private의 개인 데이터)은 안전하게 유지합니다.
