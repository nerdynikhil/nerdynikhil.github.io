const cls = 'inline-block flex-shrink-0'

export function PlatformIcon({ type, size = 14 }: { type: string; size?: number }) {
  switch (type) {
    case 'apple':
      return (
        <svg className={cls} width={size} height={size} viewBox="0 0 384 512" fill="currentColor">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-27.1-46.5-42.2-82.6-45.3-35.1-3-73.4 20.5-87.5 20.5-14.8 0-49-19.5-74.3-19.5C63.1 140.2 0 185.3 0 284.2c0 29.4 5.4 59.8 16.2 91.2 14.4 41.8 66.3 144.2 120.2 142.5 27.5-.7 47-19.3 78.8-19.3 30.7 0 49 19.3 78.8 19.3 54.3-.7 101.4-93.3 115.1-135.2-73.2-34.8-70.4-101.6-70.4-104.6zM239.4 110.4c27.7-33.1 25.1-63.4 24.3-74.4-24.4 1.5-52.7 16.8-68.9 36.1-17.7 21-28 46.6-25.8 74.9 26.5 2 50.7-12.5 70.4-36.6z" />
        </svg>
      )

    case 'chrome':
      return (
        <svg className={cls} width={size} height={size} viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="32" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="31" x2="13" y2="43" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="17" x2="13" y2="5" stroke="currentColor" strokeWidth="2" />
        </svg>
      )

    case 'vscode':
      return (
        <svg className={cls} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.583.063a1.5 1.5 0 0 0-1.032.392 1.5 1.5 0 0 0-.001 0L7.2 9.4 3.1 6.2a1 1 0 0 0-1.3.1l-1.4 1.4a1 1 0 0 0 0 1.4L4.1 12 .4 14.9a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.3.1L7.2 14.6l9.35 8.945A1.5 1.5 0 0 0 19 22.5v-21a1.5 1.5 0 0 0-1.417-1.437zM17 6.4l-5.9 5.6L17 17.6z" />
        </svg>
      )

    default:
      return null
  }
}
