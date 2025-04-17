import { useEffect, useState } from "react";
import { db, doc, getDoc, setDoc, updateDoc, increment } from "../firebase";

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const countRef = doc(db, "visitors", "portfolio");

    const updateVisit = async () => {
      const snap = await getDoc(countRef);

      if (snap.exists()) {
        await updateDoc(countRef, {
          count: increment(1),
        });

        const updatedSnap = await getDoc(countRef);
        setCount(updatedSnap.data().count);
      } else {
        await setDoc(countRef, { count: 1 });
        setCount(1);
      }
    };

    updateVisit();
  }, []);

  return (
    <p style={{ textAlign: "center", marginTop: "20px", color: "#888" }}>
      👁️ Visitor Count: {count !== null ? count : "Loading..."}
    </p>
  );
}

export default VisitorCounter;
