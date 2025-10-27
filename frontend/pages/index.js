
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [pet, setPet] = useState({ species: "", age: "", weight: "", allergy: "" });
  const [result, setResult] = useState("");

  const recommend = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/api/ai/recommend", pet);
    setResult(res.data.result);
  };

  const subscribe = async () => {
    const res = await axios.post("http://localhost:4000/api/payment/start", {
      amount: 30000,
      orderName: "AI 추천 사료 구독",
    });
    window.location.href = res.data.url;
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>🐶 구DOG — AI 맞춤 사료 추천</h1>
      <form onSubmit={recommend}>
        <input placeholder="종" onChange={(e) => setPet({ ...pet, species: e.target.value })} />
        <input placeholder="나이" onChange={(e) => setPet({ ...pet, age: e.target.value })} />
        <input placeholder="체중(kg)" onChange={(e) => setPet({ ...pet, weight: e.target.value })} />
        <input placeholder="알러지" onChange={(e) => setPet({ ...pet, allergy: e.target.value })} />
        <button type="submit">추천받기</button>
      </form>

      {result && (
        <div style={{ marginTop: 20 }}>
          <p>{result}</p>
          <button onClick={subscribe}>이 사료 정기구독하기</button>
        </div>
      )}
    </div>
  );
}
