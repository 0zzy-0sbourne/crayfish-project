import plotly.graph_objects as go
import plotly.express as px
import pandas as pd

# Create the data
data = [
    {"Year": 1973, "Event": "First Detection", "Type": "Invasion", "Impact": "High"},
    {"Year": 1985, "Event": "Possession Ban", "Type": "Regulation", "Impact": "Medium"},
    {"Year": 1996, "Event": "Taylor & Redmer Study", "Type": "Research", "Impact": "High"},
    {"Year": 2008, "Event": "Crayfish Corps Founded", "Type": "Management", "Impact": "Medium"},
    {"Year": 2023, "Event": "Compensatory Response", "Type": "Research", "Impact": "High"},
    {"Year": 2024, "Event": "eDNA Pilot Program", "Type": "Technology", "Impact": "Medium"}
]

df = pd.DataFrame(data)

# Abbreviate event names to fit 15 character limit
df['Event_Short'] = df['Event'].apply(lambda x: 
    x.replace('First Detection', 'First Detect')
    .replace('Possession Ban', 'Poss Ban')
    .replace('Taylor & Redmer Study', 'T&R Study')
    .replace('Crayfish Corps Founded', 'Corps Founded')
    .replace('Compensatory Response', 'Comp Response')  
    .replace('eDNA Pilot Program', 'eDNA Pilot')
)

# Set colors based on type - invasion gets red, others get blues/teals
color_map = {
    'Invasion': '#B4413C',      # red for invasion
    'Regulation': '#1FB8CD',    # cyan for regulation
    'Research': '#5D878F',      # darker cyan for research
    'Management': '#1FB8CD',    # cyan for management
    'Technology': '#5D878F'     # darker cyan for technology
}

# Set marker size based on impact
size_map = {'High': 20, 'Medium': 15}

# Create the timeline chart
fig = go.Figure()

# Add markers for each milestone
for i, row in df.iterrows():
    fig.add_trace(go.Scatter(
        x=[row['Year']],
        y=[0],
        mode='markers',
        marker=dict(
            size=size_map[row['Impact']],
            color=color_map[row['Type']],
            line=dict(width=2, color='white')
        ),
        name=row['Type'],
        hovertemplate=f"<b>{row['Year']}</b><br>{row['Event_Short']}<br>Type: {row['Type']}<br>Impact: {row['Impact']}<extra></extra>",
        showlegend=True if i == 0 or row['Type'] not in [df.iloc[j]['Type'] for j in range(i)] else False,
        cliponaxis=False
    ))

# Add a baseline line
fig.add_shape(
    type="line",
    x0=1970, y0=0, x1=2025, y1=0,
    line=dict(color="gray", width=2)
)

# Update layout
fig.update_layout(
    title="Rusty Crayfish Timeline Illinois",
    xaxis_title="Year",
    yaxis=dict(
        showticklabels=False,
        showgrid=False,
        zeroline=False,
        range=[-0.5, 0.5]
    ),
    xaxis=dict(
        range=[1970, 2025],
        showgrid=True,
        gridcolor='lightgray'
    ),
    legend=dict(
        orientation='h', 
        yanchor='bottom', 
        y=1.05, 
        xanchor='center', 
        x=0.5
    )
)

# Save the chart
fig.write_image("rusty_crayfish_timeline.png", width=800, height=400)