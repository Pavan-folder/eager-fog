// src/components/AIAnalyzer.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Brain } from "lucide-react";

const AIAnalyzer = ({ buyer, seller }) => {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const runAnalysis = () => {
    setLoading(true);
    setAnalysis(null);

    // Simulated AI result delay
    setTimeout(() => {
      const compatibilityScore = Math.floor(Math.random() * 21) + 80; // 80–100%
      const suggestions = [
        "Strong product-market fit detected.",
        "Buyer’s target market aligns with seller’s capacity.",
        "Seller’s pricing model is competitive for buyer’s region.",
        "High probability of deal closure within 30 days.",
      ];

      setAnalysis({
        score: compatibilityScore,
        insights: suggestions,
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="p-4 shadow-md rounded-2xl">
      <CardContent>
        <div className="flex items-center mb-4">
          <Brain className="text-purple-600 mr-2" />
          <h2 className="text-xl font-bold">AI Deal Analyzer</h2>
        </div>

        {buyer && seller ? (
          <>
            <p className="text-gray-600 mb-4">
              Analyzing potential match between <b>{buyer.name}</b> and{" "}
              <b>{seller.name}</b>...
            </p>
            <Button onClick={runAnalysis} disabled={loading} className="mb-4">
              {loading ? (
                <Loader2 className="animate-spin mr-2" />
              ) : (
                "Run AI Analysis"
              )}
            </Button>

            {analysis && (
              <div className="bg-gray-50 p-4 rounded-lg border mt-4">
                <p className="text-lg font-semibold text-green-700">
                  Compatibility Score: {analysis.score}%
                </p>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  {analysis.insights.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-500">
            Select both a buyer and a seller to run AI analysis.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default AIAnalyzer;
