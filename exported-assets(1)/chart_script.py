import plotly.graph_objects as go
import pandas as pd

# Data
data = [
    {"Category": "Data Accuracy", "Before": 30, "After": 95},
    {"Category": "Code Quality", "Before": 40, "After": 90},
    {"Category": "Accessibility", "Before": 25, "After": 85},
    {"Category": "Performance", "Before": 50, "After": 90},
    {"Category": "Sci Rigor", "Before": 45, "After": 95},
    {"Category": "User Experience", "Before": 60, "After": 85}
]

df = pd.DataFrame(data)

# Create horizontal bar chart
fig = go.Figure()

# Add Before bars
fig.add_trace(go.Bar(
    y=df['Category'],
    x=df['Before'],
    name='Before',
    orientation='h',
    marker_color='#B4413C',
    cliponaxis=False
))

# Add After bars
fig.add_trace(go.Bar(
    y=df['Category'],
    x=df['After'],
    name='After',
    orientation='h',
    marker_color='#1FB8CD',
    cliponaxis=False
))

# Update layout
fig.update_layout(
    title='Rusty Crayfish: Tech Improvements',
    xaxis_title='Score',
    yaxis_title='Category',
    barmode='group',
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5)
)

# Update axes
fig.update_xaxes(range=[0, 100])

# Save the chart
fig.write_image('rusty_crayfish_improvements.png')