import { NextResponse } from "next/server";

const ENV_KEY = "GOOGLE_SCRIPT_WEB_APP_URL";

export interface ContactRequestBody {
  name: string;
  contact: string;
  message: string;
}

function validateBody(body: unknown): body is ContactRequestBody {
  return (
    typeof body === "object" &&
    body !== null &&
    "name" in body &&
    "contact" in body &&
    "message" in body &&
    typeof (body as ContactRequestBody).name === "string" &&
    typeof (body as ContactRequestBody).contact === "string" &&
    typeof (body as ContactRequestBody).message === "string"
  );
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const scriptUrl = process.env[ENV_KEY];
    if (!scriptUrl?.startsWith("https://")) {
      return NextResponse.json(
        { error: "Сервис заявок не настроен" },
        { status: 503 }
      );
    }

    const raw = await request.json();
    if (!validateBody(raw)) {
      return NextResponse.json(
        { error: "Неверные данные: имя, контакт и сообщение обязательны" },
        { status: 400 }
      );
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: raw.name.trim(),
        contact: raw.contact.trim(),
        message: raw.message.trim(),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "Не удалось отправить заявку" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ошибка при отправке заявки" },
      { status: 500 }
    );
  }
}
