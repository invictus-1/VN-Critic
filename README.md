🧠 VN Critic 

VN Critic is a modern, feature-rich desktop application designed for Visual Novel enthusiasts who want to rate, track, and analyze their reading history with precision.

Unlike simple 1-10 rating systems, VN Critic allows you to break down every aspect of a Visual Novel—from plot pacing to character art—and generates a weighted final score based on your personal preferences. It features seamless integration with VNDB (Visual Novel Database) and optional AI-powered analysis to help you understand your own rating biases.

<img width="850" height="811" alt="Screenshot_2" src="https://github.com/user-attachments/assets/f56cd42c-bf3f-4563-a586-9f63100f6eba" />
<img width="853" height="809" alt="Screenshot_3" src="https://github.com/user-attachments/assets/e67ba1c8-02e2-46a5-a758-519c48f45750" />

✨ Features

📊 Advanced Rating System

Granular Scoring: Rate specific elements including Plot, Pacing, Route Structure, Character Art, Backgrounds, Soundtrack, World Building, and Emotional Impact.

Dynamic Weights: Not everyone values story over gameplay. Click the Gear Icon on any section to adjust its multiplier (e.g., make "Visuals" count for 2x the score).

Favorite Characters: Track your top 3 characters per VN with individual ratings that factor into the final score.

Visualizations: Real-time Radar Chart (Spider Graph) updates as you adjust sliders.

🌐 VNDB Integration

Auto-Metadata: Search for any Visual Novel to automatically pull its Title, Cover Art, and Tags.

Tag Management: Automatically categorizes tags into Content, Technical, and Sexual categories using the VNDB API.

Two-Way Sync:

Import: Pull your entire voting history from VNDB to populate your local library instantly.

Sync: Push your calculated final score directly to your VNDB account with one click.

Offline Caching: Cover images are cached locally, so your library looks great even without an internet connection.

🤖 AI Analysis [WIP]

Connect your OpenAI Compatible API Key to get an AI critic that reviews your current rating against your history.

Detects recency bias or inconsistencies (e.g., "You rated this story lower than [X], despite giving it higher pacing scores. Why?").

📂 Data Management

Local First: All data is stored securely on your own machine.

JSON Import/Export: Easily backup your library or move it to another computer.

🚀 Installation

Method 1: Download Zip click EXE
Method 2: Download source and do npm install then npm run build-exe to get your own exe file.


⚙️ Configuration


Setting up VNDB Sync

Log in to VNDB.org.

Go to My Profile > Applications and generate a new API Token (Ensure both permissions are checked). Once finished import your library and click the Auto-Link IDs button to ensure each VN has the proper ID linked so the scores can update. 
Any score that is set will automatically be rounded up before being sent to VNDB as they only accept 1.5 vs 1.46 as an example.

So if you scored a VN as 7.53 it rounds to 7.5 same applies when rounding up. the scores on the application
itself will remain whatever you had it as so 7.53 stays as that and you can export it should you want to.

In VN Critic, click Settings (bottom left).

Paste your token into the VNDB Account Connection and click "Connect".

Setting up AI Analysis (Optional)

Get an API Key from an OpenAI compatible Platform.

In VN Critic Settings, paste the key into the OpenAI field along with all the info for whatever model and platform you're using.

Note: Keys are stored in Local Storage and only sent directly to OpenAI endpoints.

🛠️ Tech Stack

Runtime: Electron

Frontend: React 18

Styling: Tailwind CSS

Icons: Lucide

Build Tool: Electron Builder
